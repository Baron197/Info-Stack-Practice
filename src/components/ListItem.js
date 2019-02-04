import React, { Component } from 'react';
import { 
    Text, 
    View,
    TouchableWithoutFeedback,
    Platform,
    UIManager,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { selectLibrary } from '../actions';
import { CardSection } from './common';

class ListItem extends Component {

    componentWillUpdate() {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
          }
          
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { expanded, library } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { title, id } = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
}

export default connect(mapStateToProps, { selectLibrary })(ListItem);
