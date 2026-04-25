import { usuariosMock } from "./UsuariosMock";

const getUsuario = (id) => usuariosMock.find((u) => u.id === id);

export const comentariosMock = [
  // ================= BETO CARRERO =================
  {
    id: 1,
    localId: 1,
    texto: "Parque incrível! Tem muita coisa pra fazer, vale o dia todo.",
    tempo: "3h",
    usuario: getUsuario(2),
  },
  {
    id: 2,
    localId: 1,
    texto: "Fui com amigos e foi diversão garantida!",
    tempo: "1d",
    usuario: getUsuario(5),
  },

  // ================= CAMPOS DO JORDÃO =================
  {
    id: 3,
    localId: 2,
    texto: "Cidade linda, clima perfeito e ótimos restaurantes.",
    tempo: "6h",
    usuario: getUsuario(1),
  },
  {
    id: 4,
    localId: 2,
    texto: "Muito charmoso, parece até outro país!",
    tempo: "2d",
    usuario: getUsuario(4),
  },

  // ================= CRISTO REDENTOR =================
  {
    id: 5,
    localId: 3,
    texto: "Vista simplesmente incrível! Vale muito a pena subir.",
    tempo: "5h",
    usuario: getUsuario(4),
  },
  {
    id: 6,
    localId: 3,
    texto: "Muito cheio, mas a experiência compensa demais.",
    tempo: "2d",
    usuario: getUsuario(3),
  },

  // ================= JAPAN HOUSE =================
  {
    id: 7,
    localId: 4,
    texto: "Experiência cultural incrível, tudo muito organizado.",
    tempo: "8h",
    usuario: getUsuario(3),
  },
  {
    id: 8,
    localId: 4,
    texto: "Gostei bastante das exposições interativas.",
    tempo: "1d",
    usuario: getUsuario(2),
  },

  // ================= MASP =================
  {
    id: 9,
    localId: 5,
    texto: "Um ótimo passeio cultural. Fui com a família e todos gostaram bastante.",
    tempo: "10h",
    usuario: getUsuario(5),
  },
  {
    id: 10,
    localId: 5,
    texto: "Passeio bem tranquilo e cultural 😊",
    tempo: "7h",
    usuario: getUsuario(2),
  },
  {
    id: 11,
    localId: 5,
    texto: "Exposições incríveis e ambiente organizado.",
    tempo: "1d",
    usuario: getUsuario(1),
  },

  // ================= MUSEU DO IPIRANGA =================
  {
    id: 12,
    localId: 6,
    texto: "Muito interessante, aprendi bastante sobre história.",
    tempo: "4h",
    usuario: getUsuario(1),
  },
  {
    id: 13,
    localId: 6,
    texto: "Lugar lindo e bem cuidado, recomendo!",
    tempo: "2d",
    usuario: getUsuario(3),
  },

  // ================= IBIRAPUERA =================
  {
    id: 14,
    localId: 7,
    texto: "Perfeito pra caminhar e relaxar.",
    tempo: "2h",
    usuario: getUsuario(4),
  },
  {
    id: 15,
    localId: 7,
    texto: "Ótimo lugar pra passar o dia com amigos.",
    tempo: "1d",
    usuario: getUsuario(2),
  },

  // ================= COPACABANA =================
  {
    id: 16,
    localId: 8,
    texto: "Praia linda! Visual incrível.",
    tempo: "6h",
    usuario: getUsuario(5),
  },
  {
    id: 17,
    localId: 8,
    texto: "Muito cheia, mas vale a visita.",
    tempo: "3d",
    usuario: getUsuario(3),
  },
];