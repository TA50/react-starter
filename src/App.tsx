import { ChildCare } from '@material-ui/icons';
import * as React from 'react';


import ErrorHandler from './components/ErrorHandler/ErrorHandler';
import Loader from './components/Loader/Loader';
import { OwnerApi } from './core/API/OwnerApi/OwnerApi';
import { container, ServiceName } from './core/services';
import ILogger from './core/services/Logger/ILogger';
import Router from './routes/Router';


interface IAppState {
	loading: boolean;
}
interface IAppProps { }
export default class App extends React.Component<IAppProps, IAppState> {

	constructor(props: IAppProps) {
		super(props);
		this.state = {
			loading: true
		}
	}
	private _ownerApi = container.get<OwnerApi>(ServiceName.OwnerApi);
	private _logger = container.get<ILogger>(ServiceName.Logger);
	componentDidMount() {
		this.setState({ loading: true })
		this._ownerApi.getMany();
		this._ownerApi.getSingle('kido-own-11077489').then(owner => {
			console.log(owner);
			this.setState({ loading: false })
		}).catch(err => {
			this.setState({ loading: false })
			this._logger.showInfo(err)
		})
	}
	public render() {
		return (
			<Loader isLoading={this.state.loading}>

				<div className="App">
				<ErrorHandler>
					<Router/>
				</ErrorHandler>
				</div>
			</Loader>
		);
	}
}
