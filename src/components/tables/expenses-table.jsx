import { useContext, useState, useEffect } from "react";
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
import PropTypes from "prop-types";
import { AppContext } from "../../contexts/AppContext";
import ExpenseModal from "../modals/expense-modal";
import { getExpensesById, deleteExpense } from "../../data/data-helpers";

const ExpensesTable = ({ uuid }) => {
  const { expenseData, setExpenseData } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [expenseId, setExpenseId] = useState("");
  const [userExpenses, setUserExpenses] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (uuid) {
      const expenses = getExpensesById(expenseData, uuid);
      setUserExpenses(expenses);
    }
  }, [expenseData, uuid]);

  useEffect(() => {
    if (!open) {
      setExpenseId("");
    }
  }, [open]);

  return (
    <>
      <ExpenseModal
        open={open}
        handleClose={handleClose}
        uuid={uuid}
        isEdit={true}
        expenseId={expenseId}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Cost</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userExpenses.map((value, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{value.category}</TableCell>
                <TableCell align="center">{value.description}</TableCell>
                <TableCell align="center">{value.amount}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      setExpenseData(
                        deleteExpense(expenseData, uuid, value.id)
                      );
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    onClick={() => {
                      setExpenseId(value.id);
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

ExpensesTable.propTypes = {
  uuid: PropTypes.string.isRequired,
};

export default ExpensesTable;
