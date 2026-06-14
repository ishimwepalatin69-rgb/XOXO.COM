import { useMemo, useState } from "react";
import { business, weeklyHours } from "@/data/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import {
  Plus,
  Minus,
  Check,
  Calendar,
  Users,
  Phone,
  Sparkles,
  ArrowRight,
  ChevronLeft,
} from "./ui/Icons";
import { cn } from "@/utils/cn";

const occasions = ["Casual Dining", "Date Night", "Birthday", "Anniversary", "Celebration", "Business"];
const times = ["12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];
const stepLabels = ["Visit", "Contact", "Confirm"];

const todayStr = new Date().toISOString().split("T")[0];

const perks = [
  { icon: Sparkles, title: "Instant confirmation", text: "Your table is held the moment you book — no deposit required." },
  { icon: Users, title: "Groups & events", text: "Hosting a celebration? We seat parties of up to 40 guests." },
  { icon: Phone, title: "Talk to us", text: "Prefer to call? We're on " + business.phone + " every day." },
];

function fmtDate(d: string) {
  if (!d) return "—";
  try {
    return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  } catch {
    return d;
  }
}

export function Reservation() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [code, setCode] = useState("");
  const [form, setForm] = useState({
    occasion: "Casual Dining",
    guests: 2,
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    requests: "",
  });

  const set = (k: keyof typeof form, v: string | number) =>
    setForm((f) => ({ ...f, [k]: v }));

  const stepValid = useMemo(() => {
    if (step === 0) return form.date !== "" && form.time !== "";
    if (step === 1) return form.name.trim() !== "" && form.phone.trim().length >= 9;
    return true;
  }, [step, form]);

  const submit = () => {
    setCode("XOXO-" + Math.random().toString(36).slice(2, 6).toUpperCase());
    setDone(true);
  };

  const reset = () => {
    setDone(false);
    setStep(0);
    setForm({ ...form, date: "", time: "", name: "", phone: "", email: "", requests: "" });
  };

  // Google Calendar link
  const gcal = useMemo(() => {
    if (!form.date || !form.time) return "#";
    const t24 =
      form.time === "12:00 PM"
        ? "12:00"
        : form.time === "1:00 PM"
        ? "13:00"
        : form.time === "2:00 PM"
        ? "14:00"
        : form.time.replace(" PM", "");
    const [h, m] = t24.split(":");
    const start = new Date(`${form.date}T${t24}:00`);
    const end = new Date(start.getTime() + 2 * 3600 * 1000);
    const fmt = (d: Date) =>
      d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    void h; void m;
    const q = new URLSearchParams({
      action: "TEMPLATE",
      text: `XOXO Reservation — ${form.guests} guests`,
      dates: `${fmt(start)}/${fmt(end)}`,
      details: `Reservation ${code || "(pending)"} for ${form.guests} guest(s). ${form.requests}`,
      location: business.address,
    });
    return `https://calendar.google.com/calendar/render?${q.toString()}`;
  }, [form, code]);

  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-canvas py-24 text-fg sm:py-32"
    >
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reservations"
          title={
            <>
              Reserve your <span className="text-gradient-gold italic">table</span>
            </>
          }
          description="Three quick steps to secure your evening at XOXO. We'll have everything ready when you arrive."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Info side */}
          <Reveal className="flex flex-col gap-4">
            {perks.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-4 rounded-2xl border border-edge bg-panel-soft p-5 backdrop-blur"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                  <p.icon width={20} height={20} />
                </span>
                <div>
                  <div className="font-display text-lg text-fg">{p.title}</div>
                  <div className="mt-1 text-sm text-fg-2">{p.text}</div>
                </div>
              </div>
            ))}

            <div className="mt-1 rounded-2xl border border-edge bg-panel-soft p-5 backdrop-blur">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold-deep">
                <Calendar width={16} height={16} /> Opening hours
              </div>
              <ul className="space-y-1.5 text-sm">
                {weeklyHours.map((d) => (
                  <li key={d.day} className="flex justify-between text-fg-2">
                    <span>{d.day}</span>
                    <span className="text-fg">{d.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Wizard */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-edge bg-panel p-6 shadow-2xl shadow-shadow backdrop-blur sm:p-8">
              {done ? (
                /* ---------- SUCCESS ---------- */
                <div className="animate-scale-in py-6 text-center">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold-deep to-gold-soft text-espresso">
                    <Check width={40} height={40} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-fg">Reservation Confirmed</h3>
                  <p className="mt-2 text-fg-2">
                    Thank you, {form.name.split(" ")[0] || "guest"}! We can't wait to host you.
                  </p>

                  <div className="mx-auto mt-7 max-w-sm rounded-2xl border border-edge bg-panel-2 p-5 text-left text-sm">
                    <div className="flex items-center justify-between border-b border-edge pb-3">
                      <span className="text-fg-3">Confirmation</span>
                      <span className="font-mono font-bold text-gold-deep">{code}</span>
                    </div>
                    <dl className="mt-3 space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-fg-3">Guests</dt>
                        <dd className="text-fg">{form.guests}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-fg-3">Date</dt>
                        <dd className="text-fg">{fmtDate(form.date)}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-fg-3">Time</dt>
                        <dd className="text-fg">{form.time}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-fg-3">Occasion</dt>
                        <dd className="text-fg">{form.occasion}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                      href={gcal}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft px-6 py-3 text-sm font-semibold text-espresso"
                    >
                      <Calendar width={16} height={16} /> Add to Calendar
                    </a>
                    <a
                      href={`tel:${business.phoneTel}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-edge-strong px-6 py-3 text-sm font-semibold text-fg hover:bg-gold/10"
                    >
                      <Phone width={16} height={16} /> Call us
                    </a>
                  </div>
                  <button
                    onClick={reset}
                    className="mt-5 text-sm font-medium text-fg-3 underline-offset-4 hover:text-gold-deep hover:underline"
                  >
                    Make another reservation
                  </button>
                </div>
              ) : (
                /* ---------- STEPS ---------- */
                <>
                  {/* progress */}
                  <div className="mb-7 flex items-center gap-2">
                    {stepLabels.map((label, idx) => (
                      <div key={label} className="flex flex-1 items-center gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition-all",
                              idx < step && "bg-gold text-espresso",
                              idx === step && "bg-gradient-to-br from-gold-deep to-gold-soft text-espresso ring-4 ring-gold/20",
                              idx > step && "border border-edge text-fg-3"
                            )}
                          >
                            {idx < step ? <Check width={15} height={15} /> : idx + 1}
                          </span>
                          <span
                            className={cn(
                              "hidden text-xs font-semibold uppercase tracking-wider sm:block",
                              idx === step ? "text-gold-deep" : "text-fg-3"
                            )}
                          >
                            {label}
                          </span>
                        </div>
                        {idx < stepLabels.length - 1 && (
                          <div className="mx-1 h-px flex-1 bg-gold/20">
                            <div
                              className="h-px bg-gold transition-all duration-500"
                              style={{ width: idx < step ? "100%" : "0%" }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* STEP 0 */}
                  {step === 0 && (
                    <div className="animate-fade-up space-y-6">
                      <div>
                        <label className="mb-2.5 block text-xs font-semibold uppercase tracking-widest text-fg-3">
                          Occasion
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {occasions.map((o) => (
                            <button
                              key={o}
                              onClick={() => set("occasion", o)}
                              className={cn(
                                "rounded-full border px-4 py-2 text-sm transition-all",
                                form.occasion === o
                                  ? "border-transparent bg-gold text-espresso"
                                  : "border-edge text-fg-2 hover:border-edge-strong hover:text-fg"
                              )}
                            >
                              {o}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fg-3">
                            <Users width={14} height={14} /> Party size
                          </label>
                          <div className="flex items-center justify-between rounded-xl border border-edge bg-panel-soft px-2 py-1.5">
                            <button
                              onClick={() => set("guests", Math.max(1, form.guests - 1))}
                              className="grid h-9 w-9 place-items-center rounded-lg text-fg hover:bg-gold/15"
                              aria-label="Fewer guests"
                            >
                              <Minus width={18} height={18} />
                            </button>
                            <span className="font-display text-xl text-fg">
                              {form.guests} {form.guests === 1 ? "guest" : "guests"}
                            </span>
                            <button
                              onClick={() => set("guests", Math.min(20, form.guests + 1))}
                              className="grid h-9 w-9 place-items-center rounded-lg text-fg hover:bg-gold/15"
                              aria-label="More guests"
                            >
                              <Plus width={18} height={18} />
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fg-3">
                            <Calendar width={14} height={14} /> Date
                          </label>
                          <input
                            type="date"
                            min={todayStr}
                            value={form.date}
                            onChange={(e) => set("date", e.target.value)}
                            className="w-full rounded-xl border border-edge bg-panel-soft px-4 py-3 text-fg outline-none transition-colors [color-scheme:light] dark:[color-scheme:dark] focus:border-gold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2.5 block text-xs font-semibold uppercase tracking-widest text-fg-3">
                          Preferred time
                        </label>
                        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                          {times.map((t) => (
                            <button
                              key={t}
                              onClick={() => set("time", t)}
                              className={cn(
                                "rounded-xl border py-2.5 text-sm transition-all",
                                form.time === t
                                  ? "border-transparent bg-gold text-espresso"
                                  : "border-edge text-fg-2 hover:border-edge-strong hover:text-fg"
                              )}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 1 */}
                  {step === 1 && (
                    <div className="animate-fade-up space-y-5">
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-fg-3">
                          Full name
                        </label>
                        <input
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          placeholder="e.g. Aline Uwase"
                          className="w-full rounded-xl border border-edge bg-panel-soft px-4 py-3 text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-gold"
                        />
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-fg-3">
                            Phone
                          </label>
                          <input
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            inputMode="tel"
                            placeholder="07XX XXX XXX"
                            className="w-full rounded-xl border border-edge bg-panel-soft px-4 py-3 text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-gold"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-fg-3">
                            Email (optional)
                          </label>
                          <input
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            inputMode="email"
                            placeholder="you@email.com"
                            className="w-full rounded-xl border border-edge bg-panel-soft px-4 py-3 text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-gold"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-fg-3">
                          Special requests (optional)
                        </label>
                        <textarea
                          value={form.requests}
                          onChange={(e) => set("requests", e.target.value)}
                          rows={3}
                          placeholder="Window table, allergies, birthday surprise…"
                          className="w-full resize-none rounded-xl border border-edge bg-panel-soft px-4 py-3 text-fg placeholder:text-fg-3 outline-none transition-colors focus:border-gold"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <div className="animate-fade-up">
                      <div className="rounded-2xl border border-edge bg-panel-2 p-6">
                        <h3 className="font-display text-xl text-fg">Review your booking</h3>
                        <dl className="mt-4 divide-y divide-edge text-sm">
                          {[
                            ["Occasion", form.occasion],
                            ["Guests", String(form.guests)],
                            ["Date", fmtDate(form.date)],
                            ["Time", form.time],
                            ["Name", form.name],
                            ["Phone", form.phone],
                          ].map(([k, v]) => (
                            <div key={k} className="flex justify-between py-2.5">
                              <dt className="text-fg-3">{k}</dt>
                              <dd className="font-medium text-fg">{v || "—"}</dd>
                            </div>
                          ))}
                          {form.requests && (
                            <div className="py-2.5">
                              <dt className="text-fg-3">Requests</dt>
                              <dd className="mt-1 text-fg-2">{form.requests}</dd>
                            </div>
                          )}
                        </dl>
                      </div>
                      <p className="mt-4 flex items-center gap-2 text-xs text-fg-2">
                        <Sparkles width={14} height={14} className="text-gold" />
                        No deposit needed. We'll send a confirmation to your phone.
                      </p>
                    </div>
                  )}

                  {/* nav buttons */}
                  <div className="mt-7 flex items-center justify-between gap-3">
                    {step > 0 ? (
                      <button
                        onClick={() => setStep((s) => s - 1)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-edge-strong px-5 py-3 text-sm font-medium text-fg hover:bg-gold/10"
                      >
                        <ChevronLeft width={16} height={16} /> Back
                      </button>
                    ) : (
                      <span />
                    )}
                    {step < 2 ? (
                      <button
                        onClick={() => stepValid && setStep((s) => s + 1)}
                        disabled={!stepValid}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all",
                          stepValid
                            ? "bg-gradient-to-r from-gold-deep via-gold to-gold-soft text-espresso hover:scale-[1.03]"
                            : "cursor-not-allowed bg-panel-soft text-fg-3"
                        )}
                      >
                        Continue <ArrowRight width={16} height={16} />
                      </button>
                    ) : (
                      <button
                        onClick={submit}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-soft px-6 py-3 text-sm font-semibold text-espresso transition-transform hover:scale-[1.03]"
                      >
                        Confirm reservation <Check width={16} height={16} />
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
