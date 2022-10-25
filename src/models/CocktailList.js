import { Cocktail } from "./Cocktail";
export function CocktailList() {
  const cocktails = [
    {
      id: 1,
      name: "mojito",
      image: "mojito.jfif",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 2,
      name: "lagoon",
      image: "lagoon.jfif",
      ingredients: [
        "2cl whisky",
        "9cl jus",
        "4g de sirop sucre de cannes",
        "vert vert",
        "5cl d'eau",
        "2cl lait",
      ],
    },
    {
      id: 3,
      name: "rainbow",
      image: "rainbow.jfif",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 4,
      name: "bara-bara",
      image: "bara-bara.jpg",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 5,
      name: "solero",
      image: "solero.jfif",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 6,
      name: "tequila",
      image: "tequila.jfif",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 7,
      name: "tropica",
      image: "tropica.jfif",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 8,
      name: "rio",
      image: "rio.jfif",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 9,
      name: "smash",
      image: "smash.jpg",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 10,
      name: "daikiri",
      image: "daikiri.jpg",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 11,
      name: "pina-colada",
      image: "pina-colada.webp",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 12,
      name: "caraibos",
      image: "caraibos.jpg",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 13,
      name: "manzana",
      image: "manzana.jpg",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
    {
      id: 14,
      name: "margarita",
      image: "margarita.jpg",
      ingredients: [
        "2cl whisky",
        "6cl citron",
        "4g de sirop sucre de cannes",
        "Menthe vert",
        "5cl d'eau gazeuse",
      ],
    },
  ];
  const data = [];
  for (const cocktail of cocktails) {
    data.push(
      new Cocktail(
        cocktail.name,
        require(`../assets/${cocktail.image}`),
        cocktail.ingredients
      )
    );
  }
  return data;
}
