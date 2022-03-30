import React from "react";
import List from "./List";

const Lists = () => {
  const items: string[] = ["md", "yeamin"];

  const onClick = (word: string): void => alert(word);
  return <div>
    <List items={items} onClick={onClick}/>
  </div>;
};

export default Lists;


