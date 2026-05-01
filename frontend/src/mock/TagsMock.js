import Tag from "../entities/Tag";

export const tagsMock = [
  // Tipos de lugar
  new Tag({ id: 1, nome: "Museu", categoria: "Tipos de lugar", cor: "#22c55e" }),
  new Tag({ id: 2, nome: "Igreja", categoria: "Tipos de lugar", cor: "#22c55e" }),
  new Tag({ id: 3, nome: "Estádio", categoria: "Tipos de lugar", cor: "#22c55e" }),
  new Tag({ id: 4, nome: "Monumento", categoria: "Tipos de lugar", cor: "#22c55e" }),
  new Tag({ id: 5, nome: "Ponto turístico", categoria: "Tipos de lugar", cor: "#22c55e" }),
  new Tag({ id: 6, nome: "Centro cultural", categoria: "Tipos de lugar", cor: "#22c55e" }),
  new Tag({ id: 7, nome: "Restaurante", categoria: "Tipos de lugar", cor: "#22c55e" }),

  // Experiência
  new Tag({ id: 10, nome: "Cultural", categoria: "Experiência", cor: "#f97316" }),
  new Tag({ id: 11, nome: "Gastronômica", categoria: "Experiência", cor: "#f97316" }),
  new Tag({ id: 12, nome: "Esportiva", categoria: "Experiência", cor: "#f97316" }),
  new Tag({ id: 13, nome: "Histórica", categoria: "Experiência", cor: "#f97316" }),
  new Tag({ id: 14, nome: "Artística", categoria: "Experiência", cor: "#f97316" }),
  new Tag({ id: 15, nome: "Arquitetônica", categoria: "Experiência", cor: "#f97316" }),

  // Preço
  new Tag({ id: 20, nome: "Gratuito", categoria: "Preço", cor: "#ef4444" }),
  new Tag({ id: 21, nome: "Acessível", categoria: "Preço", cor: "#ef4444" }),
  new Tag({ id: 22, nome: "Pago", categoria: "Preço", cor: "#ef4444" }),
  new Tag({ id: 23, nome: "Alto custo", categoria: "Preço", cor: "#ef4444" }),

  // Público
  new Tag({ id: 30, nome: "Todos os públicos", categoria: "Público", cor: "#3b82f6" }),
  new Tag({ id: 31, nome: "Familiar", categoria: "Público", cor: "#3b82f6" }),
  new Tag({ id: 32, nome: "Com amigos", categoria: "Público", cor: "#3b82f6" }),
  new Tag({ id: 33, nome: "Infantil", categoria: "Público", cor: "#3b82f6" }),

  // Regras
  new Tag({ id: 40, nome: "Pet friendly", categoria: "Regras do local", cor: "#6b7280" }),
  new Tag({ id: 41, nome: "Não pet friendly", categoria: "Regras do local", cor: "#6b7280" }),
  new Tag({ id: 42, nome: "Permite fumar", categoria: "Regras do local", cor: "#6b7280" }),
  new Tag({ id: 43, nome: "Não permite fumar", categoria: "Regras do local", cor: "#6b7280" }),

  // Infraestrutura
  new Tag({ id: 50, nome: "Espaço aberto", categoria: "Infraestrutura", cor: "#14b8a6" }),
  new Tag({ id: 51, nome: "Espaço fechado", categoria: "Infraestrutura", cor: "#14b8a6" }),
  new Tag({ id: 52, nome: "Ao ar livre", categoria: "Infraestrutura", cor: "#14b8a6" }),

  // Relevância
  new Tag({ id: 60, nome: "Imperdível", categoria: "Relevância", cor: "#eab308" }),
  new Tag({ id: 61, nome: "Mais popular", categoria: "Relevância", cor: "#eab308" }),
  new Tag({ id: 62, nome: "Em alta", categoria: "Relevância", cor: "#eab308" }),
  new Tag({ id: 63, nome: "Destaque do app", categoria: "Relevância", cor: "#eab308" }),

  // Comodidades
  new Tag({ id: 70, nome: "Wi-Fi", categoria: "Comodidades", cor: "#6366f1" }),
  new Tag({ id: 71, nome: "Estacionamento", categoria: "Comodidades", cor: "#6366f1" }),
  new Tag({ id: 72, nome: "Acessibilidade", categoria: "Comodidades", cor: "#6366f1" }),
  new Tag({ id: 73, nome: "Banheiro", categoria: "Comodidades", cor: "#6366f1" }),
  new Tag({ id: 74, nome: "Área kids", categoria: "Comodidades", cor: "#6366f1" }),
];