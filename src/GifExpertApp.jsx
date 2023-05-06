import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one Punch", "Dragon Ball"]);

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
