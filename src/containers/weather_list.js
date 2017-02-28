import React from 'react'
import { connect } from 'react-redux'
import GoogleMap from '../components/google_map'
import Chart from '../components/chart'

// class WeatherList extends React.Component {
//   renderWeather(item, i) {
//     function mapOverWeatherMain(weatherItem, prop) {
//       return weatherItem.list.map(weather => {
//         return weather.main[prop]
//       })
//     }

//     const { lon, lat } = item.city.coord
//     return (
//       <tr key={i} >
//         <td>
//           { item.city.name }
//           {(() => {
//             // for debugging
//             console.log('before ' + item.city.name, { lon, lat })
//           })()}
//           <GoogleMap lat={ lat } lon={ lon } />
//         </td>
//         <td>
//           <Chart data={ mapOverWeatherMain(item, 'temp') } units="K" />
//         </td>
//         <td>
//           <Chart data={ mapOverWeatherMain(item, 'pressure') } color="green" units="hPa" />
//         </td>
//         <td>
//           <Chart data={ mapOverWeatherMain(item, 'humidity') } color="red" units="%" />
//         </td>
//       </tr>
//     )
//   }

//   render() {
//     return (
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>City</th>
//             <th>Temperature (K)</th>
//             <th>Pressure (hPa)</th>
//             <th>Humidity (%)</th>
//           </tr>
//         </thead>
//         <tbody>
//         { this.props.weather.map((item, i) => this.renderWeather(item, i)) }
//         </tbody>
//       </table>
//     )
//   }
// }

// const WeatherList = ({ weather }) => {
//   function mapOverWeatherMain(weatherItem, prop) {
//     return weatherItem.list.map(weather => {
//       return weather.main[prop]
//     })
//   }

//   function renderWeather(item, i) {
//     const { lon, lat } = item.city.coord
//     return (
//       <tr key={i} >
//         <td>
//           <GoogleMap lat={ lat } lon={ lon } />
//         </td>
//         <td>
//           <Chart data={ mapOverWeatherMain(item, 'temp') } units="K" />
//         </td>
//         <td>
//           <Chart data={ mapOverWeatherMain(item, 'pressure') } color="green" units="hPa" />
//         </td>
//         <td>
//           <Chart data={ mapOverWeatherMain(item, 'humidity') } color="red" units="%" />
//         </td>
//       </tr>
//     )
//   }

//   return (
//     <table className="table table-hover">
//       <thead>
//         <tr>
//           <th>City</th>
//           <th>Temperature (K)</th>
//           <th>Pressure (hPa)</th>
//           <th>Humidity (%)</th>
//         </tr>
//       </thead>
//       <tbody>
//       { weather.map(renderWeather) }
//       </tbody>
//     </table>
//   )
// }

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather })

export default connect(mapStateToProps)(WeatherList)