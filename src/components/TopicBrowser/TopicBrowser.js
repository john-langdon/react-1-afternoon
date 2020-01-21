import React from "react";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterString from "../Topics/FilterString";
import FilterObject from "../Topics/FilterObject";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";

class TopicBrowser extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterString />
        <FilterObject />
        <Palindrome />
        <Sum />
      </div>
    );
  }
}
export default TopicBrowser;
