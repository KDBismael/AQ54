import { FormControl, MenuItem, OutlinedInput, Select, SelectProps } from "@mui/material";

interface Props extends SelectProps<string> {
    placeholder: string;
    options: string[];
}

export const CustomDropDown = (props: Props) => {
    const { options, value, displayEmpty, input, placeholder, ...propsRest } = props;

    return <>
        <FormControl sx={{ m: 1, width: '100%', mt: 2 }}>
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
                {options.map((opt) => (
                    <MenuItem
                        key={opt}
                        value={opt}
                    // style={getStyles(name, personName, theme)}
                    >
                        {opt}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </>
}