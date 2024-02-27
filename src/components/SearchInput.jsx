import React from "react";

export default function SearchInput() {
  const onFormSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };
  return (
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
  );
}
