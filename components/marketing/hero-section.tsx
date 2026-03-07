"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import type { Locale } from "./marketing-page";

type SurveyItem = { id: string; q: string; opts: string[] };
type TypeCard = {
  id: string;
  tag: string;
  title: string;
  sub: string;
  features: string[];
  price: string;
  compare: string;
};

const SURVEY_ITEMS_EN: SurveyItem[] = [
  { id: "heard", q: "How did you hear about us?", opts: ["Instagram", "Friend / Family", "Flyer", "Other"] },
  { id: "freq", q: "How often do you buy meat?", opts: ["Weekly", "Bi-weekly", "Monthly", "Occasionally"] },
  { id: "spend", q: "Monthly meat budget?", opts: ["Under $50", "$50–$100", "$100–$200", "$200+"] },
  { id: "priority", q: "What matters most to you?", opts: ["Price", "Quality", "Convenience", "Variety"] },
];

const SURVEY_ITEMS_ES: SurveyItem[] = [
  { id: "heard", q: "¿Cómo te enteraste de nosotros?", opts: ["Instagram", "Amigo / Familia", "Volante", "Otro"] },
  { id: "freq", q: "¿Con qué frecuencia compras carne?", opts: ["Semanal", "Quincenal", "Mensual", "Ocasionalmente"] },
  { id: "spend", q: "¿Presupuesto mensual en carne?", opts: ["Menos de $50", "$50–$100", "$100–$200", "$200+"] },
  { id: "priority", q: "¿Qué es lo más importante para ti?", opts: ["Precio", "Calidad", "Conveniencia", "Variedad"] },
];

const TYPE_CARDS_EN: TypeCard[] = [
  { id: "residential", tag: "B2C", title: "For Families", sub: "Personal & household", features: ["Wholesale prices", "5–20 lb box sizes", "Flexible delivery", "No membership fee"], price: "From $4.99 / lb", compare: "vs $8–12 / lb retail" },
  { id: "business", tag: "B2B", title: "For Businesses", sub: "Restaurants, lounges & catering", features: ["Full case bulk pricing", "Custom cut specifications", "Priority scheduling", "Dedicated account manager"], price: "Volume pricing available", compare: "Contact us for quotes" },
];

const TYPE_CARDS_ES: TypeCard[] = [
  { id: "residential", tag: "B2C", title: "Para familias", sub: "Hogar y personal", features: ["Precios mayoristas", "Cajas 5–20 lb", "Entrega flexible", "Sin cuota de membresía"], price: "Desde $4.99 / lb", compare: "vs $8–12 / lb retail" },
  { id: "business", tag: "B2B", title: "Para empresas", sub: "Restaurantes, lounges y catering", features: ["Precios al por mayor por caja", "Cortes a medida", "Prioridad de entrega", "Gerente de cuenta dedicado"], price: "Precios por volumen", compare: "Contáctanos para cotizaciones" },
];

const heroCopy: Record<
  Locale,
  {
    heroLeft: { eyebrow: string; headline1: string; headline2: string; body: string; bullets: string[]; scroll: string };
    typeStep: { raffleTitle: string; raffleSub: string; raffleNote: string; waitlistTitle: string; waitlistSub: string; select: string };
    infoStep: { fullName: string; email: string; phone: string; birthday: string; address: string; addressPlaceholder: string; addressHint: string; back: string; continueBtn: string; required: string; invalidEmail: string };
    surveyStep: { banner: string; submitBtn: string; subline: string };
    successStep: { youAreOnTheList: string; welcome: string; raffleConfirmed: string; prize: string; confirmationSentTo: string; followInstagram: string; footer: string };
    waitlistCard: { titleType: string; titleInfo: string; titleSurvey: string; subType: string; subInfo: string; subSurvey: string; submitError: string };
    cta: { startOrdering: string; signIn: string };
  }
