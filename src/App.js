import React from "react";
import { Provider } from "react-redux";
import { View, Text } from "react-native";
import { createStore } from "redux";

import reducers from "./reducers";

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View>
				<Text
					style={{ fontSize: 20, alignSelf: "center", marginTop: 20 }}
				>
					React Native App
				</Text>
			</View>
		</Provider>
	);
};

export default App;
