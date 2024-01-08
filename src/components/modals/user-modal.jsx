import { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PropTypes from "prop-types";
import { AppContext } from "../../contexts/AppContext";
import {
  addUser,
  getUserById,
  editUser,
  addNewUserExpense,
} from "../../data/data-helpers";
import {
  ModalBoxStyle,
  FormTextBoxStyle,
  FormTextSubmitStyle,
} from "../../styles";

const UserModal = ({ open, handleClose, uuid }) => {
  const { userData, setUserData, expenseData, setExpenseData } =
    useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const handleSubmit = () => {
    if (firstName.length > 0 && lastName.length > 0) {
      if (uuid) {
        setUserData(editUser(userData, uuid, firstName, lastName));
      } else {
        const newUser = addUser(userData, firstName, lastName);
        setUserData(newUser.updatedUsers);
        setExpenseData(addNewUserExpense(expenseData, newUser.uuid));
      }
      handleClose();
    }
    setFirstNameError(firstName.length === 0);
    setLastNameError(lastName.length === 0);
  };

  useEffect(() => {
    if (uuid) {
      const user = getUserById(userData, uuid);
      if (user) {
        setFirstName(user.firstName);
        setLastName(user.lastName);
      }
    }
  }, [userData, uuid]);

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
            <TextField
              error={firstNameError}
              id="outlined-required"
              label="First name"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
                setFirstNameError(false);
              }}
              sx={FormTextBoxStyle}
            />
          </div>
          <div>
            <TextField
              error={lastNameError}
              id="outlined-required"
              label="Last name"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
                setLastNameError(false);
              }}
              sx={FormTextBoxStyle}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {uuid ? (
              <IconButton onClick={handleSubmit} sx={FormTextSubmitStyle}>
                Edit user
                <EditNoteIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleSubmit} sx={FormTextSubmitStyle}>
                Add user
                <AddIcon />
              </IconButton>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

UserModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  uuid: PropTypes.string,
};

export default UserModal;
