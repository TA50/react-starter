import * as React from 'react';
import { Container } from '@material-ui/core';
import { container, OwnerApi, ServiceName, RootState, Owner } from '../core';
import { connect } from 'react-redux';


interface IExamplePageProps {
    owner: Owner | null;
}

const ExamplePage: React.FunctionComponent<IExamplePageProps> = (props) => {
    
    const ownerApi = container.get<OwnerApi>(ServiceName.OwnerApi);
   
    return <Container>
        Example Page
      
    </Container>
};

const mapStateToProps = (state: RootState) => {
	return {
		error: state.data.owner,
	};
};
export default connect(mapStateToProps)(ExamplePage);
