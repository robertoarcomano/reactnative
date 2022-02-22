import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
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
	 size={100}
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

const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
		<DrawerLayoutAndroid
			ref={drawer}
			drawerWidth={300}
			drawerPosition={drawerPosition}
			renderNavigationView={navigationView}>
			<View style={styles.container}>
				{progressCircle(90,"#8acf89")}
				{gauge({size: 100, fill: 100, width: 10, cropDegree: 90})}
				{animation}
				<Button title="Start" onPress={start}/>
				<Text/>
				<Button title="Refresh" onPress={onPress}/>
				<Text style={styles.paragraph}>
				  Drawer on the {drawerPosition}!
				</Text>
				<Button title="Change Drawer Position" onPress={() => changeDrawerPosition()}/>
				<Text style={styles.paragraph}>
					Swipe from the side or press button below to see it!
				</Text>
				<Button title="Open drawer" onPress={() => drawer.current.openDrawer()}/>
			</View>
		</DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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

