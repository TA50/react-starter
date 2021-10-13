import { CircularProgress } from "@mui/material";
import { Container } from "@mui/material";
import * as React from "react";

interface ILoaderProps {
	isLoading: boolean;
}

const Loader: React.FunctionComponent<ILoaderProps> = (props) => {
	if (!props.isLoading) {
		return <>{props.children}</>;
	} else {
		return (
			<Container sx={{
				textAlign: "center",
				mt: 4
			}}>
				<CircularProgress />
			</Container>
		);
	}
};

export default Loader;
