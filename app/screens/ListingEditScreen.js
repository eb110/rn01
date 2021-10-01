import React from 'react';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, AppButtonSubmit } from '../components/Forms';
import Screen from '../components/Screen';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.string().required().nullable().label('Category')
});

const categories = [
    {
        id: 1,
        label: 'Books',
        value: 2,
    },
    {
        id: 2,
        label: 'Bikes',
        value: 200,
    },
    {
        id: 3,
        label: 'CD\'s',
        value: 10,
    },
    {
        id: 4,
        label: 'MC\'s',
        value: 15,
    },
]

function ListingEditScreen(props) {
    return (
        <Screen style={{ padding: 10 }}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
            >
                <AppFormField
                    maxLength={255}
                    name='title'
                    placeholder='Title'
                />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                />
                <AppFormPicker
                    items={categories}
                    name='category'
                    placeholder='Category'
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name='description'
                    placeholder='Description'
                    nubmerOfLines={3}
                />
                <AppButtonSubmit title='Post' />
            </AppForm>
        </Screen>
    );
}

export default ListingEditScreen;