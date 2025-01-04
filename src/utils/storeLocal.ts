export const setData = (
  key: string,
  value: unknown | string | object | number
) => {
  return localStorage.setItem(
    "the_book:" + key,
    JSON.stringify({ data: value })
  );
};

export const getData = (
  key: string,
  _default: unknown | Array<unknown> | string | object | number = null
) => {
  if (localStorage.length == 0) {
    return _default;
  }

  const row = localStorage.getItem("the_book" + key);
  if (row) {
    const data = JSON.parse(row);
    return data.data;
  }

  return _default;
};
