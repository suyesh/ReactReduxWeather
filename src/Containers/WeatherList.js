import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../Components/chart'
import GoogleMaps from '../Components/GoogleMaps'

class WeatherList extends Component {
  mapCities = () => this.props.weather.map(this.renderCities)

  renderCities = (cityData)  => {
    const { name, id, coord: {lat, lon} } = cityData.city
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    return(
      <tr key={ id }>
        <td><GoogleMaps lng={lon} lat={lat}/></td>
        <td><Chart data={temps} height={120} width={180} color="red" limit={10} units="K"/></td>
        <td><Chart data={pressure} height={120} width={180} color="orange" limit={10} units="hPa"/></td>
        <td><Chart data={humidity} height={120} width={180} color="blue" limit={10} units="%"/></td>
      </tr>
    )
  }

  render(){
    return(
      <table className='table tabel-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.mapCities() }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
})


export default connect(mapStateToProps)(WeatherList)
