import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from'../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {


	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => (weather.main.temp)-273);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		console.log(temps);

		return (
				<tr key = {name}>
					<td><GoogleMap lon={lon} lat={lat} /></td>
					<td height={160} width={220} ><Chart data={temps} color ='orange' units = "[°C]" fillColor = 'green' /></td>
					<td height={160} width={220} ><Chart data={pressure} color ='blue' units = "[hPa]" fillColor = 'yellow' /></td>
					<td height={160} width={220} ><Chart data={humidity} color ='green' units = '[%]' fillColor ='gray' /></td>
				</tr>
			);
	}

	render(){
		return (
				<table className = 'table table-hover'> 
					<thead> 
						<tr>
							<th>Miasto</th>
							<th>Temperatura </th>
							<th>Ciśnienie  </th>
							<th>Wilgotność </th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			)
	}
}

function mapStateToProps({ weather }){
	return { weather }; // tutaj tak bo w combineReducers tak nazwałem zmienna 
}

export default connect(mapStateToProps)(WeatherList);