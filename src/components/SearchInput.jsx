import React from "react";
import ReactDOM from "react-dom";

class SearchInput extends React.Component {
  onFormSubmit(event){
    event.preventDefault();
    // Your form submission logic here
  };
  render(){
    return (
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
      );
  }

}

export default SearchInput;