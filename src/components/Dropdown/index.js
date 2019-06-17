import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
    state = {
        open: this.props.open || false,
    };

    componentDidMount() {
        document.addEventListener('click', this.closeDropDown);
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        if (
            nextProps.hasOwnProperty('open') &&
            nextProps.open !== currentState.open
        ) {
            return {
                open: nextProps.open,
            };
        }
        return null;
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeDropDown);
    }

    toggle = () => {
        const { controlledToggle } = this.props;
        const { open: openInState } = this.state;
        if (!this.props.hasOwnProperty('open')) {
            this.setState(() => ({
                open: !openInState,
            }));
        }
        controlledToggle && controlledToggle(!openInState);
    };

    closeDropDown = () => {
        const { controlledToggle } = this.props;

        if (!this.props.hasOwnProperty('open')) {
            this.setState(() => ({
                open: false,
            }));
        }
        controlledToggle && controlledToggle(false);
    };

    render() {
        const { open } = this.state;
        const { children, type } = this.props;

        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>

                {open && (
                    <ul>
                        {children.map(el => (
                            <li key={`${el}${type}`}>{el}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

Dropdown.propTypes = {
    children: PropTypes.array.isRequired,
    open: PropTypes.bool,
    type: PropTypes.string,
};

export default Dropdown;
