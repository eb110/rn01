import React from 'react';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, AppButtonSubmit } from '../components/Forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import PickerItem from '../components/PickerItem';
import Screen from '../components/Screen';

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
        icon: 'email',
        iconBackgroundColor: 'primary',
        iconColor: 'black',
    },
    {
        id: 2,
        label: 'Bikes',
        value: 200,
        icon: 'apps',
        iconBackgroundColor: 'secondary',
        iconColor: 'white',
    },
    {
        id: 3,
        label: 'CD\'s',
        value: 10,
        icon: 'lock',
        iconBackgroundColor: 'danger',
        iconColor: 'blue',
    },
    {
        id: 4,
        label: 'House\'s',
        value: 15,
        icon: 'email',
        iconBackgroundColor: 'yellow',
        iconColor: 'mediumGrey',
    },
    {
        id: 5,
        label: 'MC\'s',
        value: 15,
        icon: 'email',
        iconBackgroundColor: 'yellow',
        iconColor: 'mediumGrey',
    },
    {
        id: 6,
        label: 'Computer\'s',
        value: 15,
        icon: 'email',
        iconBackgroundColor: 'yellow',
        iconColor: 'mediumGrey',
    },
    {
        id: 7,
        label: 'Elephant\'s',
        value: 15,
        icon: 'email',
        iconBackgroundColor: 'yellow',
        iconColor: 'mediumGrey',
    },
    {
        id: 8,
        label: 'Tractor\'s',
        value: 15,
        icon: 'email',
        iconBackgroundColor: 'yellow',
        iconColor: 'mediumGrey',
    },
    {
        id: 9,
        label: 'MC\'s',
        value: 15,
        icon: 'email',
        iconBackgroundColor: 'yellow',
        iconColor: 'mediumGrey',
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
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name='category'
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder='Category'
                    width='50%'
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