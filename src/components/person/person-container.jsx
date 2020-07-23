import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import withService from '../hoc/with-service';
import getAllPeopleAction from '../../actions/getAllPeople.actions';
import {compose} from '../../utils';
import Person from './person-view';
import {Spin} from "antd";

class PersonContainer extends Component {

    static propTypes = {
        getAllPeople: PropTypes.func,
        allPeople: PropTypes.arrayOf(PropTypes.object),
        loading: PropTypes.bool,
        error: PropTypes.bool,
    };

    static defaultProps = {
        getAllPeople: () => {
        },
        allPeople: [],
        loading: false,
        error: false,
    };

    componentDidMount() {
        const {getAllPeople} = this.props;
        getAllPeople();
    }

    render() {
        const {allPeople, loading, error} = this.props;

        const hasData = !(loading || error);

        const errorMessage = error ? <p>Error  </p> : null;
        const spinner = loading ? <p>Loading... <Spin size="large"/></p> : null;
        const content = hasData ? (
            <Person
                allPeople={allPeople}
            />
        ) : null;

        return (
            <Fragment>
                {errorMessage}
                {spinner}
                {content}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    const {
        getAllPeople: {data: allPeople, loading, error},
    } = state;

    return {
        allPeople,
        loading,
        error,
    };
};

const mapDispatchToProps = (dispatch, {service}) => bindActionCreators(
    {
        getAllPeople: getAllPeopleAction(service),
    },
    dispatch,
);

export default compose(
    withService(),
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(PersonContainer);
