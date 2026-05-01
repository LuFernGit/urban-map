import Local from "../entities/Local";
import { tagsMock } from "../mock/TagsMock";

export const locaisMock = [
  new Local({
    id: 1,
    nome: "Beto Carrero World",
    descricao:
      "O Beto Carrero World é o maior parque temático da América Latina, ideal para famílias que buscam diversão e lazer. Com diversas atrações para crianças e adultos, oferece uma experiência completa e inesquecível.",
    fotosUrl: [require("../assets/Locais/betocarrero.jpg")],
    endereco: "Penha - SC",
    cidade: "Penha",
    estado: "SC",
    cep: "",
    latitude: -26.7998,
    longitude: -48.6137,
    status: "ativo",
    likes: 500,
    salvos: 200,
    tags: tagsMock.filter((tag) =>
      [5, 12, 22, 31, 43, 52, 60, 71].includes(tag.id),
    ),
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
  }),

  new Local({
    id: 2,
    nome: "Campos do Jordão",
    descricao:
      "Campos do Jordão é um destino conhecido pelo clima agradável e ambiente aconchegante, sendo ideal para encontros românticos. Com diversas opções de lazer e gastronomia, proporciona uma experiência diferenciada e memorável.",
    fotosUrl: [require("../assets/Locais/camposJordao.jpg")],
    endereco: "Campos do Jordão - SP",
    cidade: "Campos do Jordão",
    estado: "SP",
    cep: "",
    latitude: -22.7551,
    longitude: -45.6099,
    status: "ativo",
    likes: 320,
    salvos: 150,
    tags: tagsMock.filter((tag) =>
      [5, 15, 23, 30, 43, 52, 63, 71].includes(tag.id),
    ),
    curtidoPeloUsuario: false,
    salvoPeloUsuario: true,
  }),

  new Local({
    id: 3,
    nome: "Cristo Redentor",
    descricao:
      "O Cristo Redentor é um dos pontos turísticos mais icônicos do Brasil e do mundo, oferecendo uma vista panorâmica impressionante da cidade do Rio de Janeiro. Ideal para quem busca uma experiência cultural e contemplativa, é um destino imperdível, muito bem avaliado e com estrutura organizada para visitantes.",
    fotosUrl: [
      require("../assets/Locais/cristo redentor1.jpg"),
      require("../assets/Locais/cristo redentor2.jpg"),
      require("../assets/Locais/cristo redentor3.jpg"),
    ],
    endereco: "Rio de Janeiro - RJ",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "",
    latitude: -22.9519,
    longitude: -43.2105,
    status: "ativo",
    likes: 1200,
    salvos: 800,
    tags: tagsMock.filter((tag) =>
      [4, 13, 22, 30, 43, 52, 60, 72].includes(tag.id),
    ),
    curtidoPeloUsuario: true,
    salvoPeloUsuario: true,
  }),

  new Local({
    id: 4,
    nome: "Japan House",
    descricao:
      "A Japan House é um espaço cultural moderno que apresenta exposições inovadoras sobre a cultura japonesa. Ideal para quem busca experiências diferentes e interativas, é um ambiente seguro, acessível e muito bem avaliado.",
    fotosUrl: [
      require("../assets/Locais/japanhouse1.jpg"),
      require("../assets/Locais/japanhouse2.jpg"),
    ],
    endereco: "Av. Paulista - SP",
    cidade: "São Paulo",
    estado: "SP",
    cep: "",
    latitude: -23.5705,
    longitude: -46.6446,
    status: "ativo",
    likes: 280,
    salvos: 120,
    tags: tagsMock.filter((tag) =>
      [6, 14, 20, 30, 43, 51, 62, 72].includes(tag.id),
    ),
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
  }),

  new Local({
    id: 5,
    nome: "MASP",
    descricao:
      "O MASP é um dos museus mais importantes de São Paulo, ideal para quem busca uma experiência cultural e artística. Com exposições renomadas e um acervo diversificado, oferece acesso à cultura de forma acessível, sendo um ambiente seguro, bem estruturado e muito bem avaliado pelos visitantes. É um destino imperdível para quem aprecia arte e deseja explorar o cenário cultural da cidade.",
    fotosUrl: [require("../assets/Locais/masp.jpg")],
    endereco: "Av. Paulista - SP",
    cidade: "São Paulo",
    estado: "SP",
    cep: "",
    latitude: -23.5614,
    longitude: -46.6559,
    status: "ativo",
    likes: 900,
    salvos: 500,
    tags: tagsMock.filter((tag) =>
      [1, 10, 22, 30, 43, 51, 61, 72].includes(tag.id),
    ),
    curtidoPeloUsuario: true,
    salvoPeloUsuario: false,
  }),

  new Local({
    id: 6,
    nome: "Museu do Ipiranga",
    descricao:
      "O Museu do Ipiranga é um dos mais importantes espaços históricos do Brasil, reunindo exposições que contam a história do país. Com estrutura renovada e ambientes organizados, é ideal para quem busca conhecimento, cultura e um passeio enriquecedor em um local bem avaliado e tradicional.",
    fotosUrl: [
      require("../assets/Locais/museuIpiranga1.jpg"),
      require("../assets/Locais/museuIpiranga2.jpg"),
      require("../assets/Locais/museuIpiranga3.jpg"),
    ],
    endereco: "São Paulo - SP",
    cidade: "São Paulo",
    estado: "SP",
    cep: "",
    latitude: -23.5858,
    longitude: -46.6097,
    status: "ativo",
    likes: 650,
    salvos: 300,
    tags: tagsMock.filter((tag) =>
      [1, 13, 20, 31, 43, 51, 63, 73].includes(tag.id),
    ),
    curtidoPeloUsuario: false,
    salvoPeloUsuario: true,
  }),

  new Local({
    id: 7,
    nome: "Parque Ibirapuera",
    descricao:
      "O Parque Ibirapuera é um dos destinos mais populares de São Paulo, ideal para quem busca lazer ao ar livre, contato com a natureza e atividades culturais. Com entrada gratuita e ótima infraestrutura, é perfeito para passeios em família, encontros ou momentos com amigos, além de ser um ambiente seguro, pet friendly e muito bem avaliado pelos visitantes.",
    fotosUrl: [
      require("../assets/Locais/ibirapuera1.jpg"),
      require("../assets/Locais/ibirapuera2.jpg"),
      require("../assets/Locais/ibirapuera3.jpg"),
    ],
    endereco: "Av. Pedro Álvares Cabral - SP",
    cidade: "São Paulo",
    estado: "SP",
    cep: "",
    latitude: -23.5874,
    longitude: -46.6576,
    status: "ativo",
    likes: 1200,
    salvos: 700,
    tags: tagsMock.filter((tag) =>
      [5, 12, 20, 32, 40, 52, 61, 70].includes(tag.id),
    ),
    curtidoPeloUsuario: true,
    salvoPeloUsuario: true,
  }),

  new Local({
    id: 8,
    nome: "Praia de Copacabana",
    descricao:
      "A Praia de Copacabana é um dos destinos mais famosos do Brasil, ideal para quem busca diversão ao ar livre. Com ambiente animado e diversas opções de lazer, é perfeita para passeios com amigos e atividades esportivas.",
    fotosUrl: [
      require("../assets/Locais/copacabana1.webp"),
      require("../assets/Locais/copacabana2.png"),
    ],
    endereco: "Rio de Janeiro - RJ",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "",
    latitude: -22.9739,
    longitude: -43.1853,
    status: "ativo",
    likes: 2000,
    salvos: 1500,
    tags: tagsMock.filter((tag) =>
      [5, 12, 20, 30, 42, 52, 60, 73].includes(tag.id),
    ),
    curtidoPeloUsuario: false,
    salvoPeloUsuario: false,
  }),
];
