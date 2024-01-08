import { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AppContext } from "../../contexts/AppContext";
import { GetCosts } from "../../data/data-helpers";

const TotalCostTable = () => {
  const { costData, setCostData, expenseData } = useContext(AppContext);

  useEffect(() => {
    if (expenseData) {
      setCostData(GetCosts(expenseData));
    }
  }, [expenseData, setCostData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...costData].map(([key, value]) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{key}</TableCell>
              <TableCell align="center">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TotalCostTable;
