import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as actions from'../actions'

class ListItem extends Component {
    render() {
        return (
           <View style={{padding:'3%',borderBottomWidth:1,borderBottomColor:'#EFEFEF'}}>
           <Text style={{fontSize:18,}}> {this.props.library.item.title} </Text>
           </View>
        )
    }
}

export default ListItem;