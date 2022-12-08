import { useEffect, useState } from "react";

// material
import {
  Button,
  TextField,
  CardContent,
  Stack,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem
} from "@mui/material";
import { varFadeInUp, varBounceIn, MotionInView, DialogAnimate } from "../../animate";
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
export interface SearchHeaderProps {
  selectedIndexValue: number;
  setSelectedIndexValue: any;
  dataObjectValue: any;
  setDataObjectValue: any;
  setOpenUploadModal: any;
  openUploadModal: boolean;
  files: (File | string)[];
  handleDropMultiFile: any;
  handleRemove: any;
  handleRemoveAll: any;
}
const SearchViewStack: React.FC<SearchHeaderProps> = ({
  selectedIndexValue,
  setSelectedIndexValue,
  dataObjectValue,
  setDataObjectValue,
  setOpenUploadModal,
  openUploadModal,
  files,
  handleDropMultiFile,
  handleRemove,
  handleRemoveAll
}) => {
  const [isOpenList, setOpenList] = useState<null | HTMLElement>(null);
  const [preview, setPreview] = useState(false);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setOpenList(event.currentTarget);
  };
  const handleClose = () => {
    setOpenList(null);
  };
  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndexValue(index);
    setOpenList(null);
  };
  return (
    <Stack spacing={3}>
      <List component="nav" aria-label="Device settings">
        <ListItemButton
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Select ML Model"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Select Model" secondary={OPTIONS[selectedIndexValue]} />
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
            selected={index === selectedIndexValue}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      <MotionInView variants={varFadeInUp}>
        <TextField
          fullWidth
          label="Paste your object here"
          value={dataObjectValue}
          multiline
          rows={8}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDataObjectValue(event.target.value)
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
        <UploadListItem
          files={files}
          onRemove={handleRemove}
          onRemoveAll={() => handleRemoveAll()}
        />
      </MotionInView>
    </Stack>
  );
};

export default SearchViewStack;
