import * as React from "react";
import { useState } from "react";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./search-styles";
import CloseIcon from "@material-ui/icons/Close";
import { ITableFilterProps, TableFilter } from "../TableFilter";


let searchText = "";
const SearchField: TableFilter = <TItem,>(props: ITableFilterProps<TItem>) => {
	const classes = useStyles();
	const [text, setText] = useState<string>(""); // just for ui
	const changeText = (value: string) => {
		setText(value);
		searchText = value;
	};
	
	const searchResult = () => {
		// console.log("Search Text ", inputRef.current?.value || "");
		const result = props.array.filter((item: TItem) => {
			const str = props.select(item).toLowerCase();
			return str.includes(searchText.toLowerCase());
		});
		return result;
	}
	props.getResultFunction(searchResult)
	
	const searchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const capturedText = event.target.value;
		changeText(capturedText);
	};

	return (
		<div className={classes.root}>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>

				<InputBase
					placeholder="Search…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					onInput={searchInputChange}
					value={text}
					inputProps={{ "aria-label": "search" }}
					onChange={ (e) => changeText(e.target.value)}
				/>

				<IconButton onClick={() => changeText("")}>
					<CloseIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default SearchField;
