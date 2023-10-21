import { pokemonsData } from "../ExpectedData";
import { getDataApi } from "../fuctions";
import { mockFetch } from "../mockFetch";
import mockData from "./../mockData.json";

describe("Given the function getDataApi", () => {
  describe("When it recibe a url as a sting", () => {
    test("it should return a object", async () => {
      const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5";
      const typeexpected = {};
      window.fetch = mockFetch(mockData);

      const data = (await getDataApi(url)) as Record<string, unknown>;

      expect(typeof data).toBe(typeof typeexpected);
    });
  });

  describe("When it recibe a url as a sting", () => {
    test("it should return a expected data", async () => {
      const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5";
      const expetedData = pokemonsData;
      window.fetch = mockFetch(mockData);

      const data = (await getDataApi(url)) as Record<string, unknown>;

      expect(data).toStrictEqual(expetedData);
    });
  });
});
