import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet, View } from 'react-native';

import AppErrorMessage from './AppErrorMessage';
import AppTextInput from './AppTextInput';

function AppFormField({ name, ...otherProps }) {

    const { errors, handleChange, setFieldTouched, touched } = useFormikContext();

    return (
        <View style={styles.container}>
            <>
                <AppTextInput
                    onBlur={() => setFieldTouched(name)}
                    onChangeText={handleChange(name)}
                    {...otherProps}
                />
                <AppErrorMessage error={errors[name]} visible={touched[name]}></AppErrorMessage>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default AppFormField;