import { connect } from 'react-redux';
import * as React from 'react';
import { Owner, RootState } from '../../core';

interface IOwnerProfilePageProps {
    owner: Owner|null
}

const OwnerProfilePage: React.FunctionComponent<IOwnerProfilePageProps> = (props) => {
  return <div> Owenr Name: 
      
      <h1>   {props.owner ? props.owner.name : "No Owner"}</h1>
      </div>
};
const mapStateToProps = (state: RootState) => {
	return {
		error: state.data.owner,
	};
};
export default connect(mapStateToProps)(OwnerProfilePage);
