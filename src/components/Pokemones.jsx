import React from "react";

// hooks react redux
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { obtenerPokemonesAccion } from "../redux/pokeDucks";

const Pokemones = () => {
  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones.array);
  console.log(pokemones.results);

  return (
    <div>
      <h1>Pokemones!</h1>
      <button onClick={() => dispatch(obtenerPokemonesAccion())}>
        Obtener
      </button>
      <ul>
        {pokemones.map((item) => (
          <>
            <li key={item.name}>
              {item.name}
              <img src={item.url} alt="pokemones" />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
