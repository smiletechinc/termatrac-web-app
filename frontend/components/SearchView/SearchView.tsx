import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { TextareaAutosize, Button } from "@material-ui/core";
import { sendDataObjectToApi } from "../../services/apiServices";

export interface SearchHeaderProps {
  text: string;
  setText: (val: SearchHeaderProps["text"]) => void;
  setResultString: any;
  setResultData: any;
}
export const SearchView: React.FC<SearchHeaderProps> = ({
  text,
  setText,
  setResultString,
  setResultData,
}) => {
  const [dataObjectValue, settDataObjectValue] = React.useState({});
  const submitButtonFunction = async () => {
    if (Object.values(dataObjectValue).length > 0) {
      const predictPayload = await sendDataObjectToApi(dataObjectValue);
      setResultString(JSON.stringify(predictPayload.data));
    }
  };
  const handleOnChange = (event) => {
    if (event.target.value != "") {
      console.log("Click");
      console.log(event.target.value);
      settDataObjectValue(event.target.value);
    }
  };
  return (
    <Container maxWidth="lg">
      <Box
        p="40px 8px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box m="16px 0 40px" component="h3" lineHeight="1.5">
          Data Object
        </Box>

        <TextareaAutosize
          aria-label="Input JSON Object"
          minRows={24}
          placeholder="Inut data object"
          style={{
            borderRadius: "4px",
            padding: "2px 5px",
            border: "1px solid lightgray",
            width: "100%",
          }}
          onChange={handleOnChange}
        />
        <Button
          value={text}
          variant="outlined"
          color="primary"
          onClick={submitButtonFunction}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};
