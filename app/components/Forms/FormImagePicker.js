import React from 'react';
import { useFormikContext } from 'formik';

import AppErrorMessage from './AppErrorMessage';
import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {

    const { errors, setFieldValue, touched, values } = useFormikContext();

    const handleAdd = (uri) => { setFieldValue(name, [...values[name], uri]) };

    const handleRemove = uri => { setFieldValue(name, values[name].filter(ele => ele !== uri)) };

    return (
        <>
            <ImageInputList imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImagePicker;