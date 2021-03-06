import React from 'react';
import { usePosition } from 'use-position';

 const LocationComponent = () => {
    const {
        latitude,
        longitude,
        error,
      } = usePosition();

    return (
        <div>
    <code>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      error: {error}
    </code>
        </div>
    )
}

export default LocationComponent;

