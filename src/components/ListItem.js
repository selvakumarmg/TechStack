import React, { Component } from 'react'
import { Text, View, LayoutAnimation, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
// import {SelectLibrary} from'../actions' 

class ListItem extends Component {


    componentWillUpdate(){
        LayoutAnimation.spring()
    }

    renderDescription() {
        if (this.props.library.item.id === this.props.selectedLibraryId) {

            return (<Text style={{ padding: '1%' }}>{this.props.library.item.description}</Text>)
        }
    }

    render() {
        console.log(this.props)

        const { id, title } = this.props.library.item

        return (
            <TouchableWithoutFeedback
                onPress={() => {

                    this.props.SelectLibrary(id)
                }
                }>
                <View style={{ padding: '3%', borderBottomWidth: 1, borderBottomColor: '#EFEFEF', }}>
                    <Text style={{ fontSize: 18, }}> {title} </Text>
                    <View>
                    {this.renderDescription()}
                    </View>
                </View>
               
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);