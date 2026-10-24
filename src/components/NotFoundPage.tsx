import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Página no encontrada</h1>
      <p className="mb-6">Esta página no existe.</p>
      <Link to="/" className="underline">
        Volver al inicio
      </Link>
    </main>
  )
}
