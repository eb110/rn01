import React, { useState } from 'react';

import Screen from './app/components/Screen';
import ImageInputList from './app/components/ImageInputList';

export default function App() {

  const [imageUris, setImageUris] = useState([])

  //react 'set'
  const handleAdd = uri => { setImageUris([...imageUris, uri]) }

  const handleRemove = uri => { setImageUris(imageUris.filter(ele => ele !== uri)) }

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}