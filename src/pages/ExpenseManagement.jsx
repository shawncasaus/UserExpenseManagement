import { useContext, useEffect } from "react";
import ExpensesTable from "../components/tables/expenses-table";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from "@mui/icons-material/Add";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ExpenseModal from "../components/modals/expense-modal";
import { selectBoxStyles } from "../styles/index";
import { AppContext } from "../contexts/AppContext";

const ExpenseManagement = () => {
  const { userData } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setCurrentUser(event.target.value);
    setUserId(event.target.value.uuid);
  };

  useEffect(() => {
    if (userData.size > 0) {
      const usersArray = [];
      [...userData].forEach(([, value]) => {
        usersArray.push({
          name: `${value.firstName} ${value.lastName}`,
          uuid: value.id,
        });
      });
      setUsers(usersArray);
      setCurrentUser(usersArray[0]);
      setUserId(usersArray[0].uuid);
    }
  }, [userData]);

  return (
    <>
      <h1>Expenses</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={selectBoxStyles}>
          <InputLabel id="demo-simple-select-label">Users</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentUser}
            label="Users"
            onChange={handleChange}
          >
            {users.map((user, index) => (
              <MenuItem key={index} value={user}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <IconButton onClick={handleOpen}>
          Add Expense
          <AddIcon />
        </IconButton>
      </div>
      <ExpenseModal
        open={open}
        handleClose={handleClose}
        uuid={userId}
        isEdit={false}
      />
      <ExpensesTable uuid={userId} />
    </>
  );
};

export default ExpenseManagement;
