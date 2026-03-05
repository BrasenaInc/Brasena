/**
 * Human-readable labels for notification log type and status.
 * Falls back to a friendly format of the raw value when unknown.
 */
const TYPE_LABELS: Record<string, string> = {
  email_order_confirmation: "Order confirmation",
  email_status_confirmed: "Order confirmed",
  email_status_out_for_delivery: "Out for delivery",
  email_status_delivered: "Delivered",
  sms_status_out_for_delivery: "SMS: Out for delivery",
  sms_status_delivered: "SMS: Delivered",
};

const STATUS_LABELS: Record<string, string> = {
  sent: "Sent",
  mock_sent: "Mock",
  failed: "Failed",
};

export function notificationTypeLabel(type: string): string {
  return TYPE_LABELS[type] ?? type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function notificationStatusLabel(status: string): string {
  return STATUS_LABELS[status] ?? status.replace(/_/g, " ");
}
