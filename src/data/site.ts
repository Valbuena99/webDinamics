// All page copy lives here so the landing can be rebranded without touching components.
// Winners, stats and prize amounts are sample data: replace them with real, verifiable
// results and publish your own rules before launching.
export const site = {
  name: 'Ganando365🍀',
  description:
    'Únete gratis al club y participa todos los días por premios en efectivo. Sin compras obligatorias, sin letra pequeña: entra al canal de WhatsApp y juega.',
  whatsappUrl: 'https://chat.whatsapp.com/DPhi1k8eUJD8THp978J5h8?s=cl&p=i&mlu=4&ilr=4',
  prize: '$155.000',
  // Hour (0–23, visitor's local time) of the daily draw, used by the countdown.
  drawHour: 22,
  hero: {
    badge: 'Sorteo diario · Reclama BONO 100% gratis',
    title: 'Gana dinero en efectivo',
    highlight: 'todos los 365 días.',
    subtitle:
      'Entra al grupo, participa en dinámicas y llévate premios en efectivo. Sin compras obligatorias.',
    cta: 'Unirme GRATIS por WhatsApp💲',
  },
  stats: [
    { value: '+620', label: 'ganadores' },
    { value: '+3.500', label: 'miembros' },
    { value: '365', label: 'sorteos al año' },
  ],
  winners: [
    { name: 'Laura M.', city: 'Bogotá', amount: '$700.000' },
    { name: 'Andrés P.', city: 'Medellín', amount: '$100.000' },
    { name: 'Camila R.', city: 'Cali', amount: '$50.000' },
    { name: 'Jhon F.', city: 'Barranquilla', amount: '$250.000' },
    { name: 'Valentina G.', city: 'Pereira', amount: '$145.000' },
    { name: 'Santiago L.', city: 'Bucaramanga', amount: '$90.000' },
  ],
  steps: [
    {
      title: 'Entra al Grupo',
      description: 'Un clic y ya estás dentro. Es gratis y puedes salir cuando quieras.',
    },
    {
      title: 'Participa en el reto del día',
      description: 'Dinámicas rápidas: resultados en 6 horas.',
    },
    {
      title: 'Cobra tu premio',
      description: 'Anunciamos ganadores y pagamos por transferencia al instante.',
    },
  ],
  reasons: [
    {
      icon: '🎁',
      title: 'Cero costo',
      description: 'Separa ahora mismo tu cupo en el sorteo de cortesía. ¡Participar es GRATIS!',
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
      quote: 'Pensé que era mentira y gané $700.000 a la segunda semana. Me llegó el mismo día.',
      name: 'Andrés P.',
      city: 'Medellín',
    },
    {
      quote: 'La mejor comunidad de sorteos. A la primera no se dio, pero a la segunda cayó el premio mayor. ¡A seguir participando mañana!',
      name: 'Camila R.',
      city: 'Cali',
    },
  ],
  faq: [
    {
      q: '¿De verdad es gratis?',
      a: 'Sí. Como usuario nuevo tienes una oportunidad de participar en el Sorteo de Cortesía. El resto de sorteos se hacen desde $2.000.',
    },
    {
      q: '¿Cómo se eligen los ganadores?',
      a: 'Los ganadores se escogen según la dinámica del día utilizando el resultado oficial de la lotería o chance nacional. Todo queda debidamente evidenciado en el grupo y el premio se entrega con absoluta transparencia y comprobante en mano.',
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
