import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
	return {
		root: {
			backgroundColor: "white",
		},
		table: {
			// width: "99%",
			minWidth: 450,
			// "& td,& th": {

			// 	border: "1px solid rgba(224, 224, 224, 1)",
			// 	"&:last-child:not(th)": {
			// 		borderRight: 'none',
			// 	},
			// 	"&:first-child": {
			// 		borderLeft: 'none',
			// 	}

			// }
		},
	};
});
export default useStyles;
