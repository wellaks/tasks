import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CityPicker from '../CityPicker';
import {
    selectCity,
    selectError,
    selectLoadingStatus,
    selectMain,
} from '../../bus/weather/selectors';

const WeatherWidget = props => {
    const { error, main, city, isLoading } = props;

    return (
        <div>
            <CityPicker />
            {city && main.temp && <p>{`${main.temp}C degrees in ${city}`}</p>}
            {error && <p>{`${error}`}</p>}
            {isLoading && <p>{'Is loading'}</p>}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    city: selectCity(),
    error: selectError(),
    main: selectMain(),
    isLoading: selectLoadingStatus(),
});

WeatherWidget.propTypes = {
    city: PropTypes.string,
    error: PropTypes.string,
    main: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default connect(mapStateToProps)(WeatherWidget);
