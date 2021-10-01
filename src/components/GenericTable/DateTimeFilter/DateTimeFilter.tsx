import { Button, Grid, TextField } from '@material-ui/core';
import * as React from 'react';
import { dateTimeFilterStyles } from './styles';

interface IDateTimeFilter<TItem> {
    array: TItem[];
    selectDate: (item: TItem) => Date;
    getFilterResult: (items: TItem[]) => void;
}

const DateTimeFilter = <TItem,>(props: React.PropsWithChildren<IDateTimeFilter<TItem>>) => {
    const classes = dateTimeFilterStyles();
    const [from, setFrom] = React.useState<string>("");
    const [to, setTo] = React.useState<string>("");
    function changeData() {
        console.log("Change Data", to, from);
        let filteredData = [...props.array];
        if (from && from.trim() !== "") {
            filteredData = filteredData.filter(t => props.selectDate(t) >= new Date(from));
        }
        if (to && to.trim() !== "") {
            filteredData = filteredData.filter(t =>  props.selectDate(t) <= new Date(to));
        }
        props.getFilterResult(filteredData);
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
    return <div>

        <Grid container spacing={2} className={classes.root}>

            <Grid item xs={3}>
                <TextField
                    className={classes.timeTextField}
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
                    className={classes.timeTextField}
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
            <Grid item xs={3} >
                <Button onClick={()=> changeData()}  variant="outlined">Show</Button>
            </Grid>
        </Grid>

    </div>;

};

export default DateTimeFilter;
