import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { weatherActions } from '../../bus/weather/actions';

class CityPicker extends Component {
    state = {
        city: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        const { getWeather } = this.props;
        const { city } = this.state;

        getWeather(city);
    };

    render() {
        const { city } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search-city">Type city</label>
                <input
                    type="search"
                    id="search-city"
                    onChange={e => this.setState({ city: e.target.value })}
                />
                <button disabled={!city}>Check wheather</button>
            </form>
        );
    }
}

CityPicker.propTypes = {
    getWeather: PropTypes.func,
};

const mapDispatchToProps = {
    getWeather: weatherActions.getWeather,
};

export default connect(
    undefined,
    mapDispatchToProps,
)(CityPicker);
