import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Tom y jerry");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  }

  return (
    <form onSubmit={(event) => onsubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
