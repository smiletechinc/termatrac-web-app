import { useEffect, useState } from "react";
// material
import { styled } from "@mui/material/styles";
import { Grid, Container } from "@mui/material";
// components
import Page from "../components/Page";
import { SearchView, ResultView } from "../components/_external-pages/termatrac";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Termatrac() {
  const [resultDataArray, setResultDatArray] = useState([]);

  return (
    <RootStyle title="Contact us | Minimal-UI">
      <Container sx={{ my: 10 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <SearchView setResultArrayValues={setResultDatArray} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ResultView resultDataView={resultDataArray} />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
