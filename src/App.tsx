import * as React from 'react';


import ErrorHandler from './components/ErrorHandler/ErrorHandler';
import Loader from './components/Loader/Loader';
import Router from './routes/Router';
import { appStyles } from './app-styles';
import { Box } from '@mui/material';


interface IAppState {
	loading: boolean;
}
interface IAppProps {
	// classes:any
 }
class App extends React.Component<IAppProps, IAppState> {

	constructor(props: IAppProps) {
		super(props);
		this.state = {
			loading: false
		}
	}
	public render() {
		return (
			<Loader isLoading={this.state.loading}>

				<Box sx={appStyles.app} >
				<ErrorHandler>
					<Router/>
				</ErrorHandler>
				</Box>
			</Loader>
		);
	}
}

export default App;