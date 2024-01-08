import { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { AppContext } from "../../contexts/AppContext";
import { deleteUser, getExpensesTotalById } from "../../data/data-helpers";
import UserModal from "../modals/user-modal";

const UserTable = () => {
  const { expenseData, userData, setUserData } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [modalUUID, setModalUUID] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <UserModal open={open} handleClose={handleClose} uuid={modalUUID} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Expense Total</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...userData].map(([key, value]) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {value.firstName}
                </TableCell>
                <TableCell align="right">{value.lastName}</TableCell>
                <TableCell align="right">
                  {getExpensesTotalById(expenseData, key)}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      setUserData([...deleteUser(userData, key)]);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="edit"
                    onClick={() => {
                      setModalUUID(key);
                      handleOpen();
                    }}
                  >
                    <EditNoteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
