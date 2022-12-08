import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import iconUpload from "@iconify/icons-ic/file-upload";

// material
import { Typography, Stack } from "@mui/material";
import { varFadeInRight, MotionInView } from "../../animate";
// utils
import { fPercent, fNumber } from "../../../utils/formatNumber";
import useModelAdded from "../../../hooks/useMetaData";
import ResultTable from "./ResultTable";
import { LoadingButton } from "@mui/lab";

// ----------------------------------------------------------------------

const LABEL = ["Development", "Design", "Marketing"];

export interface SearchHeaderProps {
  resultDataView: any;
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
  const { modelAddedFunction, setIsDataAdded, isDataAdded } = useModelAdded();
  const [valueArray, setValueArray] = useState<Array<Object>>([]);
  const [upload, setUpload] = useState(false);

  let objValue = {};
  let RESULT_TABLE: any;

  useEffect(() => {
    if (isDataAdded) {
      setUpload(false);
      setIsDataAdded(false);
    }
  }, [isDataAdded]);

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
      setUpload(true);
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
        <LoadingButton
          loading={upload}
          loadingPosition="start"
          size="large"
          variant="contained"
          onClick={saveButtonFunction}
          endIcon={<Icon icon={iconUpload} width={24} height={24} />}
        >
          Save
        </LoadingButton>
      </MotionInView>
    </Stack>
  );
};

export default ResultView;
