export const filterByType = <T extends object>(obj: T, keys: (keyof T)[]): Partial<T> => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    throw new Error("The 'obj' parameter must be a plain object.");
  }

  const filteredObj: Partial<T> = {};

  keys.forEach((key) => {
    if (key in obj) {
      filteredObj[key] = obj[key];
    }
  });

  return filteredObj;
};
