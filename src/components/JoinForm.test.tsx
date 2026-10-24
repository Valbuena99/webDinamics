import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'
import { JoinForm } from './JoinForm'

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

async function fillAndSubmit() {
  const user = userEvent.setup()
  await user.type(screen.getByLabelText('Tu nombre'), 'Laura')
  await user.type(screen.getByLabelText('Tu WhatsApp'), '3001234567')
  await user.click(screen.getByRole('button', { name: 'Quiero participar gratis' }))
}

it('posts the registration and then links to the WhatsApp channel', async () => {
  const fetchMock = vi
    .spyOn(globalThis, 'fetch')
    .mockResolvedValue(new Response('ok', { status: 200 }))
  render(<JoinForm />)
  await fillAndSubmit()
  expect(await screen.findByText(/ya estás registrado/)).toBeTruthy()
  const body = String(fetchMock.mock.calls[0][1]?.body)
  expect(body).toContain('form-name=registro-club')
  expect(body).toContain('nombre=Laura')
  expect(screen.getByRole('link', { name: 'Entrar al canal de WhatsApp' })).toBeTruthy()
})

it('shows an error when the registration is not accepted', async () => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue(
    new Response('<form data-netlify="true"></form>', { status: 200 }),
  )
  render(<JoinForm />)
  await fillAndSubmit()
  expect(await screen.findByRole('alert')).toBeTruthy()
})
