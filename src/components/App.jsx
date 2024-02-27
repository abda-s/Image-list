import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput";
class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: 30 }}>
        <SearchInput />
      </div>
    );
  }
}

export default App;
