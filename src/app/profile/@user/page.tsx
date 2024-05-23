import React from "react";
import { UserForm, UserModal } from "./ui";

import profileStyles from "../profile.module.scss";
import userStyles from "./user.module.scss";

function UserPage() {
  return (
    <>
      <div className={userStyles["user"]}>
        <h2 className={profileStyles["title"]}>My information:</h2>
        <div className="wrapper">
          <UserForm />
        </div>
      </div>
      <UserModal />
    </>
  );
}

export default UserPage;
