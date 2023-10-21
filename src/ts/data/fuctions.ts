export const getDataApi = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
