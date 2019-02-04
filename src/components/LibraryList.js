import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    renderListKataGaul = () => {
        var listJSX = this.props.kataGaul.map((item) => {
            return (
                <Text>{item}</Text>
            );
        });

        return listJSX;
    }

    render() {
        return (
            <View>
                <Text>Inilah kata2 anak gaul : </Text>
                {this.renderListKataGaul()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { kataGaul: state.kucing }
}

export default connect(mapStateToProps)(LibraryList);
