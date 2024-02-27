import React from "react";
import ReactDOM from "react-dom";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
    //this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  // we made this function anynoms to not bind the function
  onFormSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
    // console.log(this.state.entry);
    this.props.onSearchSubmit(this.state.entry);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                  this.setState({ entry: event.target.value });
                }}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
