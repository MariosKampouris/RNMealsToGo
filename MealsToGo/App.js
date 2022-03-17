import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';


export default function App() {
  return (
    <>
    <StatusBar style='auto'/>
    <SafeAreaView style={styles.container}>

      <View style={styles.topcontainer}>
        <Text>search</Text>
       </View>

       <View style={styles.bottomcontainer}>
        <Text>list</Text>
       </View>

    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  topcontainer: {
    flex: 0.1,
    backgroundColor: 'green',
    
  },
  bottomcontainer: { 
    flex: 0.9,
    backgroundColor: 'blue',
  },
});
