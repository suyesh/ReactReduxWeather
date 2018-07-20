import React, { Component } from 'react'

class GoogleMaps extends Component {
  componentDidMount = () => {
    new window.google.maps.Map(this.refs.map, {
      zoom: 8,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  render(){
    return(
      // this.refs.map
      <div ref="map"/>
    )
  }
}

export default GoogleMaps
