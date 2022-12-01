import { useState, useCallback, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import fileFill from "@iconify/icons-eva/file-fill";
import closeFill from "@iconify/icons-eva/close-fill";
import { isString } from "lodash";

// material
import {
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  Button,
  ListItemButton,
  ListItemText
} from "@mui/material";
//
import { varFadeInRight } from "../animate";
import { fData } from "../../utils/formatNumber";
import { MIconButton } from "../@material-extend";
// ----------------------------------------------------------------------

interface SearchHeaderProps {
  onRemove: (file: File | string) => void;
  onRemoveAll: VoidFunction;
  files: (File | string)[];
}

interface CustomFile extends File {
  path?: string;
  preview?: string;
}
const UploadListItem: React.FC<SearchHeaderProps> = ({ onRemove, onRemoveAll, files }) => {
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const hasFile = files.length > 0;
  useEffect(() => {
    if (files.length > 0 && openUploadModal) {
      setOpenUploadModal(false);
    }
  }, [files]);

  const getFileData = (file: CustomFile | string) => {
    if (typeof file === "string") {
      return {
        key: file
      };
    }
    return {
      key: file.name,
      name: file.name,
      size: file.size,
      preview: file.preview
    };
  };
  return (
    <Stack spacing={3}>
      {/* <Stack spacing={3}> */}
      <List disablePadding sx={{ ...(files.length > 0 && { my: 3 }) }}>
        <AnimatePresence>
          {files.map((file) => {
            const { key, name, size, preview } = getFileData(file as CustomFile);
            return (
              <ListItem
                key={key}
                component={motion.div}
                {...varFadeInRight}
                sx={{
                  my: 1,
                  py: 0.75,
                  px: 2,
                  borderRadius: 1,
                  border: (theme) => `solid 1px ${theme.palette.divider}`,
                  bgcolor: "background.paper"
                }}
              >
                <ListItemIcon>
                  <Icon icon={fileFill} width={28} height={28} />
                </ListItemIcon>
                <ListItemText
                  primary={isString(file) ? file : name}
                  secondary={isString(file) ? "" : fData(size || 0)}
                  primaryTypographyProps={{ variant: "subtitle2" }}
                  secondaryTypographyProps={{ variant: "caption" }}
                />
                <ListItemSecondaryAction>
                  <MIconButton edge="end" size="small" onClick={() => onRemove(file)}>
                    <Icon icon={closeFill} />
                  </MIconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </AnimatePresence>
      </List>
      {hasFile && (
        <Stack direction="row" justifyContent="flex-end">
          <Button onClick={onRemoveAll} sx={{ mr: 1.5 }}>
            Remove all
          </Button>
          {/* <Button variant="contained">Proceed</Button> */}
        </Stack>
      )}
    </Stack>
    // </Stack>
  );
};

export default UploadListItem;
