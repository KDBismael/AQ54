import { FormControl, MenuItem, OutlinedInput, Select, SelectProps } from "@mui/material";

interface Props extends SelectProps {
    placeholder: string
}

export const CustomDropDown = (props: Props) => {
    const { value, displayEmpty, input, placeholder, ...propsRest } = props;
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    return <>
        <FormControl sx={{ m: 1, width: '100%', mt: 3 }}>
            <Select
                // multiple
                displayEmpty
                value={value}
                input={<OutlinedInput />}
                // renderValue={(selected) => {
                //     if (selected.length === 0) {
                //         return <em>Placeholder</em>;
                //     }

                //     return selected.join(', ');
                // }}
                // MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
                {...propsRest}
            >
                <MenuItem disabled value="">
                    <span>{placeholder}</span>
                </MenuItem>
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    // style={getStyles(name, personName, theme)}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </>
}