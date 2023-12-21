import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index";
import UserManagement from "./pages/UserManagement";
import ExpenseManagement from "./pages/ExpenseManagement";
import TotalCost from "./pages/TotalCost";
import NotFound from "./pages/NotFound";
import { AppContext } from "./contexts/AppContext";
import { Body } from "./styles";
import { NewUserData, NewExpenseData, NewCostData } from "./data/data-helpers";

function App() {
  const [userData, setUserData] = useState(NewUserData);
  const [expenseData, setExpenseData] = useState(NewExpenseData);
  const [costData, setCostData] = useState(NewCostData);

  const ContextData = {
    userData,
    setUserData,
    expenseData,
    setExpenseData,
    costData,
    setCostData,
  };

  return (
    <BrowserRouter>
      <Navbar />
      <AppContext.Provider value={ContextData}>
        <Body>
          <Routes>
            <Route index element={<UserManagement />} />
            <Route path="/expense-management" element={<ExpenseManagement />} />
            <Route path="/total-cost" element={<TotalCost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Body>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
