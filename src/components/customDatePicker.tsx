import { FormControl } from "@mui/material"
import { DesktopDatePicker, DesktopDatePickerProps, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BaseNonRangeNonStaticPickerProps } from "@mui/x-date-pickers/internals/models/props/basePickerProps";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

interface Props extends BaseNonRangeNonStaticPickerProps, DesktopDatePickerProps<Dayjs> { }

export const CustomDatePicker = (props: Props) => {
    const { label, slotProps, ...propsRest } = props;
    const [cleared, setCleared] = useState<boolean>(false);

    useEffect(() => {
        if (cleared) {
            const timeout = setTimeout(() => {
                setCleared(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
        return () => { };
    }, [cleared]);

    return <FormControl sx={{ m: 1, width: '100%', mt: 3 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker slotProps={{
                field: { clearable: true, onClear: () => setCleared(true) },
            }} label={label} {...propsRest} />
        </LocalizationProvider>
    </FormControl>
}