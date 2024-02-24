import React from "react";
import ReactDOM from "react-dom";
// import Searchinput from "./SearchInput";
const App = () => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
      };
  return (
    <div>
      <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <div className="ui massive icon input">
              <input type="text" placeholder="Search..." />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
