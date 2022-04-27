import React, { useRef, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { Camera } from 'expo-camera';
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

export const CameraScreen = ({navigation}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const cameraRef = useRef();
    const {user} = useContext(AuthenticationContext);

    const snap = async () => {
      if(cameraRef){
        const photo = await cameraRef.current.takePictureAsync();
        AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
        navigation.goBack();
      }
    };

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return (
        <Camera style={styles.camera} ref={(camera) => (cameraRef.current = camera)} ratio={"16:9"} type={type}>
          <View style={styles.buttonContainer}>
            <Icon
                raised
                name='retweet'
                type='font-awesome'
                color='tomato'
                onPress={() => {
                  setType(
                  type === Camera.Constants.Type.front
                    ? Camera.Constants.Type.back
                    : Camera.Constants.Type.front
                );}
                } 
              />
              <Icon
                raised
                name='camera'
                type='font-awesome'
                color='tomato'
                onPress={snap} 
              />
          </View>
        </Camera>
      );
}


const styles = StyleSheet.create({
    container:{
        
    },
    buttonContainer:{
        padding : 26,
        alignItems: 'flex-end',
        flexDirection: 'column'
    },
    camera:{
        height : "100%",
        width : "100%",
    },
    text:{

    }
 }); 