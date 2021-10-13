import { Button, Grid, TextField } from '@mui/material';
import * as React from 'react';
import TableFilter, { ITableFilterProps } from '../TableFilter';
import { styles } from './styles';

const DateTimeFilter: TableFilter = <TItem,>(props: ITableFilterProps<TItem>) => {
    const [from, setFrom] = React.useState<string>(""); // just for ui
    const [to, setTo] = React.useState<string>(""); // just for ui
    function getResult() {
        console.log("Change Data", to, from);
        let filteredData = [...props.array];
        if (from && from.trim() !== "") {
            filteredData = filteredData.filter(t => props.select(t) >= new Date(from));
        }
        if (to && to.trim() !== "") {
            filteredData = filteredData.filter(t => props.select(t) <= new Date(to));
        }
        return filteredData;
        // props.getFilterResult(filteredData);
    }
    const onDateChange = (src: "to" | "from", value: string) => {
        console.log("On Change", value)
        if (src === "to") {
            setTo(value)
        }
        else if (src === "from") {
            setFrom(value)
        } else {
            return;
        }
    }

    props.getResultFunction(getResult)
    return <div>

        <Grid container spacing={2} alignItems="flex-start">

            <Grid item xs={3}>
                <TextField
                    // className={classes.timeTextField}
                    sx={styles.textField}
                    size="small"
                    id="datetime-local"
                    label="From"
                    type="datetime-local"
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    fullWidth
                    value={from}
                    onChange={(e) => onDateChange("from", e.target.value)}
                />
            </Grid>
            <Grid item xs={3} >
                <TextField
                    fullWidth
                    sx={styles.textField}
                    id="datetime-local"
                    label="To"
                    type="datetime-local"
                    size="small"
                    variant="outlined"
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={to}
                    onChange={(e) => onDateChange("to", e.target.value)}
                />
            </Grid>
            {/* <Grid item xs={3} >
                <Button onClick={()=> changeData()}  variant="outlined">Show</Button>
            </Grid> */}
        </Grid>

    </div>;

};

export default DateTimeFilter;
