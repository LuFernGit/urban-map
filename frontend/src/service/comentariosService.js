import { comentariosMock } from "../mock/ComentariosMock";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getComentariosPorLocal = async (localId) => {
  await delay(300);

  return comentariosMock.filter((c) => c.localId === localId);
};

export const adicionarComentario = async (comentario) => {
  await delay(300);

  const novoComentario = {
    id: Date.now(),
    ...comentario,
  };

  comentariosMock.unshift(novoComentario);

  return novoComentario;
};
