import Box from '@material-ui/core/Box'
import Container from "@material-ui/core/Container"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"
import Search from '@material-ui/icons/Search';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { TextareaAutosize, Button } from '@material-ui/core';

export interface SearchHeaderProps {
    text: string
    setText: (val: SearchHeaderProps['text']) => void
}
export const ResultView: React.FC<SearchHeaderProps> = ({ text, setText }) => {
    return <Container maxWidth="lg">
        <Box p="40px 8px" display="flex" flexDirection="column" alignItems="center">
                                            <Box m="16px 0 40px"  component="h3" lineHeight="1.5"  style={{height:'75%'}} >Result Summary</Box>

                <Box style={{ minHeight: '400px', borderRadius: '4px', padding: "2px 5px", marginBottom:4, border: "1px solid lightgray", width: '100%', alignItems:'center', justifyContent:'center' }}>
                                <Box m="16px 0 40px"  component="h3" lineHeight="1.5"  style={{height:'75%'}} >Result Summary</Box>

                    Result Wil be displayed here
                </Box>

                <Button
                    variant="outlined" color="primary" style={{display:'flex', justifyContent:'flex-end', alighSelf:'flex-end'}} >Save
                </Button>
            </Box>
    </Container >
}