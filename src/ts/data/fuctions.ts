export const getDataApi: unknown = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
