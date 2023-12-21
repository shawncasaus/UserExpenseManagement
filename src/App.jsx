import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index";
import UserManagement from "./pages/UserManagement";
import ExpenseManagement from "./pages/ExpenseManagement";
import TotalCost from "./pages/TotalCost";
import NotFound from "./pages/NotFound";
import { AppContext } from "./contexts/AppContext";
import { Body } from "./styles";

function App() {
  const [text, setText] = useState("my text");

  return (
    <BrowserRouter>
      <Navbar />
      <AppContext.Provider value={{ text, setText }}>
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
