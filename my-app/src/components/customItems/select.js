import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function ControlledOpenSelect(props) {
    const [dataValue, setDataValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const {data} = props;

    function handleChange(event) {
        setDataValue(event.target.value);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(true);
    }

    return (
        <form autoComplete="off">
            <FormControl className='formControl'>
                <InputLabel htmlFor="demo-controlled-open-select">Проект</InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={dataValue}
                    onChange={handleChange}
                    inputProps={{
                        name: 'dataValue',
                        id: 'demo-controlled-open-select',
                    }}
                >
                    <MenuItem value="None">
                        <em>None</em>
                    </MenuItem>

                    {data.map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    );
}