> = {
  en: {
    heroLeft: { eyebrow: "Wholesale Platform · The Bronx, NY", headline1: "Wholesale meat,", headline2: "delivered fresh.", body: "We bridge the gap between wholesale distributors and you — cutting out the middleman so restaurants, lounges, and families get premium cuts at real wholesale prices.", bullets: ["No middleman markup", "Same-day delivery", "Bulk pricing"], scroll: "Scroll to explore" },
    typeStep: { raffleTitle: "Launch Day Raffle", raffleSub: "Sign up & enter to win an Unknown Valuable Gift", raffleNote: "Every signup gets an automatic raffle entry. Winner announced at launch.", waitlistTitle: "Join the Brasena Waitlist", waitlistSub: "Choose how you will use Brasena", select: "Select" },
    infoStep: { fullName: "Full Name", email: "Email Address", phone: "Phone Number", birthday: "Birthday", address: "Address", addressPlaceholder: "Start typing your address...", addressHint: "US only. If your address doesn’t appear, enter your full mailing address. This will be used as your authorized mailing address.", back: "Back", continueBtn: "Continue to Survey", required: "Required", invalidEmail: "Enter a valid email" },
    surveyStep: { banner: "Completing the survey improves your raffle chances", submitBtn: "Submit", subline: "Your response will be saved." },
    successStep: { youAreOnTheList: "You are on the list", welcome: "Welcome", raffleConfirmed: "Raffle Entry Confirmed", prize: "Unknown Valuable Gift", confirmationSentTo: "Confirmation sent to", followInstagram: "Follow @brasenabx on Instagram", footer: "Once we launch, complete your profile and start ordering." },
    waitlistCard: { titleType: "Join the Waitlist", titleInfo: "Your Information", titleSurvey: "Quick Survey", subType: "Choose how you will use Brasena", subInfo: "We need a few details to confirm your spot", subSurvey: "Help us know you better (optional feel)", submitError: "Something went wrong. Please try again." },
    cta: { startOrdering: "Start ordering", signIn: "Sign in" },
  },
  es: {
    heroLeft: { eyebrow: "Plataforma mayorista · El Bronx, NY", headline1: "Carne al por mayor,", headline2: "entregada fresca.", body: "Cerramos la brecha entre distribuidores mayoristas y tú: sin intermediarios para que restaurantes, lounges y familias obtengan cortes premium a precios mayoristas.", bullets: ["Sin sobreprecio de intermediarios", "Entrega el mismo día", "Precios al por mayor"], scroll: "Desplazar para explorar" },
    typeStep: { raffleTitle: "Rifa del día de lanzamiento", raffleSub: "Regístrate y participa para ganar un regalo valioso sorpresa", raffleNote: "Cada registro obtiene una entrada automática. Ganador anunciado al lanzar.", waitlistTitle: "Únete a la lista de Brasena", waitlistSub: "Elige cómo usarás Brasena", select: "Seleccionar" },
    infoStep: { fullName: "Nombre completo", email: "Correo electrónico", phone: "Teléfono", birthday: "Fecha de nacimiento", address: "Dirección", addressPlaceholder: "Escribe tu dirección...", addressHint: "Solo EE. UU. Si no aparece tu dirección, escribe tu dirección postal completa. Se usará como tu dirección de correo autorizada.", back: "Atrás", continueBtn: "Continuar a la encuesta", required: "Requerido", invalidEmail: "Ingresa un correo válido" },
    surveyStep: { banner: "Completar la encuesta mejora tus posibilidades en la rifa", submitBtn: "Enviar", subline: "Tu respuesta se guardará." },
    successStep: { youAreOnTheList: "Estás en la lista", welcome: "Bienvenido", raffleConfirmed: "Entrada a la rifa confirmada", prize: "Regalo valioso sorpresa", confirmationSentTo: "Confirmación enviada a", followInstagram: "Seguir @brasenabx en Instagram", footer: "Cuando lancemos, completa tu perfil y empieza a pedir." },
    waitlistCard: { titleType: "Únete a la lista", titleInfo: "Tu información", titleSurvey: "Encuesta rápida", subType: "Elige cómo usarás Brasena", subInfo: "Necesitamos unos datos para confirmar tu lugar", subSurvey: "Ayúdanos a conocerte (opcional)", submitError: "Algo salió mal. Por favor intenta de nuevo." },
    cta: { startOrdering: "Empezar a pedir", signIn: "Iniciar sesión" },
  },
};

function MeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const vert = `attribute vec2 a_pos; void main(){gl_Position=vec4(a_pos,0.,1.);}`;

    const frag = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_res;

      float sdist(vec2 p, vec2 c){ return length(p - c); }

      void main(){
        vec2 uv = gl_FragCoord.xy / u_res;
        float t = u_time * 0.3;

        vec2 n0 = vec2(0.5 + 0.38*sin(t*0.71), 0.5 + 0.32*cos(t*0.59));
        vec2 n1 = vec2(0.5 + 0.35*cos(t*0.83), 0.5 + 0.40*sin(t*0.67));
        vec2 n2 = vec2(0.5 + 0.30*sin(t*1.10 + 1.0), 0.5 + 0.28*cos(t*0.90 + 2.0));
        vec2 n3 = vec2(0.5 + 0.42*cos(t*0.55 + 3.0), 0.5 + 0.22*sin(t*1.20 + 1.5));
        vec2 n4 = vec2(0.5 + 0.20*sin(t*1.40 + 4.0), 0.5 + 0.38*cos(t*0.75 + 0.5));

        float d0 = 1.0 / (0.001 + pow(sdist(uv,n0), 1.8));
        float d1 = 1.0 / (0.001 + pow(sdist(uv,n1), 1.8));
        float d2 = 1.0 / (0.001 + pow(sdist(uv,n2), 1.8));
        float d3 = 1.0 / (0.001 + pow(sdist(uv,n3), 1.8));
        float d4 = 1.0 / (0.001 + pow(sdist(uv,n4), 1.8));
        float total = d0+d1+d2+d3+d4;

        vec3 c0 = vec3(0.54, 0.69, 0.56);
        vec3 c1 = vec3(0.18, 0.45, 0.35);
        vec3 c2 = vec3(0.70, 0.85, 0.72);
        vec3 c3 = vec3(0.12, 0.30, 0.22);
        vec3 c4 = vec3(0.38, 0.60, 0.48);

        vec3 col = (c0*d0 + c1*d1 + c2*d2 + c3*d3 + c4*d4) / total;
        col = mix(vec3(0.047, 0.059, 0.047), col, 0.30);

        vec2 ctr = uv - 0.5;
        float vig = 1.0 - dot(ctr, ctr) * 2.2;
        col = mix(col * 0.4, col, clamp(vig, 0.0, 1.0));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_res");

    let rafId: number;
    const start = performance.now();
    const draw = () => {
      const t = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}

export type WaitlistFormData = {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  address: string;
};

const TYPE_CARDS: Record<Locale, TypeCard[]> = { en: TYPE_CARDS_EN, es: TYPE_CARDS_ES };
const SURVEY_ITEMS: Record<Locale, SurveyItem[]> = { en: SURVEY_ITEMS_EN, es: SURVEY_ITEMS_ES };

function TypeStep({ locale, onSelect }: { locale: Locale; onSelect: (type: string) => void }) {
  const t = heroCopy[locale].typeStep;
  const cards = TYPE_CARDS[locale];
  return (
    <div className="space-y-5">
      <div
        className="rounded-[10px] border px-4 py-3 text-center"
        style={{
          background: "rgba(139,175,142,0.07)",
          borderColor: "rgba(139,175,142,0.22)",
        }}
      >
        <div
          className="text-[9px] uppercase tracking-[0.3em]"
          style={{ color: "#8BAF8E" }}
        >
          {t.raffleTitle}
        </div>
        <div
          className="font-serif text-sm font-bold text-white"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t.raffleSub}
        </div>
        <div className="mt-1 text-[11px]" style={{ color: "#5A7A5A" }}>
          {t.raffleNote}
        </div>
      </div>

      <div className="text-center">
        <h2
          className="font-serif text-[17px] font-bold text-white"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t.waitlistTitle}
        </h2>
        <p className="mt-1 text-[11px]" style={{ color: "#5A7A5A" }}>
          {t.waitlistSub}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:items-stretch">
        {cards.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => onSelect(card.id)}
            className="flex cursor-pointer flex-col rounded-[13px] border p-3.5 text-left transition-all duration-200 hover:border-[rgba(139,175,142,0.6)] hover:bg-[rgba(139,175,142,0.05)]"
            style={{
              background: "rgba(17,24,20,0.92)",
              borderColor: "rgba(139,175,142,0.14)",
            }}
          >
            <span className="text-[9px]" style={{ color: "#8BAF8E" }}>
              {card.tag}
            </span>
            <div
              className="mt-1 font-serif text-[15px] font-bold text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {card.title}
            </div>
            <div className="text-[10px]" style={{ color: "#4A6A4A" }}>
              {card.sub}
            </div>
            <div
              className="my-3 h-px"
              style={{ background: "rgba(139,175,142,0.1)" }}
            />
            <div className="flex flex-1 flex-col gap-1.5">
              {card.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-1.5 text-[10px]"
                  style={{ color: "#6A8A6A" }}
                >
                  <span style={{ color: "#8BAF8E" }}>+</span>
                  {f}
                </div>
              ))}
            </div>
            <div className="mt-auto shrink-0">
              <div
                className="my-3 h-px"
                style={{ background: "rgba(139,175,142,0.1)" }}
              />
              <div
                className="text-xs font-bold"
                style={{ color: "#8BAF8E" }}
              >
                {card.price}
              </div>
              <div className="text-[10px] mb-3.5" style={{ color: "#3A5A3A" }}>
                {card.compare}
              </div>
              <div
                className="rounded-[7px] border py-2 text-center text-[11px]"
                style={{
                  borderColor: "rgba(139,175,142,0.4)",
                  color: "#8BAF8E",
                }}
              >
                {t.select}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const NOMINATIM_UA = "BrasenaWaitlist/1.0 (https://brasenabx.com)";

