import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { MapToken } from '../../config';
import style from './style.scss';

class ContactMap extends Component {

  state = {
    viewport: {
      width: 700,
      height: 500,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
    },
  };

  render() {
    return (
      <div className={style.mapContainer}>
        {/* <div className={style.map}> */}
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={MapToken}
          onViewportChange={(viewport) => this.setState({ viewport })}
        />
        {/* </div> */}
      </div>
    );
  }
}

export default ContactMap;
