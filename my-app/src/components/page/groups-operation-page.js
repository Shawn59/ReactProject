import React from 'react';
import TextField from '@material-ui/core/TextField';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';



const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
            '& input': {
                color: 'white'
            },
        },
        /*'& input': {
            color: 'white'
        },*/
        '& label': {
            color: 'white'
        },
        color: 'white'
    },
})(TextField);

class GroupsOperationPage extends React.Component {
    constructor (props) {
        super();
    }
    render() {
        return (
            <div>
                <h2>Группы всякие </h2>
                <CssTextField  id="custom-css-standard-input" label="Введите название группы" />
            </div>
        );
    }
}

export default GroupsOperationPage;