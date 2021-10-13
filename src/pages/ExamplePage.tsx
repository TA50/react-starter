import * as React from 'react';
import { Container } from '@mui/material';
import { RootState } from '../core';
import { connect } from 'react-redux';


interface IExamplePageProps {

}

const ExamplePage: React.FunctionComponent<IExamplePageProps> = (props) => {


    return <Container>
        Example Page

    </Container>
};

const mapStateToProps = (state: RootState) => {

};
export default connect(mapStateToProps)(ExamplePage);
