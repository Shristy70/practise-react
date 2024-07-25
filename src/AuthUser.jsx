import { useContext, useState } from "react";
import { myloginContext } from "./LoginContext";
const AuthUser = () => {
  const { user, logout } = useContext(myloginContext);
  return (
    <>
      <h1>welcom to : {user.name} to my Group</h1>
      <button
        onClick={() => {
          logout()
        }}
      >click to remove </button>
    </>
  );
};
export default AuthUser;