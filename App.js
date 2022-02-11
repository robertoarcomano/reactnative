/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import ProgressCircle from 'react-native-progress-circle'

class App extends Component {
	constructor(props) {
	  super(props)
	  this.state = {
	    visible: false,
	    perc: 0
	  }
		this.size = 200;
		this.fill = 100;
		this.width = 15;
		this.cropDegree = 90;
		this.textOffset = this.width;
		this.textWidth = this.size - (this.textOffset*2);
		this.textHeight = this.size*(1 - this.cropDegree/360) - (this.textOffset*2);
		this.onPress = this.onPress.bind(this)
		this.doSleep = this.doSleep.bind(this)
		this.start = this.start.bind(this)
	}
	onPress() {
		this.setState({visible: !this.state.visible})
	}
	sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  doSleep(ms, callback) {
    this.sleep(ms).then(callback())
  }
	async start() {
		let i = 1
		while (i++<100) {
			await this.sleep(10)
			this.setState({perc: i})
		}
	}
	render() {
		const animation =
				this.state.visible
				? <AnimatedGaugeProgress
	         size={200}
	         width={15}
	         fill={100}
	         rotation={90}
	         cropDegree={90}
	         tintColor="#4682b4"
	         delay={10}
	         backgroundColor="#b0c4de"
	         stroke={[2, 2]} //For a equaly dashed line
	         strokeCap="circle" />
	      : <View></View>

		const gauge =
			<GaugeProgress
	     size={this.size}
	     width={this.width}
	     fill={this.fill}
	     cropDegree={this.cropDegree}>
	     <View>
	       <Text>hello</Text>
	     </View>
	   </GaugeProgress>

//        bgColor="#8acf89">
		const redColor=255-2.5*this.state.perc
		const greenColor=2.5*this.state.perc
		let bgColor = "rgb("+redColor+","+greenColor+",0)"
		const progressCircle =
			<ProgressCircle
        percent={this.state.perc}
        radius={50}
        borderWidth={8}
        color="#3399FF"
        shadowColor="#999"
        bgColor={bgColor}>
        <Text style={{ fontSize: 18 }}>{this.state.perc + "%"}</Text>
      </ProgressCircle>

		return (
			<View>
			 {progressCircle}
			 {gauge}
			 {animation}
			 <Button title="Start" onPress={this.start}/>
			 <Text/>
			 <Button title="Refresh" onPress={this.onPress}/>
			</View>)
	}
};

export default App;
