import { useState, useCallback, useEffect } from "react";
// material
import { Button, Typography, Stack, Alert } from "@mui/material";
// ---------------------------------------------------------------------
import { varFadeInUp, MotionInView } from "../../animate";
import { sendDataObjectToApi } from "../../../services/apiServices";
import SearchViewStack from "./searchViewStack";

// ----------------------------------------------------------------------

interface SearchHeaderProps {
  setResultArrayValues: (result: any) => void;
}

const SearchView: React.FC<SearchHeaderProps> = ({ setResultArrayValues }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dataObjectValue, settDataObjectValue] = useState("");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<(File | string)[]>([]);
  const [fileName, setFileName] = useState("");
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [apiFunctionCalled, setAPIFunctionCalled] = useState(false);
  const [responseArray, setResponseArray] = useState([]);

  useEffect(() => {
    if (files.length > 0 && openUploadModal) {
      setOpenUploadModal(false);
    }
  }, [files]);
  const handleDropMultiFile = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file: File) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    [setFiles]
  );

  useEffect(() => {
    if (apiFunctionCalled) {
      ApiFunctionCalled();
    }
  }, [apiFunctionCalled]);

  const ApiFunctionCalled = async () => {
    if (dataObjectValue?.length > 0 && apiFunctionCalled) {
      let modelName;
      selectedIndex === 1
        ? (modelName = "rforest")
        : selectedIndex === 2
        ? (modelName = "naive")
        : selectedIndex === 3
        ? (modelName = "logreg")
        : (modelName = "knn");

      setAPIFunctionCalled(false);
      const predictPayload = await sendDataObjectToApi(dataObjectValue, modelName);
      const predictObject: any = {
        Data: predictPayload.data,
        modelData: dataObjectValue,
        modelNameValue: modelName,
        fileName: fileName != "" ? fileName : "None.csv",
        dataValueString: JSON.stringify(predictPayload.data)
      };
      const arr: any = responseArray;
      arr.push(predictObject);
      setResponseArray(arr);
      setResultArrayValues(Object.values(arr));
      settDataObjectValue("");
    }
  };
  const submitButtonFunction = async () => {
    if (selectedIndex === 0) {
      setError("Please Select a model");
    } else {
      setError("");
      if (dataObjectValue?.length > 0) {
        setAPIFunctionCalled(true);
      } else if (files.length > 0) {
        files.map((file: any) => {
          const fN: any = Object.values(file)[0];
          var reader = new FileReader();
          reader.onload = function (e) {
            var content = reader.result;
            setFileName(fN);
            settDataObjectValue(content as string);
            setAPIFunctionCalled(true);
          };
          reader.readAsText(file as File);
        });
      } else {
        setError("Uplaoding Files or Fill the Text Field");
      }
    }
  };

  const handleRemove = (file: File | string) => {
    const filteredItems = files.filter((_file) => _file !== file);
    setFiles(filteredItems);
  };
  const handleRemoveAll = () => {
    setFiles([]);
  };

  return (
    <Stack spacing={5}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3">Input Data Object</Typography>
      </MotionInView>

      <SearchViewStack
        selectedIndexValue={selectedIndex}
        setSelectedIndexValue={setSelectedIndex}
        dataObjectValue={dataObjectValue}
        setDataObjectValue={settDataObjectValue}
        setOpenUploadModal={setOpenUploadModal}
        openUploadModal={openUploadModal}
        files={files}
        handleDropMultiFile={handleDropMultiFile}
        handleRemove={handleRemove}
        handleRemoveAll={handleRemoveAll}
      />

      <MotionInView variants={varFadeInUp}>
        <Button size="large" variant="contained" onClick={submitButtonFunction}>
          Submit Now
        </Button>
      </MotionInView>

      {error && (
        <Alert
          severity="error"
          action={
            <Button
              color="info"
              size="small"
              variant="outlined"
              onClick={() => {
                setError("");
              }}
            >
              Clear
            </Button>
          }
        >
          {error}
        </Alert>
      )}
    </Stack>
  );
};

export default SearchView;
