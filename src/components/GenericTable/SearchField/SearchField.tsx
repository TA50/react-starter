import * as React from "react";
import { useState } from "react";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./search-styles";
import CloseIcon from "@material-ui/icons/Close";

interface ISearchFieldProps<TItem> {
	array: TItem[];
	searchFunction: (item: TItem, text: string) => boolean;
	searchResultChanged: (items: TItem[]) => void;
}

const SearchField = <TItem,>(
	props: React.PropsWithChildren<ISearchFieldProps<TItem>>
) => {
	const classes = useStyles();
	const [text, setText] = useState<string>("");
	const changeText = (value: string) => {
		const result = props.array.filter((item: TItem) => {
			return props.searchFunction(item, value);
		});
		props.searchResultChanged(result);
		setText(value);
	};
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
				/>

				<IconButton onClick={() => changeText("")}>
					<CloseIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default SearchField;
