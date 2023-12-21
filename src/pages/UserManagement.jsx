import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const UserManagement = () => {
  const { text } = useContext(AppContext);
  return <h1>{text}</h1>;
};

export default UserManagement;
