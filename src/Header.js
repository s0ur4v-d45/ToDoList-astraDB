import React from "react";
import TodoTextInput from "./TodoTextInput";

const Header = ({ addTodo }) => {
  const handleSave = (text) => {
    if (text.length !== 0) {
      addTodo(text);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder="Tasks to do in this week"
      />
    </header>
  );
};

export default Header;
