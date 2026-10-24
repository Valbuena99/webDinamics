// All page copy lives here so the landing can be rebranded without touching components.
// Winners, stats and prize amounts are sample data: replace them with real, verifiable
// results and publish your own rules before launching.
export const site = {
  name: 'PremioClub',
  description:
    'Únete gratis al club y participa todos los días por premios en efectivo. Sin compras, sin letra pequeña: entra al canal de WhatsApp y juega.',
  whatsappUrl: 'https://whatsapp.com/channel/',
  prize: '$250.000',
  // Hour (0–23, visitor's local time) of the daily draw, used by the countdown.
  drawHour: 20,
  hero: {
    badge: 'Sorteo diario · 100% gratis',
    title: 'Gana dinero en efectivo',
    highlight: 'todos los días.',
    subtitle:
      'Entra al canal, participa en retos de 1 minuto y llévate premios reales. Sin pagar nada, sin compras obligatorias.',
    cta: 'Unirme gratis por WhatsApp',
  },
  stats: [
    { value: '+1.200', label: 'ganadores' },
    { value: '+35.000', label: 'miembros' },
    { value: '365', label: 'sorteos al año' },
  ],
  winners: [
    { name: 'Laura M.', city: 'Bogotá', amount: '$250.000' },
    { name: 'Andrés P.', city: 'Medellín', amount: '$100.000' },
    { name: 'Camila R.', city: 'Cali', amount: '$50.000' },
    { name: 'Jhon F.', city: 'Barranquilla', amount: '$250.000' },
    { name: 'Valentina G.', city: 'Pereira', amount: '$100.000' },
    { name: 'Santiago L.', city: 'Bucaramanga', amount: '$50.000' },
  ],
  steps: [
    {
      title: 'Entra al canal',
      description: 'Un clic y ya estás dentro. Es gratis y puedes salir cuando quieras.',
    },
    {
      title: 'Participa en el reto del día',
      description: 'Dinámicas rápidas: trivias, adivinanzas y retos de menos de 1 minuto.',
    },
    {
      title: 'Cobra tu premio',
      description: 'Anunciamos ganadores en vivo cada noche y pagamos por transferencia.',
    },
  ],
  reasons: [
    {
      icon: '🎁',
      title: 'Cero costo',
      description: 'Nunca te pediremos dinero para participar ni para cobrar.',
    },
    {
      icon: '📣',
      title: 'Ganadores públicos',
      description: 'Cada sorteo se anuncia en el canal con nombre y comprobante.',
    },
    {
      icon: '⚡',
      title: 'Premios diarios',
      description: 'Una nueva oportunidad cada día. Si hoy no ganas, mañana sí puedes.',
    },
  ],
  testimonials: [
    {
      quote: 'Pensé que era mentira y gané $100.000 a la segunda semana. Me llegó el mismo día.',
      name: 'Andrés P.',
      city: 'Medellín',
    },
    {
      quote: 'Los retos son súper rápidos y divertidos. Lo reviso todas las noches con mi familia.',
      name: 'Camila R.',
      city: 'Cali',
    },
  ],
  faq: [
    {
      q: '¿De verdad es gratis?',
      a: 'Sí. Unirte, participar y cobrar no tiene ningún costo. Si alguien te pide dinero en nuestro nombre, no somos nosotros.',
    },
    {
      q: '¿Cómo se eligen los ganadores?',
      a: 'Según la dinámica del día: sorteo aleatorio en vivo o el primero en responder correctamente. Las bases de cada reto se publican en el canal.',
    },
    {
      q: '¿Cómo recibo el premio?',
      a: 'Te contactamos por WhatsApp desde el número oficial y te transferimos a tu cuenta o billetera digital.',
    },
    {
      q: '¿Quién puede participar?',
      a: 'Cualquier persona mayor de 18 años con WhatsApp. Un registro por persona.',
    },
  ],
  finalCta: {
    title: 'El próximo ganador puede ser tú.',
    subtitle: 'Faltan pocas horas para el sorteo de hoy. Entra ahora y no te lo pierdas.',
  },
}

export const joinForm = {
  name: 'registro-club',
  endpoint: '/__forms.html',
}
