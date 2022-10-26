import logo from "./logo.svg";
import "./App.css";
import StarRating from "./components/starRating";
import { useState } from "react";
import colorsList from "./services/color-data.json";
import ColorList from "./components/colorList";
import AddColorForm from "./components/addColorForm";
import {v4} from 'uuid'

function App() {
  const [colors, setColors] = useState(colorsList);
  return (
    <ColorList
      colors={colors}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id != id);
        setColors(newColors);
      }}
      onRateStars={(rating, id) => {
        const newColors = colors.map((color) =>
          color.id === id ? { ...color, rating } : { ...color }
        );
        setColors(newColors);
      }}
    />
  );
}

export default App;
