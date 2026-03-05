import { Resend } from "resend";
import twilio from "twilio";
import { db } from "@/db";
import { notificationLog } from "@/db/schema";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function getTwilioClient(): ReturnType<typeof twilio> | null {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) return null;
  return twilio(sid, token);
}

const LIVE = process.env.NOTIFICATIONS_LIVE === "true";

// ─── Types ───────────────────────────────────────────────────────────────────

export type OrderWithCustomer = {
  id: string;
  totalCents: number;
  deliveryStreet: string;
  deliveryCity: string;
  deliveryState: string;
  deliveryZip: string;
  status: string;
  customer: {
    email: string | null;
    phone: string | null;
    fullName: string | null;
    language: string;
  };
  items: Array<{
    productName: string;
    weightLbs: number;
    quantity: number;
    subtotalCents: number;
  }>;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

function formatAddress(order: OrderWithCustomer): string {
  return `${order.deliveryStreet}, ${order.deliveryCity}, ${order.deliveryState} ${order.deliveryZip}`;
}

async function logNotification({
  orderId,
  type,
  status,
  recipient,
  providerId,
}: {
  orderId: string;
  type: string;
  status: string;
  recipient: string;
  providerId?: string;
}) {
  await db.insert(notificationLog).values({
    orderId,
    type,
    status,
    recipient,
    providerId: providerId ?? null,
  });
}

// ─── Email Templates ─────────────────────────────────────────────────────────

function orderConfirmationHtml(order: OrderWithCustomer, lang: string): string {
  const isEs = lang === "es";
  const greeting = isEs ? "Gracias por tu pedido" : "Thank you for your order";
  const itemsLabel = isEs ? "Tu pedido" : "Your order";
  const totalLabel = isEs ? "Total" : "Total";
  const addressLabel = isEs ? "Entrega a" : "Delivering to";
  const footer = isEs
    ? "Brasena · El Bronx, NYC · Preguntas: support@brasena.com"
    : "Brasena · The Bronx, NYC · Questions: support@brasena.com";

  const itemRows = order.items
    .map(
      (item) =>
        `<tr>
          <td style="padding:8px 0;border-bottom:1px solid #2a2a2a;">
            ${item.productName} — ${item.weightLbs} lb × ${item.quantity}
          </td>
          <td style="padding:8px 0;border-bottom:1px solid #2a2a2a;text-align:right;">
            ${formatCents(item.subtotalCents)}
          </td>
        </tr>`
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;background:#0C0F0C;font-family:sans-serif;color:#ffffff;">
      <div style="max-width:560px;margin:40px auto;padding:32px;background:#111814;border-radius:12px;">
        
        <div style="margin-bottom:32px;">
          <span style="font-size:24px;font-weight:700;color:#8BAF8E;letter-spacing:0.1em;">
            BRASENA
          </span>
        </div>

        <h1 style="font-size:22px;font-weight:700;margin:0 0 8px;">
          ${greeting}
        </h1>
        <p style="color:#888;margin:0 0 32px;font-size:14px;">
          Order #${order.id.slice(-8).toUpperCase()}
        </p>

        <h2 style="font-size:14px;font-weight:600;color:#8BAF8E;letter-spacing:0.05em;margin:0 0 12px;">
          ${itemsLabel.toUpperCase()}
        </h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px;">
          ${itemRows}
          <tr>
            <td style="padding:12px 0;font-weight:700;">${totalLabel}</td>
            <td style="padding:12px 0;font-weight:700;text-align:right;">
              ${formatCents(order.totalCents)}
            </td>
          </tr>
        </table>

        <div style="background:#192019;border-radius:8px;padding:16px;font-size:13px;color:#aaa;">
          <span style="color:#8BAF8E;font-weight:600;">${addressLabel}:</span><br/>
          ${formatAddress(order)}
        </div>

        <p style="margin:32px 0 0;font-size:12px;color:#555;text-align:center;">
          ${footer}
        </p>
      </div>
    </body>
    </html>
  `;
}

function statusUpdateHtml(order: OrderWithCustomer, lang: string): string {
  const isEs = lang === "es";
  const statusLabels: Record<string, { en: string; es: string }> = {
    confirmed: {
      en: "Your order has been confirmed",
      es: "Tu pedido ha sido confirmado",
    },
    out_for_delivery: {
      en: "Your order is out for delivery",
      es: "Tu pedido está en camino",
    },
    delivered: {
      en: "Your order has been delivered",
      es: "Tu pedido ha sido entregado",
    },
    cancelled: {
      en: "Your order has been cancelled",
      es: "Tu pedido ha sido cancelado",
    },
  };

  const label =
    statusLabels[order.status]?.[isEs ? "es" : "en"] ??
    `Order status: ${order.status}`;

  const footer = isEs
    ? "Brasena · El Bronx, NYC"
    : "Brasena · The Bronx, NYC";

  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;background:#0C0F0C;font-family:sans-serif;color:#ffffff;">
      <div style="max-width:560px;margin:40px auto;padding:32px;background:#111814;border-radius:12px;">
        <div style="margin-bottom:24px;">
          <span style="font-size:24px;font-weight:700;color:#8BAF8E;letter-spacing:0.1em;">
            BRASENA
          </span>
        </div>
        <h1 style="font-size:20px;font-weight:700;margin:0 0 8px;">${label}</h1>
        <p style="color:#888;font-size:14px;margin:0 0 24px;">
          Order #${order.id.slice(-8).toUpperCase()} · ${formatCents(order.totalCents)}
        </p>
        <p style="font-size:12px;color:#555;text-align:center;margin:32px 0 0;">
          ${footer}
        </p>
      </div>
    </body>
    </html>
  `;
}

// ─── SMS Templates ────────────────────────────────────────────────────────────

function smsText(order: OrderWithCustomer, lang: string): string {
  const isEs = lang === "es";
  const orderId = order.id.slice(-8).toUpperCase();

  const templates: Record<string, { en: string; es: string }> = {
    out_for_delivery: {
      en: `Brasena: Your order #${orderId} is out for delivery! Est. arrival today. Questions? Reply to this message.`,
      es: `Brasena: Tu pedido #${orderId} está en camino. Llegará hoy. ¿Preguntas? Responde este mensaje.`,
    },
    delivered: {
      en: `Brasena: Order #${orderId} delivered! Enjoy your order. Thank you for choosing Brasena.`,
      es: `Brasena: ¡Pedido #${orderId} entregado! Disfruta tu pedido. Gracias por elegir Brasena.`,
    },
    confirmed: {
      en: `Brasena: Your order #${orderId} has been confirmed and is being prepared.`,
      es: `Brasena: Tu pedido #${orderId} ha sido confirmado y está siendo preparado.`,
    },
    cancelled: {
      en: `Brasena: Your order #${orderId} has been cancelled. Contact support@brasena.com for help.`,
      es: `Brasena: Tu pedido #${orderId} ha sido cancelado. Escríbenos a support@brasena.com.`,
    },
  };

  return (
    templates[order.status]?.[isEs ? "es" : "en"] ??
    `Brasena: Order #${orderId} status updated to ${order.status}.`
  );
}

// ─── Core send functions ──────────────────────────────────────────────────────

async function sendEmail({
  to,
  subject,
  html,
  orderId,
  type,
}: {
  to: string;
  subject: string;
  html: string;
  orderId: string;
  type: string;
}) {
  if (!LIVE) {
    console.log(`[MOCK EMAIL] To: ${to} | Subject: ${subject}`);
    await logNotification({
      orderId,
      type,
      status: "mock_sent",
      recipient: to,
      providerId: "mock",
    });
    return;
  }

  const resend = getResend();
  if (!resend) {
    console.log(`[MOCK EMAIL] No RESEND_API_KEY — To: ${to} | Subject: ${subject}`);
    await logNotification({
      orderId,
      type,
      status: "mock_sent",
      recipient: to,
      providerId: "mock",
    });
    return;
  }

  try {
    const result = await resend.emails.send({
      from: "Brasena <orders@brasena.com>",
      to,
      subject,
      html,
    });
    await logNotification({
      orderId,
      type,
      status: "sent",
      recipient: to,
      providerId: result.data?.id,
    });
  } catch (err) {
    console.error("[EMAIL ERROR]", err);
    await logNotification({
      orderId,
      type,
      status: "failed",
      recipient: to,
    });
  }
}

async function sendSMS({
  to,
  body,
  orderId,
  type,
}: {
  to: string;
  body: string;
  orderId: string;
  type: string;
}) {
  if (!LIVE) {
    console.log(`[MOCK SMS] To: ${to} | Body: ${body}`);
    await logNotification({
      orderId,
      type,
      status: "mock_sent",
      recipient: to,
      providerId: "mock",
    });
    return;
  }

  const twilioClient = getTwilioClient();
  if (!twilioClient) {
    console.log(`[MOCK SMS] No Twilio credentials — To: ${to} | Body: ${body}`);
    await logNotification({
      orderId,
      type,
      status: "mock_sent",
      recipient: to,
      providerId: "mock",
    });
    return;
  }

  try {
    const message = await twilioClient.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to,
    });
    await logNotification({
      orderId,
      type,
      status: "sent",
      recipient: to,
      providerId: message.sid,
    });
  } catch (err) {
    console.error("[SMS ERROR]", err);
    await logNotification({
      orderId,
      type,
      status: "failed",
      recipient: to,
    });
  }
}

