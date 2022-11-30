import "./App.css";
import React from "react";
import Main from "./course/Main";
import { Route, Routes} from "react-router-dom"
import CourseDescription from "./course/CourseDescription";


function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
  <Main />
  
  
  );
}

export default App;
