import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    
    renderRow = ({item}) => {
        return <ListItem library={item} />
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);
