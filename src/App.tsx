import * as React from 'react';


import ErrorHandler from './components/ErrorHandler/ErrorHandler';
import Loader from './components/Loader/Loader';
import Router from './routes/Router';
import { withStyles } from '@material-ui/core';
import { appStyles } from './app-styles';


interface IAppState {
	loading: boolean;
}
interface IAppProps {
	classes:any
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

				<div className={this.props.classes.app} >
				<ErrorHandler>
					<Router/>
				</ErrorHandler>
				</div>
			</Loader>
		);
	}
}

export default withStyles(appStyles)(App);