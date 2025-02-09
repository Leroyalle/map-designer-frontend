export const getAbsoluteUrl = (url: string) => {
  return `${process.env.NEXT_PUBLIC_BACK_URL}/uploads/${url}`;
};
