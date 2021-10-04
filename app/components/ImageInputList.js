import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {

    const scrollView = useRef();

    return (
        <View>
            <ScrollView
                horizontal
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
                ref={scrollView}
            >
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
            </ScrollView>
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