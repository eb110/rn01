import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';

function AppButtonSubmit({ ...otherProps }) {

    const { handleSubmit } = useFormikContext();

    return (
        <AppButton
            onPress={handleSubmit}
            {...otherProps}
        />
    );
}

export default AppButtonSubmit;