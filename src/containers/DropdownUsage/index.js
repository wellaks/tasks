import React, { Component } from 'react';

import Dropdown from '../../components/Dropdown';

const mock = ['one', 'two', 'three'];

class DropdownUsage extends Component {
    state = {
        open: false,
    };

    toggle = open => {
        this.setState({
            open,
        });
    };

    stopPropagation = e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    };

    render() {
        return (
            <div onClick={this.stopPropagation}>
                <div>
                    Uncontrolled:{' '}
                    <Dropdown type="uncontrolled" children={mock} />
                </div>
                <hr />
                <div>
                    Controlled:
                    <Dropdown
                        open={this.state.open}
                        controlledToggle={this.toggle}
                        children={mock}
                        type="controlled"
                    />
                </div>
                <hr />
            </div>
        );
    }
}

export default DropdownUsage;
