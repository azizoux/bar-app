import React, { useContext } from "react";
import "./CocktailCard.sass";
import { CocktailContext } from "../../App";

export default function CocktailCard(props) {
  const [cocktails, setCocktails] = useContext(CocktailContext);
  console.log(cocktails);

  return (
    <div className="cocktailCard">
      <img className="cocktailImage" src={props.image} alt="CocktailImage" />
      <h1 className="cocktailName">{props.name}</h1>
      <div className="separator" />
      <div>
        <ol className="ingredientList">
          {props.ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