// US state name → 2-letter abbreviation (50 states + DC)
const US_STATE_ABBREV: Record<string, string> = {
  Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR", California: "CA", Colorado: "CO",
  Connecticut: "CT", Delaware: "DE", "District of Columbia": "DC", Florida: "FL", Georgia: "GA",
  Hawaii: "HI", Idaho: "ID", Illinois: "IL", Indiana: "IN", Iowa: "IA", Kansas: "KS", Kentucky: "KY",
  Louisiana: "LA", Maine: "ME", Maryland: "MD", Massachusetts: "MA", Michigan: "MI", Minnesota: "MN",
  Mississippi: "MS", Missouri: "MO", Montana: "MT", Nebraska: "NE", Nevada: "NV", "New Hampshire": "NH",
  "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND",
  Ohio: "OH", Oklahoma: "OK", Oregon: "OR", Pennsylvania: "PA", "Rhode Island": "RI", "South Carolina": "SC",
  "South Dakota": "SD", Tennessee: "TN", Texas: "TX", Utah: "UT", Vermont: "VT", Virginia: "VA",
  Washington: "WA", "West Virginia": "WV", Wisconsin: "WI", Wyoming: "WY",
};

type NominatimAddress = {
  house_number?: string;
  road?: string;
  street?: string;
  city?: string;
  town?: string;
  village?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
  [k: string]: string | undefined;
};

const CITY_PREFIXES = /^(village of|city of|town of)\s+/i;

/** Strip "Village of", "City of", "Town of" from locality name. */
function cityOnly(name: string): string {
  return name.replace(CITY_PREFIXES, "").trim();
}

/** Format as "address, city state zip" only — no county, country, or neighbourhood. */
function formatUSAddressShort(addr: NominatimAddress): string {
  const num = (addr.house_number ?? "").trim();
  const road = (addr.road ?? addr.street ?? "").trim();
  const streetLine = [num, road].filter(Boolean).join(" ");
  const rawCity = (
    addr.city ??
    addr.town ??
    addr.village ??
    addr.suburb ??
    ""
  ).trim();
  const city = cityOnly(rawCity);
  const stateRaw = (addr.state ?? "").trim();
  const state = stateRaw ? (US_STATE_ABBREV[stateRaw] ?? stateRaw) : "";
  const zip = (addr.postcode ?? "").trim();
  const cityStateZip = [city, state, zip].filter(Boolean).join(" ");
  if (!streetLine && !cityStateZip) return "";
  if (!streetLine) return cityStateZip;
  if (!cityStateZip) return streetLine;
  return `${streetLine}, ${cityStateZip}`;
}

/** True if string has a street number (leading digits). */
function hasStreetNumber(s: string): boolean {
  return /^\d+/.test(s.trim());
}

function toTitleCase(s: string): string {
  return s.replace(/\b(\w)/g, (_, c) => c.toUpperCase());
}

/** Normalize user-typed full address to "street, city state zip". */
function normalizeTypedAddress(value: string): string | null {
  const trimmed = value.trim();
  if (trimmed.length < 10) return null;
  const parts = trimmed.split(",").map((p) => p.trim()).filter(Boolean);
  if (parts.length < 2) return null;
  const streetPart = parts[0];
  if (!hasStreetNumber(streetPart)) return null;
  const last = parts[parts.length - 1];
  const zipMatch = last.match(/\b(\d{5})(-\d{4})?\s*$/);
  const zip = zipMatch ? zipMatch[1] : "";
  const statePart = zipMatch ? last.slice(0, zipMatch.index).trim() : last;
  const stateAbbrev = statePart.length === 2 ? statePart.toUpperCase() : (US_STATE_ABBREV[statePart] ?? statePart);
  const cityPart = parts.length >= 3 ? parts.slice(1, -1).join(" ") : parts[1];
  const city = toTitleCase(cityOnly(cityPart));
  const street = toTitleCase(streetPart.replace(/\s+/g, " "));
  if (!street || !city) return null;
  const cityStateZip = [city, stateAbbrev, zip].filter(Boolean).join(" ");
  return `${street}, ${cityStateZip}`;
}

