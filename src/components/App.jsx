import React from "react";
import ReactDOM from "react-dom";
import Searchinput from "./SearchInput";
const App = () => {
  return (
    <div>
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
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
