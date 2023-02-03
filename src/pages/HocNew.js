import React, { Component } from "react";
import UserList from "./UserList";
import Hoc from "./HOC";

const UsersData = [
  {
    id: 1,
    name: "Krunal",
  },
  {
    id: 2,
    name: "Ankit",
  },
  {
    id: 3,
    name: "Rushabh",
  },
];

const Users = Hoc(UserList, UsersData);

class HocNew extends Component {
  render() {
    return (
      <div>
        <Users></Users>
      </div>
    );
  }
}

export default HocNew;
