/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Hello', () => Hello);
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var BoxStyles=StyleSheet.create({
    "height50":{
        height:50,
    },
    "height400":{
        height:400,
    },
    "width400":{
        width:400,
    },
    "bgred":{
        backgroundColor:"#6AC5AC",
    },
    "box":{
        flexDirection:"column",
        flex:1,
        position:"relative",
    },
    "label":{
        top:0,
        left:0,
        paddingTop:0,
        paddingRight:3,
        paddingBottom:3,
        paddingLeft:0,
        position:"absolute",
        backgroundColor:"#FDC72F",
    },
    "top":{
        justifyContent:"center",
        alignItems:"center",
    },
    "bottom":{
        justifyContent:"center",
        alignItems:"center",
    },
    "right":{
        width:50,
        justifyContent:"space-around",
        alignItems:"center",
    },
    "left":{
        width:50,
        justifyContent:"space-around",
        alignItems:"center",
    },
  "yellow":{
        color:"#FDC72F",
        fontWeight:"900",

    },
    "white":{
        color:"white",
        fontWeight:"900",
    },
    "margginBox":{
        "position":"absolute",
        "top":100,
        "paddingLeft":7,
        "paddingRight":7,
    },
    "borderBox":{
        flex:1,
        justifyContent:"space-between",
        flexDirection:"row",
    }

})
var BoxContainer=React.createClass({
    render:function(){
        return(
            <View style={[BoxStyles.margginBox]} ref="lab1">
            <View style={[BoxStyles.box,BoxStyles.height400,BoxStyles.width400]}>
            <View style={[BoxStyles.top,BoxStyles.height50,BoxStyles.bgred]}>
            <Text style={BoxStyles.yellow}>top</Text>
            </View>
            <View style={[BoxStyles.borderBox]}>
            <View style={[BoxStyles.left,BoxStyles.bgred]}>
            <Text style={BoxStyles.yellow}>left</Text>
            </View>
            <View style={[BoxStyles.right,BoxStyles.bgred]}>
            <Text style={BoxStyles.yellow}>right</Text>
            </View>
            </View>
            <View style={[BoxStyles.bottom,BoxStyles.height50,BoxStyles.bgred]}>
            <Text style={[BoxStyles.yellow]}>bottom</Text>
            </View>
            <View style={[BoxStyles.label]}>
            <Text style={BoxStyles.white}>margin</Text>
            </View>
            </View>
            </View>
        )
    }
})
/**var Box=React.createClass({
  render:function(){
    return(
      <View style={[BoxStyles.box,BoxStyles[this.props.width],
        BoxStyles[this.props.height]]}>
        <View style={[BoxStyles.top,BoxStyles.height50,BoxStyles[this.props.classBg]]}>
        <Text>top</Text></View>
        <View style={[BoxStyles[this.props.childName]]}>
        <View style={[BoxStyles.left,BoxStyles[this.props.classBg]]}>
        <Text>left</Text></View>
        {this.props.children}
        <View style={[BoxStyles.right,BoxStyles[this.props.classBg]]}>
        <Text>right</Text></View>
        </View>
        <View style={[BoxStyles.bottom,BoxStyles.height50,
          BoxStyles[this.props.classBg]]}><Text>bottom</Text></View>
          <View style={[BoxStyles.label]}><Text>{this.props.boxName}</Text></View>
          </View>
    
    )
  }
})
var MargginBox=React.createClass({
  render:function(){
    return(
      <View style={[BoxStyles.margginBox]}>
      <Box childName="borderBox" height="height400" width="width400" boxName="margin" classBg="bgred">
      {ghis.props.children}</Box>
      </View>
    )
  }
})
var BoxXontainer=React.createClass({
  render:function(){
    return(
      <MargginBox>
      </MargginBox>
    )
  }
})*/
AppRegistry.registerComponent('Hello',()=>BoxContainer);