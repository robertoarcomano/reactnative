import React, { Component, useRef } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, Modal, Pressable } from "react-native";
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import ProgressCircle from 'react-native-progress-circle'

const progressCircle =
	(perc,bgColor) =>
		<ProgressCircle
		  percent={perc}
		  radius={50}
		  borderWidth={8}
		  color="#3399FF"
		  shadowColor="#999"
		  bgColor={bgColor}>
		  <Text style={{ fontSize: 18 }}>{perc + "%"}</Text>
		</ProgressCircle>

const gauge =
	props =>
		<GaugeProgress
     size={props.size}
     width={props.width}
     fill={props.fill}
     cropDegree={props.cropDegree}
	   tintColor="#4682b4">
     <View>
       <Text>hello</Text>
     </View>
   </GaugeProgress>

const animation =
	<AnimatedGaugeProgress
	 size={50}
	 width={10}
	 fill={100}
	 rotation={90}
	 cropDegree={90}
	 tintColor="#4682b4"
	 delay={10}
	 backgroundColor="#b0c4de"
	 stroke={[2, 2]} //For a equaly dashed line
	 strokeCap="circle" />

//sleep =
//	ms =>
//    new Promise(resolve => setTimeout(resolve, ms));
//async start =
//	() =>
//	let i = 1
//	while (i++<100) {
//		await this.sleep(10)
//		this.setState({perc: i})
//	}
const start =
	() => null
const onPress =
	() => null

export class App extends Component {
	constructor(props) {
		super(props)
    this.setDrawer = this.setDrawer.bind(this)
    this.navigationView = this.navigationView.bind(this)
	  this.drawer = null;
	  this.state = {
			modalVisible: false
	  }
	}
  setDrawer(drawer) {
    this.drawer = drawer
  }
	navigationView =
		() =>
	    <View style={[styles.container, styles.navigationContainer]}>
	      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
	      <Button
	        title="Close drawer"
	        onPress={() => this.drawer.closeDrawer()}
	      />
	    </View>
	setModalVisible =
		newValue =>
			this.setState({modalVisible: newValue})
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{backgroundColor: "lightgray", width: 200, height: 200, alignSelf: "center"}}>
	          <Text>Hello World!</Text>
            <Button title="Hide Modal" onPress={() => this.setModalVisible(!this.state.modalVisible)}/>
          </View>
        </Modal>
        <Button title="Show Modal" onPress={() => this.setModalVisible(true)}/>
	      <Button title="Open drawer" onPress={() => this.drawer.openDrawer()}/>
        <DrawerLayoutAndroid
          style={[styles.container, styles.navigationContainer]}
          ref={this.setDrawer}
          drawerWidth={300}
          drawerPosition={"left"}
          renderNavigationView={this.navigationView}>
	          {progressCircle(90,"#8acf89")}
	          <Text/>
	          {gauge({size: 50, fill: 100, width: 10, cropDegree: 90})}
	          {animation}
	          <Button title="Start" onPress={start}/>
	          <Text/>
	          <Button title="Refresh" onPress={onPress}/>
				</DrawerLayoutAndroid>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export default App;

