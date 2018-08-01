import React, { Component } from "react"
import Spinner from 'react-native-spinkit'
import { StyleSheet, View, Text } from "react-native"

class Loading extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      index: 5,
      types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
      size: 100,
      color: "#56b387",
      isVisible: true
    }
  }

  componentWillMount() {
  }
  
  render() {
    const type = this.state.types[this.state.index]

    return (
      <View style={styles.container}>
        <Spinner isVisible={this.state.isVisible} size={this.state.size} type={type} color={this.state.color}/>
      </View>
    )    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})

export default Loading
