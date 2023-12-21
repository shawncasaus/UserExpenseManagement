import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import { AppContext } from "../../contexts/AppContext";
import {
  addExpense,
  expenseCategories,
  getExpenseById,
  editExpense,
} from "../../data/data-helpers";
import {
  ModalBoxStyle,
  FormTextBoxStyle,
  FormTextSubmitStyle,
} from "../../styles";

const ExpenseModal = ({ open, handleClose, uuid, isEdit }) => {
  const { expenseData, setExpenseData } = useContext(AppContext);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [categoryError, setCategoryError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [amountError, aetAmountError] = useState(false);
  const handleSubmit = () => {
    if (category.length > 0 && description.length > 0 && amount.length > 0) {
      if (isEdit) {
        setExpenseData(
          editExpense(expenseData, uuid, category, description, amount)
        );
        setCategory("");
        setDescription("");
        setAmount("");
      } else {
        setExpenseData(
          addExpense(expenseData, uuid, category, description, amount)
        );
        setCategory("");
        setDescription("");
        setAmount("");
      }
      handleClose();
    }
    setCategoryError(category.length === 0);
    setDescriptionError(description.length === 0);
    aetAmountError(amount === 0);
  };

  useEffect(() => {
    if (isEdit) {
      const expense = getExpenseById(expenseData, uuid);
      if (expense) {
        setCategory(expense.category);
        setDescription(expense.description);
        setAmount(expense.amount);
      }
    }
  }, [expenseData, isEdit, uuid]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalBoxStyle} component="form" noValidate autoComplete="off">
          <div>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              error={categoryError}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Users"
              onChange={(event) => {
                setCategory(event.target.value);
                setCategoryError(false);
              }}
              sx={FormTextBoxStyle}
            >
              {expenseCategories.map((expenseCategory) => (
                <MenuItem key={uuidv4()} value={expenseCategory}>
                  {expenseCategory}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <TextField
              error={descriptionError}
              id="outlined-required"
              label="Description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
                setDescriptionError(false);
              }}
              sx={FormTextBoxStyle}
            />
          </div>
          <div>
            <TextField
              error={amountError}
              id="outlined-required"
              label="Amount"
              value={amount}
              onChange={(event) => {
                setAmount(event.target.value);
                aetAmountError(false);
              }}
              sx={FormTextBoxStyle}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={handleSubmit} sx={FormTextSubmitStyle}>
              {isEdit ? "Edit expense" : "Add expense"}
              <AddIcon />
            </IconButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

ExpenseModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  uuid: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
};

export default ExpenseModal;
