import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { apiRequest } from '../../Actions/TriggerActions';
import Trigger from './Trigger';


class TriggerList extends React.Component {

    componentDidMount() {
        console.log('TriggerList Component DID mount ');
        const { apiRequest } = this.props;
        setTimeout(()=>{apiRequest();}, 500);
    }

    render() {
        const { triggers } = this.props;

        return triggers === undefined ||  triggers.length < 1
        ?
         <div>Loading TriggerList...  </div>
        :
        triggers.map( trigger => (<Trigger key={trigger.id} trigger={trigger} /> ));
    }
}

TriggerList.propTypes = {
    triggers : PropTypes.array.isRequired,
    apiRequest : PropTypes.func.isRequired
};

const mapStateTopProps = state => (
    {
        triggers: state.triggers
    }
);

const mapActionsToProps = {
    apiRequest
};

export default connect(mapStateTopProps, mapActionsToProps)(TriggerList);