import { useState } from "react";
import { Icon } from "@iconify/react";
import iconUpload from "@iconify/icons-ic/file-upload";
// material
import { Button, Typography, Stack } from "@mui/material";

import { Box, LinearProgress } from "@mui/material";
import { varFadeInRight, MotionInView } from "../../animate";
// utils
import { fPercent, fNumber } from "../../../utils/formatNumber";
import mockData from "../../../utils/mock-data";
import useModelAdded from "../../../hooks/useMetaData";

// ----------------------------------------------------------------------

const LABEL = ["Development", "Design", "Marketing"];

const MOCK_SKILLS = [...Array(3)].map((_, index) => ({
  label: LABEL[index],
  value: mockData.number.percent(index)
}));

const OPTIONS = [
  "Show some love to Material-UI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
];

export interface SearchHeaderProps {
  resultString: string;
  resultData: any;
  modelName: string;
  modelData: any;
}

const ResultView: React.FC<SearchHeaderProps> = ({
  resultString,
  resultData,
  modelName,
  modelData
}) => {
  type ProgressItemProps = {
    progress: {
      label: string;
      value: number;
    };
  };
  const { modelAddedFunction } = useModelAdded();

  const saveButtonFunction = async () => {
    const modelObject = {
      modelData: modelData,
      modelName: modelName,
      modelResult: resultData,
      percantage: fPercent(resultData.Accuracy * 100)
    };
    modelAddedFunction(modelObject);
  };

  function ProgressItem({ progress }: ProgressItemProps) {
    const { label, value } = progress;
    return (
      <Box sx={{ mt: 3 }}>
        <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {fPercent(value)}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            "& .MuiLinearProgress-bar": { bgcolor: "grey.700" },
            "&.MuiLinearProgress-determinate": { bgcolor: "divider" }
          }}
        />
      </Box>
    );
  }

  return (
    <Stack spacing={5}>
      <MotionInView variants={varFadeInRight}>
        <Typography variant="h3">Result Summary</Typography>
      </MotionInView>

      <MotionInView variants={varFadeInRight}>
        <Typography
          sx={{
            color: (theme) => (theme.palette.mode === "light" ? "text.secondary" : "common.white")
          }}
        >
          {resultData && resultData.Class
            ? `Detected termite type is of Class ${resultData.Class} with accuracy of ${resultData.Accuracy}`
            : `Result Wil be displayed here`}
        </Typography>
      </MotionInView>

      {resultString && (
        <Box sx={{ my: 5 }}>
          <MotionInView key={"Accuracy"} variants={varFadeInRight}>
            <ProgressItem progress={{ label: "Accuracy", value: resultData.Accuracy * 100 }} />
          </MotionInView>
        </Box>
      )}

      <MotionInView variants={varFadeInRight}>
        <Button
          size="large"
          variant="contained"
          onClick={saveButtonFunction}
          endIcon={<Icon icon={iconUpload} width={24} height={24} />}
        >
          Save
        </Button>
      </MotionInView>
    </Stack>
  );
};

export default ResultView;
