import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import UserTable from "../components/tables/user-table";
import UserModal from "../components/modals/user-modal";

const UserManagement = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <h1>Users</h1>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <IconButton onClick={handleOpen}>
          Add user
          <AddIcon />
        </IconButton>
      </div>
      <UserModal open={open} handleClose={handleClose} />
      <UserTable />
    </>
  );
};

export default UserManagement;
