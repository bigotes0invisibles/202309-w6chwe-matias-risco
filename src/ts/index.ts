import App from "./components/App/App.js";

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5";
const body = document.querySelector("body") as HTMLElement;

const app = new App(body, url);
app.render();

await app.updateinfo("https://pokeapi.co/api/v2/pokemon?offset=50&limit=5");
