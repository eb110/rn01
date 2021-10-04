import React from 'react';
import { StyleSheet, View } from 'react-native';

import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
    return (
        <View style={styles.container}>
            {imageUris.map(uri => (
                <View style={{ marginRight: 5 }} key={uri}>
                    <ImageInput
                        imageUri={uri}
                        key={uri} //react prop
                        onChangeImage={() => onRemoveImage(uri)}
                    />
                </View>
            ))}
            <ImageInput
                onChangeImage={uri => onAddImage(uri)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 5,
    },
});

export default ImageInputList;