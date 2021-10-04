import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {


    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
            alert('dawaj pozwolenie albo spadaj');
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handlePress = () => {
        if (!imageUri)
            selectImage();
        else {
            Alert.alert(
                "Delete Image",
                'Are you sure to delete the image?',
                [
                    {
                        text: "Delete",
                        onPress: () => onChangeImage(null)
                    },
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                    },
                ]
            )
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri ? <MaterialCommunityIcons name='camera' size={40} color={colors.mediumGrey} /> :
                    <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 100,
    },
    image: {
        height: '100%',
        width: '100%',
    },
});

export default ImageInput;