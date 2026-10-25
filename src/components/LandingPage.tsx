import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { JoinForm } from './JoinForm'

const heroImage = '/.netlify/images?url=/img/hero-premios.png&fm=webp'

function msUntilDraw(now: Date) {
  const draw = new Date(now)
  draw.setHours(site.drawHour, 0, 0, 0)
  if (draw <= now) draw.setDate(draw.getDate() + 1)
  return draw.getTime() - now.getTime()
}

function Countdown() {
  // Starts empty so the server render and first client render match.
  const [ms, setMs] = useState<number | null>(null)
  useEffect(() => {
    const tick = () => setMs(msUntilDraw(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  const parts =
    ms === null
      ? ['--', '--', '--']
      : [ms / 3600000, (ms / 60000) % 60, (ms / 1000) % 60].map((n) =>
          String(Math.floor(n)).padStart(2, '0'),
        )
  return (
    <div className="flex items-center gap-2" aria-label="Tiempo para el próximo sorteo">
      {parts.map((value, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="rounded-lg bg-white/10 px-2.5 py-1.5 font-mono text-xl font-bold tabular-nums">
            {value}
          </span>
          {i < 2 && <span className="font-bold text-violet-300">:</span>}
        </div>
      ))}
    </div>
  )
}

function WhatsAppCta({ className = '' }: { className?: string }) {
  return (
    <a href={site.whatsappUrl} target="_blank" rel="noopener" className={`cta ${className}`}>
      <span aria-hidden>🚀</span> {site.hero.cta}
    </a>
  )
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1c0d47] text-white pb-24 sm:pb-0">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="/" className="font-display text-2xl font-extrabold tracking-tight">
          {site.name}
          <span className="text-lime-300">.</span>
        </a>
        <a
          href="#registro"
          className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10 sm:inline-block"
        >
          Participar Gratis
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-600/30 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-12 pt-4 md:grid-cols-2 md:pt-10">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-lime-300/15 px-3 py-1 text-sm font-semibold text-lime-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300" />
                {site.hero.badge}
              </span>
              <h1 className="font-display mt-5 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
                {site.hero.title}{' '}
                <span className="bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent">
                  {site.hero.highlight}
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-lg text-violet-100 md:mx-0">
                {site.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
                <WhatsAppCta className="text-lg" />
                <p className="text-sm text-violet-200">
                  Premio de hoy: <strong className="text-yellow-300">{site.prize}</strong> · 5 Oportunidades de Ganar · +18
                </p>
              </div>
            </div>
            <img
              src={`${heroImage}&w=720`}
              srcSet={`${heroImage}&w=480 480w, ${heroImage}&w=720 720w, ${heroImage}&w=1024 1024w`}
              sizes="(min-width: 768px) 50vw, 90vw"
              alt="Caja de regalo dorada abierta con billetes y monedas saliendo"
              width={1024}
              height={1024}
              fetchPriority="high"
              className="hero-img mx-auto w-full max-w-md md:max-w-none"
            />
          </div>
        </section>

        {/* Countdown + stats */}
        <section className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-8">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-300">
                Próximo sorteo en
              </p>
              <Countdown />
            </div>
            <dl className="grid grid-cols-3 gap-4 text-center sm:border-l sm:border-white/10">
              {site.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-lime-300 sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dd className="text-sm text-violet-200">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Winners ticker */}
        <section aria-labelledby="ganadores" className="mt-14 overflow-hidden">
          <h2 id="ganadores" className="font-display mb-5 text-center text-2xl font-extrabold">
            🏆 Últimos ganadores
          </h2>
          <div className="marquee flex w-max gap-4">
            {[...site.winners, ...site.winners].map((w, i) => (
              <div
                key={i}
                aria-hidden={i >= site.winners.length}
                className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-lime-300 to-yellow-300 font-bold text-[#1c0d47]">
                  {w.name[0]}
                </span>
                <div className="whitespace-nowrap">
                  <p className="font-semibold">
                    {w.name} <span className="text-violet-300">· {w.city}</span>
                  </p>
                  <p className="text-sm font-bold text-lime-300">Ganó {w.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-center text-4xl font-extrabold tracking-tight">
            Así de fácil. 3 pasos.
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {site.steps.map((step, i) => (
              <li key={step.title} className="rounded-3xl bg-white p-7 text-[#1c0d47]">
                <span className="font-display grid h-12 w-12 place-items-center rounded-2xl bg-[#1c0d47] text-xl font-extrabold text-lime-300">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Signup */}
        <section id="registro" className="scroll-mt-6 px-5">
          <div className="mx-auto grid max-w-5xl gap-10 rounded-[2rem] bg-gradient-to-br from-fuchsia-600 to-violet-700 p-7 sm:p-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-semibold uppercase tracking-wider text-yellow-300">
                Cupo gratis
              </p>
              <h2 className="font-display mt-2 text-4xl font-extrabold leading-tight tracking-tight">
                Participa hoy por {site.prize}
              </h2>
              <ul className="mt-6 space-y-3 text-violet-50">
                {site.reasons.map((r) => (
                  <li key={r.title} className="flex gap-3">
                    <span aria-hidden className="text-2xl">
                      {r.icon}
                    </span>
                    <span>
                      <strong className="text-white">{r.title}.</strong> {r.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[#1c0d47]/60 p-6 backdrop-blur sm:p-8">
              <JoinForm />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="font-display text-center text-4xl font-extrabold tracking-tight">
            Lo que dicen en el Club
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {site.testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-yellow-300" aria-label="5 de 5 estrellas">
                  ★★★★★
                </p>
                <blockquote className="mt-3 text-lg">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-violet-300">
                  {t.name} · {t.city}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-5 pb-20">
          <h2 className="font-display text-center text-4xl font-extrabold tracking-tight">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 space-y-3">
            {site.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-4 open:bg-white/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {item.q}
                  <span className="text-2xl text-lime-300 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-violet-100">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-20 text-center">
          <h2 className="font-display mx-auto max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {site.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-violet-100">{site.finalCta.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCta className="text-lg" />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-violet-300">
        © {new Date().getFullYear()} {site.name} · Solo mayores de 18 años · Participar es
        gratis y no requiere compra.
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-white/10 bg-[#1c0d47]/90 p-3 backdrop-blur sm:hidden">
        <WhatsAppCta className="w-full" />
      </div>
    </div>
  )
}
