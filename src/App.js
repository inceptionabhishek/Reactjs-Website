import React, { useState } from "react";
function App() {
  const [query, setQuery] = useState("");
  const [Value, setValue] = useState({});



 const fixedUrlGender = "https://api.genderize.io?name=";
 const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${fixedUrlGender}${query}`)
        .then((res) => res.json())
        .then((result) => {
          setValue(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  function setImage(props) {
    if(props=="male"){
      return (
        <img src="https://img.icons8.com/color/48/000000/user-male-circle--v2.png"  className="IconImage"/>
      );
    }

    return (
      <img src="https://img.icons8.com/color/48/000000/female-facepalm.png"  className="IconImage"/>
    );
    
  }
  return (
    <div className="NewProject">
      <div className="Intro">
        <h1>I will predict Your Gender, Try me! </h1>
      </div>
      <input
        type="text"
        className="search-box"
        placeholder="search.."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      <div className="Content">
        <h2>You are </h2>
        <h1 className="JsonValue">{Value.gender}</h1>
        <div className="IconImage">{setImage(Value.gender)}</div>
      </div>
    </div>
  );
}
export default App;
