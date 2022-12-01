import { useState, useCallback, useEffect } from "react";
// material
import {
  Button,
  Typography,
  TextField,
  CardContent,
  Stack,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Alert
} from "@mui/material";
//
import { varFadeInUp, varBounceIn, MotionInView, DialogAnimate } from "../../animate";
import { sendDataObjectToApi } from "../../../services/apiServices";
import { UploadFiles } from "components/upload";
import UploadListItem from "components/uploadListItem/UploadListItem";
// ----------------------------------------------------------------------

const OPTIONS = [
  "Please Select modal",
  "Random Forest",
  "Naive Bayes",
  "Logistic Regression",
  "K-Nearest Neighbor"
];

interface SearchHeaderProps {
  setResultString: (result: string) => void;
  setResultData: (result: Object) => void;
  setModelNameValue: (result: string) => void;
  setModelData: (result: Object) => void;
}
interface CustomFile extends File {
  path?: string;
  preview?: string;
}
const SearchView: React.FC<SearchHeaderProps> = ({
  setResultString,
  setResultData,
  setModelNameValue,
  setModelData
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpenList, setOpenList] = useState<null | HTMLElement>(null);
  const [dataObjectValue, settDataObjectValue] = useState("");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<(File | string)[]>([]);
  const [preview, setPreview] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [apiFunctionCalled, setAPIFunctionCalled] = useState(false);

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

  const handleClose = () => {
    setOpenList(null);
  };
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setOpenList(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setOpenList(null);
  };

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
      setModelNameValue(modelName);
      setModelData(dataObjectValue);
      setResultString(JSON.stringify(predictPayload.data));
      setResultData(predictPayload.data);
    }
  };
  const submitButtonFunction = async () => {
    if (selectedIndex === 0) {
      setError("Please Select a model");
    } else {
      setError("");
      let modelName;
      selectedIndex === 1
        ? (modelName = "rforest")
        : selectedIndex === 2
        ? (modelName = "naive")
        : selectedIndex === 3
        ? (modelName = "logreg")
        : (modelName = "knn");
      if (dataObjectValue?.length > 0) {
        setAPIFunctionCalled(true);
      } else if (files.length > 0) {
        const file = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
          var content = reader.result;
          console.log("tupe", typeof content);
          settDataObjectValue(content as string);
          setAPIFunctionCalled(true);
        };
        reader.readAsText(file as File);
      }
    }
  };

  const handleRemove = (file: File | string) => {
    const filteredItems = files.filter((_file) => _file !== file);
    setFiles(filteredItems);
  };

  return (
    <Stack spacing={5}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3">Input Data Object</Typography>
      </MotionInView>

      <Stack spacing={3}>
        <List component="nav" aria-label="Device settings">
          <ListItemButton
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Select ML Model"
            onClick={handleClickListItem}
          >
            <ListItemText primary="Select Model" secondary={OPTIONS[selectedIndex]} />
          </ListItemButton>
        </List>
        <Menu
          keepMounted
          id="lock-menu"
          anchorEl={isOpenList}
          onClose={handleClose}
          open={Boolean(isOpenList)}
        >
          {OPTIONS.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <MotionInView variants={varFadeInUp}>
          <TextField
            fullWidth
            label="Paster your object here"
            value={dataObjectValue}
            multiline
            rows={8}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              settDataObjectValue(event.target.value)
            }
          />
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Button
            sx={{ marginLeft: "70%", marginTop: -4 }}
            variant="contained"
            onClick={() => setOpenUploadModal(true)}
          >
            Read .csv file
          </Button>
          <DialogAnimate
            open={openUploadModal}
            onClose={() => setOpenUploadModal(false)}
            animate={varBounceIn}
          >
            <CardContent>
              <UploadFiles
                accept=".csv"
                showPreview={preview}
                files={files}
                onDrop={handleDropMultiFile}
              />
            </CardContent>
          </DialogAnimate>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <UploadListItem files={files} onRemove={handleRemove} onRemoveAll={() => setFiles([])} />
        </MotionInView>
      </Stack>

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
