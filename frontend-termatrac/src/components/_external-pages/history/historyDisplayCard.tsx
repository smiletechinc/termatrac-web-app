import ReactApexChart from "react-apexcharts";
import { merge } from "lodash";
import SimpleBarReact, { Props } from "simplebar-react";

// material
import { styled, alpha } from "@mui/material/styles";
import { Grid, Card, CardHeader, Button, Stack, Typography, GridSize } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// components
import { BaseOptionChart } from "../../charts";
// ----------------------------------------------------------------------

const RootStyle1 = styled("div")(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden"
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: 100,
  "& .simplebar-scrollbar": {
    "&:before": {
      backgroundColor: alpha(theme.palette.grey[600], 0.48)
    },
    "&.simplebar-visible:before": {
      opacity: 1
    }
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6
  },
  "& .simplebar-mask": {
    zIndex: "inherit"
  }
}));

// ----------------------------------------------------------------------

export interface SearchHeaderProps {
  modelName: String;
  modelType: String;
  ChartData: Number;
  modelData: any;
}

const HistoryDisplayCard: React.FC<SearchHeaderProps> = ({
  modelName,
  modelType,
  ChartData,
  modelData
}) => {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    legend: { show: false },
    grid: {
      padding: { top: -32, bottom: -32 }
    },
    fill: {
      label: "Type",
      type: "gradient",
      gradient: {
        colorStops: [
          [
            { offset: 0, color: theme.palette.primary.light },
            { offset: 100, color: theme.palette.primary.main }
          ]
        ]
      }
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "64%" },
        dataLabels: {
          name: { offsetY: -16 },
          value: { offsetY: 8 },
          total: {
            label: modelType && Object.values(modelType)[1]
          }
        }
      }
    }
  });
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ mb: 4, mr: 4, bgcolor: "#C8FACD" }}>
        <CardHeader title={modelName} sx={{ mb: 4, borderWidth: 2 }} />
        <ReactApexChart
          type="radialBar"
          label="Type"
          series={[ChartData]}
          options={chartOptions}
          height={310}
        />

        <Stack spacing={2} sx={{ p: 5 }}>
          <RootStyle1>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              {modelData}
            </SimpleBarStyle>
          </RootStyle1>
        </Stack>
      </Card>
    </Grid>
  );
};

export default HistoryDisplayCard;
