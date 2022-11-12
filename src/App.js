import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import DailyWeather from './components/DailyWeather';
import Search from './components/Search';

function App() {
	const [city, setCity] = useState('Kyiv');
	const [temperature, setTemperature] = useState(0);
	const [humidity, setHumidity] = useState(0);
	const [feelsLike, setFeelsLike] = useState(0);
	const [pressure, setPressure] = useState(0);
	const [wind, setWind] = useState(0);
	const [description, setDescription] = useState('');
	const [iconCode, setIconCode] = useState('');
	const [date, setDate] = useState('');
	// const [lat, setLat] = useState(0);
	// const [lon, setLon] = useState(0);

	const formatDate = (timestamp) => {
		let date = new Date(timestamp);
		let hours = date.getHours();
		if (hours < 10) {
			hours = `0${hours}`;
		}
		let minutes = date.getMinutes();
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}

		let days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		let day = days[date.getDay()];
		return `${day} ${hours}:${minutes}`;
	};

	const onChangeCity = (value) => {
		setCity(value);
	};

	// 451ebd191aa070edb6802ed47f595d5d
	// 445905dadb3d2b0c6f1b916c9d0e3860

	let apiKey = '451ebd191aa070edb6802ed47f595d5d';
	let units = 'metric';
	let apiUrlDailyWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
	// let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

	axios.get(apiUrlDailyWeather).then((resp) => {
		setTemperature(Math.round(resp.data.main.temp));
		setFeelsLike(`${Math.round(resp.data.main.feels_like)} °C`);
		setHumidity(resp.data.main.humidity);
		setPressure(resp.data.main.pressure);
		setWind(Math.round(resp.data.wind.speed));
		setDescription(resp.data.weather[0].description);
		setIconCode(resp.data.weather[0].icon);
		setDate(formatDate(resp.data.dt));
		// setLat(resp.data.coord.lat);
		// setLon(resp.data.coord.lon);
	}).catch((err) => {
		console.log('Error')
		alert('Error')
		setCity('Kyiv')
	});	

	return (
		<div className='App'>
			<div className='container'>
				<Search onChangeCity={onChangeCity} />
				<DailyWeather
					city={city}
					temperature={temperature}
					setTemperature={setTemperature}
					humidity={humidity}
					wind={wind}
					pressure={pressure}
					feelsLike={feelsLike}
					description={description}
					iconCode={iconCode}
					date={date}
				/>				
			</div>
			<small>
				<a
					href='https://github.com/NikaNika/react-weather-forecast.git'
					target='_blank'
					rel='noreferrer'
				>
					Open-source code
				</a>
				&nbsp;by Tetiana Tatarova
			</small>
		</div>
	);
}

export default App;
