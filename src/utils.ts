export const convertBoolean2Number = (value: any) => (!!value ? 1 : 0);

export const getKeyByValue = (obj: object, value: string) => {
  const indexOfS = Object.values(obj).indexOf(value as unknown as typeof obj);
  const key = Object.keys(obj)[indexOfS];

  return key;
};
