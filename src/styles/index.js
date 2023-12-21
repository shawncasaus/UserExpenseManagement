import { styled } from "styled-components";

// Styled Custom Components
export const Body = styled.div`
  margin: 0 auto;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
  height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #eeeef0;
  color: #718096;
  height: 5rem;
  width: 100vw;
`;

export const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  list-style: none;
`;

export const LI = styled.li`
  padding: 0.5rem;
`;

// Material UI SX Styles
export const ModalBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const FormTextBoxStyle = {
  width: "100%",
  marginBottom: "2rem",
};

export const FormTextSubmitStyle = {
  width: "50%",
  padding: "0.5px",
};

export const selectBoxStyles = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  width: "30%",
  padding: "1rem",
};
