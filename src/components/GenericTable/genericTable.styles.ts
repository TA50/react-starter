import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
	return {
		root: {
			// backgroundColor: "white",
			boxShadow: "none",
			// paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(2)
		},
		table: {
			// width: "99%",
			minWidth: 450,
			boxShadow: "none",
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: theme.palette.grey[500]
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
		csvLink: {
			color: "inherit",
			textDecoration: "none"
		},
		filterActions: { 
			marginBottom: theme.spacing(1) 
		},
		filters:{
				paddingTop: theme.spacing(1)
		}
	};
});
export default useStyles;
