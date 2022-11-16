import { useState } from "react";
// material
import {
  Button,
  Typography,
  TextField,
  Stack,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Alert
} from "@mui/material";
//
import { varFadeInUp, MotionInView } from "../../animate";

import { sendDataObjectToApi } from "../../../services/apiServices";

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

const SearchView: React.FC<SearchHeaderProps> = ({
  setResultString,
  setResultData,
  setModelNameValue,
  setModelData
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpenList, setOpenList] = useState<null | HTMLElement>(null);
  const [isOpen, setOpen] = useState<null | HTMLElement>(null);
  const [dataObjectValue, settDataObjectValue] = useState("");
  const [error, setError] = useState("");
  const handleClose = () => {
    setOpen(null);
  };
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setOpenList(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setOpenList(null);
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
        const predictPayload = await sendDataObjectToApi(dataObjectValue, modelName);
        setModelNameValue(modelName);
        setModelData(dataObjectValue);
        setResultString(JSON.stringify(predictPayload.data));
        setResultData(predictPayload.data);
      }
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    settDataObjectValue(event.target.value);
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
        {/* <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Note" />
        </MotionInView> */}

        <MotionInView variants={varFadeInUp}>
          <TextField
            fullWidth
            label="Paster your object here"
            multiline
            rows={8}
            onChange={handleOnChange}
          />
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
