import React from "react";
import "./list.css";
function List() {
  const users = JSON.parse(localStorage.getItem("usersList"));
  if (users != null) {
    return (
      <div className="list">
        <h1>Users Registered with us</h1>
        <table>
          <tr className="row">
            <th>User Name</th>
            <th>User Email</th>
            <th>Contact Number</th>
          </tr>
          {users.map((user) => {
            return (
              <tr className="row">
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.pwd}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  } else {
    return <h1> No User Registered</h1>;
  }
}

export default List;
