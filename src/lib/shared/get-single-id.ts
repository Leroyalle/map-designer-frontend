export const getSingleId = (id: string | string[]) => {
  if (Array.isArray(id)) {
    return id[0];
  }
  return id;
};