function AddressAutocomplete({
  value,
  onChange,
  placeholder,
  className,
  error,
  locale,
  hint,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  className: string;
  error?: boolean;
  locale: Locale;
  hint?: string;
}) {
  const [suggestions, setSuggestions] = useState<Array<{ display: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lastSelectedRef = useRef<string | null>(null);

  useEffect(() => {
    if (value.length < 3) {
      setSuggestions([]);
      lastSelectedRef.current = null;
      return;
    }
    if (value === lastSelectedRef.current) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(value)}&format=json&addressdetails=1&limit=5&countrycodes=us`,
          {
            headers: { Accept: "application/json", "User-Agent": NOMINATIM_UA, "Accept-Language": locale === "es" ? "es" : "en" },
          }
        );
        if (!res.ok) return setSuggestions([]);
        const data = (await res.json()) as Array<{ address?: NominatimAddress; display_name?: string }>;
        const withStreet: Array<{ display: string; hasStreet: boolean }> = [];
        for (const item of Array.isArray(data) ? data : []) {
          if (item.address) {
            const short = formatUSAddressShort(item.address);
            const looksShort = short && short.split(",").length <= 2 && !short.toLowerCase().includes("united states") && !short.toLowerCase().includes("county");
            if (looksShort && !withStreet.some((x) => x.display === short)) withStreet.push({ display: short, hasStreet: hasStreetNumber(short) });
          }
        }
        withStreet.sort((a, b) => (b.hasStreet ? 1 : 0) - (a.hasStreet ? 1 : 0));
        const displayOnly = withStreet.map((x) => ({ display: x.display }));
        const typed = normalizeTypedAddress(value);
        if (typed && !displayOnly.some((x) => x.display === typed)) {
          displayOnly.unshift({ display: typed });
        }
        setSuggestions(displayOnly);
        setOpen(displayOnly.length > 0);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value, locale]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const select = (display: string) => {
    lastSelectedRef.current = display;
    onChange(display);
    setSuggestions([]);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative space-y-1">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        className={className}
        placeholder={placeholder}
        autoComplete="off"
      />
      {hint && <p className="text-[10px] text-white/55">{hint}</p>}
      {loading && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/50">…</span>
      )}
      {open && suggestions.length > 0 && (
        <ul
          className="absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-auto rounded-lg border border-[rgba(139,175,142,0.25)] bg-[#111814] py-1 shadow-lg"
          style={{ borderColor: "rgba(139,175,142,0.25)" }}
        >
          {suggestions.map((item, i) => (
            <li key={i}>
              <button
                type="button"
                className="w-full px-3 py-2.5 text-left text-xs text-white/90 hover:bg-[rgba(139,175,142,0.15)]"
                onMouseDown={(e) => { e.preventDefault(); select(item.display); }}
              >
                {item.display}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function InfoStep({
  locale,
  type,
  onBack,
  onNext,
}: {
  locale: Locale;
  type: string;
  onBack: () => void;
  onNext: (data: WaitlistFormData) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const t = heroCopy[locale].infoStep;

  const typeLabel = type === "residential" ? "B2C" : "B2B";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = t.required;
    if (!email.trim()) nextErrors.email = t.required;
    else if (!email.includes("@")) nextErrors.email = t.invalidEmail;
    if (!phone.trim()) nextErrors.phone = t.required;
    if (!birthday.trim()) nextErrors.birthday = t.required;
    if (!address.trim()) nextErrors.address = t.required;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    onNext({ name: name.trim(), email: email.trim(), phone: phone.trim(), birthday: birthday.trim(), address: address.trim() });
  };

  const inputClass =
    "w-full rounded-lg border bg-[#111814] px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1";
  const errorBorder = "border-red-500";
  const normalBorder = "border-[rgba(139,175,142,0.2)] focus:border-[#8BAF8E]";

  const fields = [
    { key: "name", label: t.fullName, value: name, set: setName, type: "text" as const },
    { key: "email", label: t.email, value: email, set: setEmail, type: "email" as const },
    { key: "phone", label: t.phone, value: phone, set: setPhone, type: "tel" as const },
    { key: "birthday", label: t.birthday, value: birthday, set: setBirthday, type: "date" as const },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-wider" style={{ color: "#8BAF8E" }}>
          {typeLabel}
        </span>
        <button type="button" onClick={onBack} className="text-[11px] text-white/70 hover:text-white">
          {t.back}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map(({ key, label, value, set, type }) => (
          <div key={key}>
            <label className="mb-1.5 block text-[9px] uppercase tracking-wider" style={{ color: "#5A7A5A" }}>
              {label}
            </label>
            <input
              type={type}
              value={value}
              onChange={(e) => set(e.target.value)}
              className={`${inputClass} ${errors[key] ? errorBorder : normalBorder}`}
              placeholder={label}
            />
            {errors[key] && <p className="mt-1 text-xs text-red-400">{errors[key]}</p>}
          </div>
        ))}

        <div>
          <label className="mb-1.5 block text-[9px] uppercase tracking-wider" style={{ color: "#5A7A5A" }}>
            {t.address}
          </label>
          <AddressAutocomplete
            value={address}
            onChange={setAddress}
            placeholder={t.addressPlaceholder}
            className={`${inputClass} ${errors.address ? errorBorder : normalBorder}`}
            error={!!errors.address}
            locale={locale}
            hint={t.addressHint}
          />
          {errors.address && <p className="mt-1 text-xs text-red-400">{errors.address}</p>}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg py-3 text-sm font-semibold text-[#0C0F0C]"
          style={{ background: "#8BAF8E" }}
        >
          {t.continueBtn}
        </button>
      </form>
    </div>
  );
}

function SurveyStep({
  locale,
  formData,
  type,
  onSubmit,
  isLoading,
}: {
  locale: Locale;
  formData: WaitlistFormData;
  type: string;
  onSubmit: (formData: WaitlistFormData, type: string, answers: Record<string, string>) => void;
  isLoading: boolean;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const t = heroCopy[locale].surveyStep;
  const surveyItems = SURVEY_ITEMS[locale];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData, type, answers);
  };

  return (
    <div className="space-y-5">
      <p className="text-center text-xs text-white/70">
        {t.banner}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {surveyItems.map((item, idx) => (
          <div key={item.id}>
            <p className="mb-2 text-sm font-medium text-white">
              {idx + 1}. {item.q}
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {item.opts.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAnswers((a) => ({ ...a, [item.id]: opt }))}
                  className="rounded-lg border px-3 py-2.5 text-left text-xs transition-colors"
                  style={
                    answers[item.id] === opt
                      ? {
                          borderColor: "#8BAF8E",
                          background: "rgba(139,175,142,0.12)",
                          color: "#8BAF8E",
                          fontWeight: 700,
                        }
                      : {
                          borderColor: "rgba(139,175,142,0.25)",
                          background: "rgba(17,24,20,0.9)",
                          color: "rgba(255,255,255,0.75)",
                        }
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl py-3.5 text-sm font-semibold text-[#0C0F0C] transition-opacity disabled:opacity-70"
          style={{ background: "#8BAF8E" }}
        >
          {isLoading ? "…" : t.submitBtn}
        </button>
      </form>

      <p className="text-center text-[10px] text-white/50">
        {t.subline}
      </p>
    </div>
  );
}

function SuccessStep({
  locale,
  formData,
  raffleNumber,
}: {
  locale: Locale;
  formData: WaitlistFormData;
  raffleNumber: number;
}) {
  const firstName = formData.name.split(" ")[0] || formData.name;
  const t = heroCopy[locale].successStep;

  return (
    <div className="space-y-5 text-center">
      <div
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border text-lg"
        style={{
          background: "rgba(139,175,142,0.15)",
          borderColor: "rgba(139,175,142,0.4)",
          color: "#8BAF8E",
        }}
      >
        *
      </div>
      <h2
        className="font-serif text-[22px] font-bold text-white"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {t.youAreOnTheList}
      </h2>
      <p className="text-[13px]" style={{ color: "#8BAF8E" }}>
        {t.welcome}, {firstName}
      </p>

      <div
        className="overflow-hidden rounded-[14px] border p-5"
        style={{
          background: "rgba(17,24,20,0.95)",
          borderColor: "rgba(139,175,142,0.28)",
        }}
      >
        <div
          className="-mx-5 -mt-5 mb-4 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, #8BAF8E, #4A8A5A, #8BAF8E)",
          }}
        />
        <div
          className="text-[9px] uppercase tracking-wider"
          style={{ color: "#5A7A5A" }}
        >
          {t.raffleConfirmed}
        </div>
        <div
          className="font-serif text-[34px] font-bold"
          style={{ color: "#8BAF8E", fontFamily: "Georgia, serif" }}
        >
          #{raffleNumber}
        </div>
        <div
          className="mt-2 h-px"
          style={{ background: "rgba(139,175,142,0.15)" }}
        />
        <p className="mt-2 text-[11px]" style={{ color: "#5A7A5A" }}>
          Prize: <span className="font-bold text-white">{t.prize}</span>
        </p>
      </div>

      <div
        className="rounded-[9px] border px-3.5 py-2.5 text-left"
        style={{
          background: "rgba(8,10,8,0.8)",
          borderColor: "rgba(139,175,142,0.12)",
        }}
      >
        <div className="text-[10px]" style={{ color: "#8BAF8E" }}>
          {t.confirmationSentTo}
        </div>
        <div className="mt-1 text-[12px]" style={{ color: "#8A9A8A" }}>
          {formData.email}
        </div>
        <div className="text-[12px]" style={{ color: "#8A9A8A" }}>
          {formData.phone}
        </div>
      </div>

      <a
        href="https://www.instagram.com/brasenabx"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-lg py-3 text-center text-sm font-semibold text-white"
        style={{
          background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
        }}
      >
        {t.followInstagram}
      </a>

      <p className="text-[10px]" style={{ color: "#3A5A3A" }}>
        {t.footer}
      </p>
    </div>
  );
}

function ProgressBar({ step }: { step: string }) {
  if (step === "type") return null;
  const steps = ["info", "survey", "success"];
  const idx = steps.indexOf(step);
  return (
    <div className="mb-4 flex gap-1">
      {steps.map((_, i) => (
        <div
          key={i}
          className="h-0.5 flex-1 rounded-sm transition-[background] duration-350"
          style={{
            background: i <= idx ? "#8BAF8E" : "rgba(139,175,142,0.15)",
          }}
        />
      ))}
    </div>
  );
}

export function WaitlistCard({ locale, source }: { locale: Locale; source?: string }) {
  const [step, setStep] = useState<"type" | "info" | "survey" | "success">(
    "type"
  );
  const [type, setType] = useState<string>("");
  const [formData, setFormData] = useState<WaitlistFormData | null>(null);
  const [raffleNumber, setRaffleNumber] = useState<number>(0);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const cardT = heroCopy[locale].waitlistCard;

  const submitWaitlist = trpc.waitlist.export.useMutation({
    onSuccess: (data) => {
      setRaffleNumber(data.raffleNumber);
      setStep("success");
    },
    onError: (err) => {
      setSubmitError(err.message === "Already on the waitlist" ? err.message : cardT.submitError);
    },
  });

  const handleSurveySubmit = (
    data: WaitlistFormData,
    stepType: string,
    answers: Record<string, string>
  ) => {
    setSubmitError(null);
    const surveyJson =
      Object.keys(answers).length > 0 ? JSON.stringify(answers) : undefined;
    submitWaitlist.mutate({
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim() || "—",
      birthday: data.birthday.trim() || "—",
      address: data.address.trim() || "—",
      type: stepType as "residential" | "business",
      ...(surveyJson ? { surveyAnswers: surveyJson } : {}),
      ...(source ? { source } : {}),
    });
  };

  const titles: Record<string, string> = {
    type: cardT.titleType,
    info: cardT.titleInfo,
    survey: cardT.titleSurvey,
  };
  const subtitles: Record<string, string> = {
    type: cardT.subType,
    info: cardT.subInfo,
    survey: cardT.subSurvey,
  };

  return (
    <div
      className="w-full rounded-[18px] p-6"
      style={{
        background: "rgba(10,14,10,0.80)",
        backdropFilter: "blur(22px)",
        border: "1px solid rgba(139,175,142,0.16)",
        boxShadow:
          "0 20px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(139,175,142,0.07)",
      }}
    >
      {step !== "success" && (
        <div className="mb-5">
          <ProgressBar step={step} />
          <h3
            className="font-serif text-base font-bold text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {titles[step]}
          </h3>
          <p className="mt-1 text-[11px]" style={{ color: "rgba(255,255,255,0.7)" }}>
            {subtitles[step]}
          </p>
        </div>
      )}

      {submitError && (
        <p className="mb-3 text-sm text-red-400">{submitError}</p>
      )}

      {step === "type" && (
        <TypeStep locale={locale} onSelect={(t) => { setType(t); setStep("info"); }} />
      )}
      {step === "info" && (
        <InfoStep
          locale={locale}
          type={type}
          onBack={() => setStep("type")}
          onNext={(data) => {
            setFormData(data);
            setStep("survey");
          }}
        />
      )}
      {step === "survey" && formData && (
        <SurveyStep
          locale={locale}
          formData={formData}
          type={type}
          onSubmit={handleSurveySubmit}
          isLoading={submitWaitlist.isPending}
        />
      )}
      {step === "success" && formData && (
        <SuccessStep locale={locale} formData={formData} raffleNumber={raffleNumber} />
      )}
    </div>
  );
}

function HeroLeft({ locale }: { locale: Locale }) {
  const t = heroCopy[locale].heroLeft;
  return (
    <div className="space-y-6">
      <div
        className="text-[11px] uppercase tracking-[0.42em]"
        style={{ color: "#8BAF8E" }}
      >
        {t.eyebrow}
      </div>
      <h1
        className="font-serif font-bold leading-tight text-white"
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(2.4rem, 3.8vw, 4.4rem)",
        }}
      >
        {t.headline1}{" "}
        <span style={{ color: "#8BAF8E" }}>{t.headline2}</span>
      </h1>
      <p className="max-w-md text-base leading-relaxed text-white/70">
        {t.body}
      </p>
      <ul className="space-y-2 text-sm text-white/80">
        {t.bullets.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: "#8BAF8E" }}
            />
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 pt-4" style={{ opacity: 0.3 }}>
        <div className="h-12 w-px" style={{ background: "#8BAF8E" }} />
        <span className="text-[10px] uppercase tracking-wider" style={{ color: "#8BAF8E" }}>
          {t.scroll}
        </span>
      </div>
    </div>
  );
}

interface HeroSectionProps {
  waitlistEnabled: boolean;
  locale: Locale;
}

export function HeroSection({ waitlistEnabled, locale }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden md:overflow-hidden md:h-screen"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0">
        <MeshCanvas />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#8BAF8E 1px, transparent 1px), linear-gradient(90deg, #8BAF8E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 88% at center, transparent, rgba(8,10,8,0.5))",
        }}
      />
      <div
        className="absolute left-1/2 top-[12%] bottom-[12%] w-px -translate-x-px hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(139,175,142,0.12) 25%, rgba(139,175,142,0.12) 75%, transparent)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-28 text-center">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
          Wholesale Platform · The Bronx, NY
        </p>
        <h1 className="mb-5 font-serif leading-[1.0] tracking-tight">
          <span className="block text-[clamp(52px,7vw,88px)] font-bold text-white">
            Wholesale meat,
          </span>
          <span className="block text-[clamp(52px,7vw,88px)] font-bold italic text-[#8aab8f]">
            delivered fresh.
          </span>
        </h1>
        <p className="mb-9 max-w-[440px] text-[15px] leading-[1.7] text-white/45">
          We bridge the gap between wholesale distributors and you, cutting out
          the middleman so restaurants, lounges, and families get premium cuts
          at real wholesale prices.
        </p>
        <div className="mb-11 flex w-full max-w-[320px] flex-col items-center gap-2.5">
          <Link
            href="/waitlist"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7a9e80] px-6 py-[15px] text-[14px] font-semibold text-white"
          >
            Join the Waitlist + Enter Raffle
            <ArrowRight className="h-[15px] w-[15px]" />
          </Link>
          <span className="text-[11px] text-white/20">
            Every signup is an automatic raffle entry. No purchase required.
          </span>
        </div>
        <div className="w-full max-w-[520px] border-t border-white/7 pt-6">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6B8F71]">
            Grand Opening Raffle
          </p>
          <div className="flex items-stretch">
            <div className="flex flex-1 flex-col items-center gap-1 px-4">
              <div className="mb-0.5 h-[5px] w-[5px] rounded-full bg-[#d4af37]" />
              <span className="text-[13px] font-semibold leading-snug text-white">$500 Meat Bundle</span>
              <span className="text-[11px] text-white/30">Grand prize</span>
            </div>
            <div className="w-px self-stretch bg-white/7" />
            <div className="flex flex-1 flex-col items-center gap-1 px-4">
              <div className="mb-0.5 h-[5px] w-[5px] rounded-full bg-[#b0b0b0]" />
              <span className="text-[13px] font-semibold leading-snug text-white">$250 Freezer Box</span>
              <span className="text-[11px] text-white/30">2nd prize</span>
            </div>
            <div className="w-px self-stretch bg-white/7" />
            <div className="flex flex-1 flex-col items-center gap-1 px-4">
              <div className="mb-0.5 h-[5px] w-[5px] rounded-full bg-[#c4885a]" />
              <span className="text-[13px] font-semibold leading-snug text-white">$100 + 20x $25</span>
              <span className="text-[11px] text-white/30">3rd + bonus</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 left-[52px] flex items-center gap-3.5">
        <div className="h-8 w-px bg-gradient-to-b from-transparent to-white/20" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/20">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
