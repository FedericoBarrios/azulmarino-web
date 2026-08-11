/* ============================================================
   AZUL MARINO · CONFIGURACIÓN EDITABLE
   ------------------------------------------------------------
   Este es el ÚNICO lugar para tocar: temporadas, precios,
   meses cerrados y textos de políticas. No hace falta saber
   programar: cambiá solo los números y textos entre comillas.
   (El día de mañana, si hiciera falta, esto se puede pasar a
    una base de datos sin rehacer el sitio.)
   ============================================================ */

const CONFIG = {
  moneda: "USD",

  /* --- Meses en que la posada está CERRADA ---
     0=Ene 1=Feb 2=Mar 3=Abr 4=May 5=Jun 6=Jul 7=Ago 8=Sep 9=Oct 10=Nov 11=Dic
     Junio, Julio y Agosto: */
  mesesCerrados: [5, 6, 7],

  /* --- Mínimo de noches (POR AHORA DESACTIVADO) ---
     Cuando quieras activarlo, poné un número (ej: 2) en "minNoches". */
  minNoches: null,

  /* --- TEMPORADAS ---
     Cada temporada tiene: fechas (formato "MM-DD"), precio por noche de
     cada habitación (en USD) y el texto de su política de cancelación.
     "desde" y "hasta" se comparan por mes/día y se repiten todos los años.
     La temporada "alta" cruza el fin de año (25/12 al 10/01): está OK. */
  temporadas: [
    {
      id: "alta",
      nombre: { es: "Alta y Carnaval", en: "High & Carnival", pt: "Alta e Carnaval" },
      desde: "12-25", hasta: "01-10",
      // >>> PRECIOS POR NOCHE (USD) — reemplazá los números de ejemplo:
      precios: { "doble-jardin": 250, "doble-superior": 300, "doble-superior-jacuzzi": 350 },
      cancelacion: {
        es: "Cancelación gratuita hasta 60 días antes de la llegada. Se abona el 50% al confirmar la reserva. La no presentación se cobra el total.",
        en: "Free cancellation up to 60 days before arrival. 50% deposit on confirmation. No-shows are charged in full.",
        pt: "Cancelamento gratuito até 60 dias antes da chegada. Depósito de 50% na confirmação. Não comparecimento é cobrado integralmente.",
      },
    },
    {
      id: "mediaalta",
      nombre: { es: "Media Alta", en: "Mid-High", pt: "Média Alta" },
      desde: "01-11", hasta: "02-29",
      precios: { "doble-jardin": 200, "doble-superior": 240, "doble-superior-jacuzzi": 280 },
      cancelacion: {
        es: "Cancelación gratuita hasta 10 días antes de la llegada. Se abona el 50% al confirmar la reserva. La no presentación se cobra el total.",
        en: "Free cancellation up to 10 days before arrival. 50% deposit on confirmation. No-shows are charged in full.",
        pt: "Cancelamento gratuito até 10 dias antes da chegada. Depósito de 50% na confirmação. Não comparecimento é cobrado integralmente.",
      },
    },
    {
      id: "media",
      nombre: { es: "Media y Baja", en: "Mid & Low", pt: "Média e Baixa" },
      desde: "03-01", hasta: "12-24",
      precios: { "doble-jardin": 150, "doble-superior": 180, "doble-superior-jacuzzi": 210 },
      cancelacion: {
        es: "Cancelación gratuita hasta 3 días antes de la llegada. Se abona el 50% al confirmar la reserva. La no presentación se cobra el total.",
        en: "Free cancellation up to 3 days before arrival. 50% deposit on confirmation. No-shows are charged in full.",
        pt: "Cancelamento gratuito até 3 dias antes da chegada. Depósito de 50% na confirmação. Não comparecimento é cobrado integralmente.",
      },
    },
  ],
};
