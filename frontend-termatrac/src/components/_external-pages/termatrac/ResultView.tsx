import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import iconUpload from "@iconify/icons-ic/file-upload";

// material
// import { useTheme, styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { alpha, styled, useTheme } from "@mui/material/styles";

import {
  Box,
  LinearProgress,
  CardContent,
  Button,
  Paper,
  Typography,
  Stack,
  GridSize
} from "@mui/material";
import {
  varFadeInRight,
  MotionInView,
  DialogAnimate,
  varBounceIn,
  varFadeInUp
} from "../../animate";
import { Block } from "../../../pages/components-overview/Block";
// utils
import { fPercent, fNumber } from "../../../utils/formatNumber";
import mockData from "../../../utils/mock-data";
import useModelAdded from "../../../hooks/useMetaData";
import ResultTable from "./ResultTable";

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

const ContainerStyle = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadiusSm,
  border: `solid 1px ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 100 : 800]
}));

export interface SearchHeaderProps {
  resultDataView: any;
}
function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}
function createData1(
  Sr_No: number,
  File_Name: string,
  Class: string,
  Accurate: string,
  Detail: string
) {
  return { Sr_No, File_Name, Class, Accurate, Detail };
}
const ResultView: React.FC<SearchHeaderProps> = ({ resultDataView }) => {
  type ProgressItemProps = {
    progress: {
      label: string;
      value: number;
    };
  };
  const { modelAddedFunction, setIsDataAdded, isDataAdded } = useModelAdded();
  const [valueArray, setValueArray] = useState<Array<Object>>([]);
  const [openUploadModal, setOpenUploadModal] = useState(false);

  let objValue = {};
  let RESULT_TABLE: any;

  // useEffect(() => {
  //   if (isDataAdded) {
  //     alert("Data Saved in Database");
  //   }
  // }, [isDataAdded]);
  const BASIC_TABLE = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];

  useEffect(() => {
    console.log("val", valueArray);
  }, [valueArray]);

  useEffect(() => {
    if (Object.values(resultDataView).length > 0) {
      let arr: Array<object> = [];
      Object.values(resultDataView).forEach((element: any) => {
        objValue = {
          filName: element.fileName,
          class: element.Data.Class,
          accurate: `${fPercent(element.Data.Accuracy * 100)}%`,
          detail: `Detected termite type is of Class ${element.Data.Class} with accuracy of ${element.Data.Accuracy}`
        };
        RESULT_TABLE = [
          createData1(
            1,
            `${Object.values(objValue)[0]}`,
            `${Object.values(objValue)[1]}`,
            `${Object.values(objValue)[2]}`,
            `${Object.values(objValue)[3]}`
          )
        ];
        arr.push(RESULT_TABLE);
      });
      setValueArray(arr);
    }
  }, [resultDataView]);

  const saveButtonFunction = async () => {
    if (Object.values(resultDataView).length > 0) {
      // alert("Wait for Data Saved");
      console.log("tyy", typeof resultDataView);
      console.log("resultDataView", resultDataView);
      Object.values(resultDataView).map((element: any) => {
        console.log("element", element.modelData);
        const modelObject = {
          modelData: element.modelData,
          modelName: element.modelNameValue,
          modelResult: element.Data,
          percantage: fPercent(element.Data.Accuracy * 100),
          fileName: element.fileName
        };
        setOpenUploadModal(true);
        modelAddedFunction(modelObject);
      });
    } else {
      alert("No Data for saving");
    }
  };

  return (
    <Stack spacing={5}>
      <MotionInView variants={varFadeInRight}>
        <Typography variant="h3">Result Summary</Typography>
      </MotionInView>

      {Object.values(resultDataView).length > 0 ? (
        <ResultTable tableData={valueArray} />
      ) : (
        <Typography
          sx={{
            color: (theme) => (theme.palette.mode === "light" ? "text.secondary" : "common.white")
          }}
        >
          Result Wil be displayed here
        </Typography>
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
      {/* <MotionInView variants={varFadeInUp}>
        <DialogAnimate
          open={openUploadModal}
          onClose={() => setOpenUploadModal(false)}
          animate={varBounceIn}
        >
          <Box
            component={motion.div}
            animate={{
              scale: [1.2, 1, 1, 1.2, 1.2],
              rotate: [270, 0, 0, 270, 270],
              opacity: [0.25, 1, 1, 1, 0.25],
              borderRadius: ["25%", "25%", "50%", "50%", "25%"]
            }}
            transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
            sx={{
              width: 100,
              height: 100,
              borderRadius: "25%",
              position: "absolute",
              border: (theme) => `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`
            }}
          />
        </DialogAnimate>
      </MotionInView> */}
    </Stack>
  );
};

export default ResultView;
