import React,{ useState } from "react";
import "./styles.css";

export default function App() {
  const [fruitList, setFruitList] = useState(['リンゴ', 'バナナ', 'いちご'])

  return (
    <div>
      {fruitList.map(function(fruit) {
        return (
          <div>{fruit}</div>
        )
      })}
    </div>
  );
}
