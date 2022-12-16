import { useState, useEffect } from "react";

// material
import { styled, alpha } from "@mui/material/styles";
import { Grid, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// components
import Page from "../components/Page";
import useModelAdded from "../hooks/useMetaData";
import EmptyContent from "components/EmptyContent";
import HistoryDisplayCard from "components/_external-pages/history/historyDisplayCard";
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function History() {
  const { modelObjectFetched, isModelObject, modelObjectData } = useModelAdded();
  const theme = useTheme();

  useEffect(() => {
    if (!isModelObject) {
      modelObjectFetched();
    }
  }, [isModelObject]);

  return (
    <RootStyle title="Contact us | Minimal-UI">
      <Container sx={{ my: 10 }}>
        {modelObjectData && Object.values(modelObjectData).length > 0 ? (
          <Grid container spacing={4} my={12}>
            {Object.values(modelObjectData).map((value: any) => {
              let n = value.percantage.split("%");
              return (
                <HistoryDisplayCard
                  modelName={value.modelName}
                  modelType={value.modelResult}
                  ChartData={Number(n[0])}
                  modelData={value.modelData}
                />
              );
            })}
          </Grid>
        ) : (
          <EmptyContent title="History" description="No History Available" />
        )}
      </Container>
    </RootStyle>
  );
}
