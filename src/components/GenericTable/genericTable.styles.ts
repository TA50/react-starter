// import {Theme } from "@mui/material/styles"
import { SxStyles } from "../../core";
import { makeStyles } from "@mui/material/styles";
export const genericTableStyles : SxStyles = {
	root: {
		boxShadow: "none",
		pb: 2
	},
	table: {
		minWidth: "450px",
		boxShadow: "none",
		border: 1,
		borderColor: "grey[500]", 
		csvLink: {
			color: "inherit",
			textDecoration: "none"
		},
		filterActions: { 
			marginBottom:1
		},
		filters:{
				paddingTop: 1
		}
	}
}
// const useStyles = makeStyles((theme: Theme) => {
// 	return {
// 		root: {
// 			// backgroundColor: "white",
// 			boxShadow: "none",
// 			// paddingTop: theme.spacing(1),
// 			paddingBottom: theme.spacing(2)
// 		},
// 		table: {
// 			// width: "99%",
// 			minWidth: 450,
// 			boxShadow: "none",
// 			borderWidth: "1px",
// 			borderStyle: "solid",
// 			borderColor: theme.palette.grey[500]
// 			// "& td,& th": {

// 			// 	border: "1px solid rgba(224, 224, 224, 1)",
// 			// 	"&:last-child:not(th)": {
// 			// 		borderRight: 'none',
// 			// 	},
// 			// 	"&:first-child": {
// 			// 		borderLeft: 'none',
// 			// 	}

// 			// }
// 		},
// 		csvLink: {
// 			color: "inherit",
// 			textDecoration: "none"
// 		},
// 		filterActions: { 
// 			marginBottom: theme.spacing(1) 
// 		},
// 		filters:{
// 				paddingTop: theme.spacing(1)
// 		}
// 	};
// });
// export default useStyles;
