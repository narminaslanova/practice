import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      {props.users.length > 0 ? (
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} {user.age}
            </li>
          ))}
        </ul>
      ) : (
        <p className={classes.users}>No users found</p>
      )}
    </Card>
  );
};

export default UsersList;
