import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const BeerButton = props => {
    const handleGetData = e => {
        e.preventDafault();
        props.getData();
    };
    return (
        <div>
            {props.isFetchingData ? (
                <div> We are fetching your Beer</div>
            ) : (
                <button onClick = {handleGetData}>Get my Beer List</button>
            )}
        </div>
    );
};
const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(BeerButton);