// ─── Public notification functions ───────────────────────────────────────────

/**
 * Call this immediately after a successful order.create.
 * Sends order confirmation email to the customer.
 */
export async function sendOrderConfirmation(order: OrderWithCustomer) {
  if (!order.customer.email) return;

  const lang = order.customer.language ?? "en";
  const isEs = lang === "es";

  await sendEmail({
    to: order.customer.email,
    subject: isEs
      ? `Brasena — Pedido #${order.id.slice(-8).toUpperCase()} confirmado`
      : `Brasena — Order #${order.id.slice(-8).toUpperCase()} received`,
    html: orderConfirmationHtml(order, lang),
    orderId: order.id,
    type: "email_order_confirmation",
  });
}

/**
 * Call this after adminUpdateStatus changes the order status.
 * Sends email for all status changes.
 * Sends SMS only for: out_for_delivery, delivered.
 */
export async function sendStatusNotification(order: OrderWithCustomer) {
  const lang = order.customer.language ?? "en";
  const isEs = lang === "es";

  const statusLabels: Record<string, { en: string; es: string }> = {
    confirmed: { en: "Order Confirmed", es: "Pedido Confirmado" },
    out_for_delivery: { en: "Out for Delivery", es: "En Camino" },
    delivered: { en: "Delivered", es: "Entregado" },
    cancelled: { en: "Order Cancelled", es: "Pedido Cancelado" },
  };

  const subjectLabel =
    statusLabels[order.status]?.[isEs ? "es" : "en"] ?? order.status;

  // Email — all status changes except pending
  if (order.customer.email && order.status !== "pending") {
    await sendEmail({
      to: order.customer.email,
      subject: isEs
        ? `Brasena — ${subjectLabel} · #${order.id.slice(-8).toUpperCase()}`
        : `Brasena — ${subjectLabel} · #${order.id.slice(-8).toUpperCase()}`,
      html: statusUpdateHtml(order, lang),
      orderId: order.id,
      type: `email_status_${order.status}`,
    });
  }

  // SMS — only for out_for_delivery and delivered
  const smsStatuses = ["out_for_delivery", "delivered"];
  if (order.customer.phone && smsStatuses.includes(order.status)) {
    await sendSMS({
      to: order.customer.phone,
      body: smsText(order, lang),
      orderId: order.id,
      type: `sms_status_${order.status}`,
    });
  }
}
