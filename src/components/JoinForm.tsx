import { useState, type FormEvent } from 'react'
import { joinForm, site } from '../data/site'

type State = 'idle' | 'pending' | 'success' | 'error'

export function JoinForm() {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    setState('pending')
    try {
      const response = await fetch(joinForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Registro no aceptado')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div role="status" className="text-center space-y-4">
        <p className="text-2xl font-extrabold">¡Listo, ya estás registrado! 🎉</p>
        <p className="text-violet-100">
          Último paso: entra al canal para participar en el sorteo de hoy.
        </p>
        <a href={site.whatsappUrl} target="_blank" rel="noopener" className="cta w-full">
          Entrar al canal de WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form
      name={joinForm.name}
      method="POST"
      action={joinForm.endpoint}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      aria-busy={state === 'pending'}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value={joinForm.name} />
      <p hidden>
        <label>
          No llenar
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={state === 'pending'} className="space-y-4">
        <legend className="sr-only">Regístrate en el club</legend>
        <div>
          <label htmlFor="join-nombre" className="form-label">
            Tu nombre
          </label>
          <input
            id="join-nombre"
            name="nombre"
            autoComplete="given-name"
            required
            maxLength={80}
            placeholder="Ej: Laura"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="join-whatsapp" className="form-label">
            Tu WhatsApp
          </label>
          <input
            id="join-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            pattern="[0-9+\s\-]{7,20}"
            placeholder="Ej: 300 123 4567"
            className="form-input"
          />
        </div>
        <button type="submit" className="cta w-full">
          {state === 'pending' ? 'Registrando…' : 'Quiero participar gratis'}
        </button>
      </fieldset>
      {state === 'error' && (
        <p role="alert" className="text-sm text-amber-200">
          No pudimos registrarte. Revisa tu conexión e inténtalo de nuevo.
        </p>
      )}
      <p className="text-xs text-violet-200/80 text-center">
        🔒 Solo te escribiremos si ganas. Nunca te pediremos dinero.
      </p>
    </form>
  )
}
