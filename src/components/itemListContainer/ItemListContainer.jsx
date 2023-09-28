import React from "react";
import './itemListContainer.css'

function ItemListContainer(props) {

  return (
    <>
      <main className="greeting">
        <p>Bienvenido {props.nombre}!</p>
      </main>
    </>
  );
}

export default ItemListContainer;
