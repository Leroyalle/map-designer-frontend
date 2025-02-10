export const generateId = () => {
  return `id-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
};
