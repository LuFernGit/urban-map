import { usuariosMock } from "./UsuariosMock";

const getUsuario = (id) => usuariosMock.find((u) => u.id === id);

export const comentariosMock = [
  // ================= BETO CARRERO (local: 1) =================
  {
    id: 1,
    local: 1,
    conteudo: "Parque incrível! Tem muita coisa pra fazer, vale o dia todo.",
    dataCriacao: "3h",
    autor: getUsuario(2),
  },
  {
    id: 2,
    local: 1,
    conteudo: "Fui com amigos e foi diversão garantida!",
    dataCriacao: "1d",
    autor: getUsuario(5),
  },
  {
    id: 18,
    local: 1,
    conteudo: "Montanhas-russas muito boas, adrenalina total!",
    dataCriacao: "2d",
    autor: getUsuario(1),
  },
  {
    id: 19,
    local: 1,
    conteudo: "Estrutura excelente, tudo muito organizado.",
    dataCriacao: "5h",
    autor: getUsuario(3),
  },

  // ================= CAMPOS DO JORDÃO (local: 2) =================
  {
    id: 3,
    local: 2,
    conteudo: "Cidade linda, clima perfeito e ótimos restaurantes.",
    dataCriacao: "6h",
    autor: getUsuario(1),
  },
  {
    id: 4,
    local: 2,
    conteudo: "Muito charmoso, parece até outro país!",
    dataCriacao: "2d",
    autor: getUsuario(4),
  },
  {
    id: 20,
    local: 2,
    conteudo: "Lugar perfeito pra casal, muito romântico.",
    dataCriacao: "4h",
    autor: getUsuario(2),
  },
  {
    id: 21,
    local: 2,
    conteudo: "Friozinho ótimo, experiências gastronômicas incríveis.",
    dataCriacao: "1d",
    autor: getUsuario(5),
  },

  // ================= CRISTO REDENTOR (local: 3) =================
  {
    id: 5,
    local: 3,
    conteudo: "Vista simplesmente incrível! Vale muito a pena subir.",
    dataCriacao: "5h",
    autor: getUsuario(4),
  },
  {
    id: 6,
    local: 3,
    conteudo: "Muito cheio, mas a experiência compensa demais.",
    dataCriacao: "2d",
    autor: getUsuario(3),
  },
  {
    id: 22,
    local: 3,
    conteudo: "Uma das vistas mais bonitas do mundo!",
    dataCriacao: "1h",
    autor: getUsuario(1),
  },
  {
    id: 23,
    local: 3,
    conteudo: "Vale cada segundo da subida, emocionante.",
    dataCriacao: "3d",
    autor: getUsuario(2),
  },

  // ================= JAPAN HOUSE (local: 4) =================
  {
    id: 7,
    local: 4,
    conteudo: "Experiência cultural incrível, tudo muito organizado.",
    dataCriacao: "8h",
    autor: getUsuario(3),
  },
  {
    id: 8,
    local: 4,
    conteudo: "Gostei bastante das exposições interativas.",
    dataCriacao: "1d",
    autor: getUsuario(2),
  },
  {
    id: 24,
    local: 4,
    conteudo: "Ambiente moderno e muito bonito.",
    dataCriacao: "2h",
    autor: getUsuario(5),
  },
  {
    id: 25,
    local: 4,
    conteudo: "Experiência diferente e muito cultural.",
    dataCriacao: "3d",
    autor: getUsuario(1),
  },

  // ================= MASP (local: 5) =================
  {
    id: 9,
    local: 5,
    conteudo: "Um ótimo passeio cultural com a família.",
    dataCriacao: "10h",
    autor: getUsuario(5),
  },
  {
    id: 10,
    local: 5,
    conteudo: "Passeio bem tranquilo e cultural 😊",
    dataCriacao: "7h",
    autor: getUsuario(2),
  },
  {
    id: 11,
    local: 5,
    conteudo: "Exposições incríveis e ambiente organizado.",
    dataCriacao: "1d",
    autor: getUsuario(1),
  },
  {
    id: 26,
    local: 5,
    conteudo: "Arquitetura impressionante, muito bonito.",
    dataCriacao: "3h",
    autor: getUsuario(3),
  },

  // ================= MUSEU DO IPIRANGA (local: 6) =================
  {
    id: 12,
    local: 6,
    conteudo: "Muito interessante, aprendi bastante sobre história.",
    dataCriacao: "4h",
    autor: getUsuario(1),
  },
  {
    id: 13,
    local: 6,
    conteudo: "Lugar lindo e bem cuidado, recomendo!",
    dataCriacao: "2d",
    autor: getUsuario(3),
  },
  {
    id: 27,
    local: 6,
    conteudo: "Reforma deixou o lugar ainda mais bonito.",
    dataCriacao: "6h",
    autor: getUsuario(2),
  },
  {
    id: 28,
    local: 6,
    conteudo: "Muito conteúdo histórico interessante.",
    dataCriacao: "1d",
    autor: getUsuario(5),
  },

  // ================= IBIRAPUERA (local: 7) =================
  {
    id: 14,
    local: 7,
    conteudo: "Perfeito pra caminhar e relaxar.",
    dataCriacao: "2h",
    autor: getUsuario(4),
  },
  {
    id: 15,
    local: 7,
    conteudo: "Ótimo lugar pra passar o dia com amigos.",
    dataCriacao: "1d",
    autor: getUsuario(2),
  },
  {
    id: 29,
    local: 7,
    conteudo: "Muito verde e ambiente agradável.",
    dataCriacao: "5h",
    autor: getUsuario(1),
  },
  {
    id: 30,
    local: 7,
    conteudo: "Perfeito pra esportes e lazer.",
    dataCriacao: "2d",
    autor: getUsuario(3),
  },

  // ================= COPACABANA (local: 8) =================
  {
    id: 16,
    local: 8,
    conteudo: "Praia linda! Visual incrível.",
    dataCriacao: "6h",
    autor: getUsuario(5),
  },
  {
    id: 17,
    local: 8,
    conteudo: "Muito cheia, mas vale a visita.",
    dataCriacao: "3d",
    autor: getUsuario(3),
  },
  {
    id: 31,
    local: 8,
    conteudo: "Melhor pôr do sol do Rio!",
    dataCriacao: "1h",
    autor: getUsuario(2),
  },
  {
    id: 32,
    local: 8,
    conteudo: "Clima animado e muito bonito.",
    dataCriacao: "2d",
    autor: getUsuario(4),
  },
];