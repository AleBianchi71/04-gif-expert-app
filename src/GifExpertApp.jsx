import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Un Show Más"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/*Titulo*/}
      <h1>GifExpertApp</h1>

      {/*input*/}
      <AddCategory onNewCategory={onAddCategory} />
      {/*Listado de Gif*/}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/*Gif item*/}
    </>
  );
};
