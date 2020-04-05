import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';

import CounterActions from './counter.actions';
import CounterStyles from './counter.styles';

class Counter extends Component {
    render() {
        return (
            <View>
                <View style={CounterStyles.count}>
                    <Text style={CounterStyles.countValue}>{this.props.value}</Text>
                </View>
                <View>
                    <Button title="Increment" onPress={this.props.increment} />
                    <Button title="Decrement" onPress={this.props.decrement} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { counter } = state;
    return counter;
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(CounterActions.increment()),
        decrement: () => dispatch(CounterActions.decrement()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);
