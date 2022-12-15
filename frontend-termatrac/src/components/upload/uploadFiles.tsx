import { isString } from "lodash";
import { Icon } from "@iconify/react";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import fileFill from "@iconify/icons-eva/file-fill";
import closeFill from "@iconify/icons-eva/close-fill";
import { motion, AnimatePresence } from "framer-motion";
// material
import { alpha, Theme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Stack,
  Paper,
  Button,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from "@mui/material";
import { SxProps } from "@mui/system";
// utils
import { fData } from "../../utils/formatNumber";
//
import { MIconButton } from "../@material-extend";
import { varFadeInRight } from "../animate";
import { UploadIllustration } from "../../assets";

// ----------------------------------------------------------------------

const DropZoneStyle = styled("div")(({ theme }) => ({
  outline: "none",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  "&:hover": { opacity: 0.72, cursor: "pointer" },
  [theme.breakpoints.up("md")]: { textAlign: "left", flexDirection: "row" }
}));

// ----------------------------------------------------------------------

interface CustomFile extends File {
  path?: string;
  preview?: string;
}

interface UploadMultiFileProps extends DropzoneOptions {
  error?: boolean;
  files: (File | string)[];
  showPreview: boolean;
  sx?: SxProps<Theme>;
}

export default function UploadFiles({
  error,
  showPreview = false,
  files,
  sx,
  ...other
}: UploadMultiFileProps) {
  const hasFile = files.length > 0;

  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    ...other
  });

  const ShowRejectionItems = () => (
    <Paper
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        mt: 3,
        borderColor: "error.light",
        bgcolor: (theme) => alpha(theme.palette.error.main, 0.08)
      }}
    >
      {fileRejections.map(({ file, errors }) => {
        const { path, size }: CustomFile = file;
        return (
          <Box key={path} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {path} - {fData(size)}
            </Typography>
            {errors.map((e) => (
              <Typography key={e.code} variant="caption" component="p">
                - {e.message}
              </Typography>
            ))}
          </Box>
        );
      })}
    </Paper>
  );

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: "error.main",
            borderColor: "error.light",
            bgcolor: "error.lighter"
          })
        }}
      >
        <input {...getInputProps()} />

        <UploadIllustration sx={{ width: 220 }} />

        <Box sx={{ p: 3, ml: { md: 2 } }}>
          <Typography gutterBottom variant="h5">
            Drop or Select file
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Drop files here or click&nbsp;
            <Typography
              variant="body2"
              component="span"
              sx={{ color: "primary.main", textDecoration: "underline" }}
            >
              browse
            </Typography>
            &nbsp;thorough your device
          </Typography>
        </Box>
      </DropZoneStyle>

      {fileRejections.length > 0 && <ShowRejectionItems />}
    </Box>
  );
}
