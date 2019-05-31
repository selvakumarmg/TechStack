import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Header extends Component {
  render() {
    return (
     <View style={styles.headerStyle}>
     <Text style={styles.titleStyle}>{this.props.titleText}</Text>
     </View>
    )
  }
}

export default Header;

const styles = StyleSheet.create({
    headerStyle:{
        backgroundColor:'#2089F6',
        alignItems:'center',
        justifyContent:'center',
        height:hp('8%'),
        elevation:4,
       
    },
    titleStyle:{
        fontSize:20,
        color:'#FFFFFF',
        fontWeight: 'bold',
    }
})