import React, { createContext } from "react";
import CocktailCard from "./Components/CocktailCard/CocktailCard";
import "./App.sass";
import { CocktailList } from "./models/CocktailList";
import NavBar from "./Components/NavBar/NavBar";
import { useState } from "react";

export const CocktailContext = createContext();

function App() {
  const data = CocktailList();
  const [cocktails, setCocktails] = useState(data);

  const handleSearch = (critere) => {
    console.log(critere);
    if (critere.trim() === "") {
      setCocktails(data);
    } else {
      setCocktails(
        data.filter((cocktail) =>
          cocktail.name.toLowerCase().startsWith(critere.toLowerCase())
        )
      );
    }
  };

  return (
    <CocktailContext.Provider value={[cocktails, setCocktails]}>
      <div className="App">
        <NavBar filter={handleSearch} />
        {cocktails.map((cocktail) => (
          <CocktailCard
            name={cocktail.name}
            image={cocktail.image}
            ingredients={cocktail.ingredients}
          />
        ))}
      </div>
    </CocktailContext.Provider>
  );
}

export default App;
