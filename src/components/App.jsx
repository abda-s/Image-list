import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput";
class App extends React.Component {
  constructor(props){
    super(props)
  }
  onSearchSubmit=(entry)=>{
    console.log(entry);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: 30 }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
