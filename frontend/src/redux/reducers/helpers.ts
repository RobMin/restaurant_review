type ById<T> = { [ id: string ]: T };

export const getById = <T extends { id: string }>(list: T[]): ById<T> =>
  list.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {} as ById<T>);
