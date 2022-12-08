// material
import { Table, TableRow, TableHead, TableBody, TableCell, TableContainer } from "@mui/material";
// components
import Scrollbar from "../../Scrollbar";

// ----------------------------------------------------------------------
export interface ResultHeaderProps {
  tableData: Array<Object>;
}
const ResultTable: React.FC<ResultHeaderProps> = ({ tableData }) => {
  return (
    <Scrollbar>
      <TableContainer sx={{ minWidth: 1000, mt: 3, maxHeight: 500 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 84 }}>Sr No</TableCell>
              <TableCell align="justify">File Name</TableCell>
              <TableCell align="justify">Class</TableCell>
              <TableCell align="justify">Accurate</TableCell>
              <TableCell align="justify">Detail</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((row: any, index: number) =>
              row.map((row1: any) => (
                <TableRow key={row1.File_Name}>
                  <TableCell sx={{ width: 84 }}>{index + 1}</TableCell>
                  <TableCell align="justify">{row1.File_Name}</TableCell>
                  <TableCell align="justify">{row1.Class}</TableCell>
                  <TableCell align="justify">{row1.Accurate}</TableCell>
                  <TableCell align="justify">{row1.Detail}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  );
};

export default ResultTable;
