import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowDown,
	faDroplet,
	faWind,
	// faTemperatureHalf,
} from '@fortawesome/free-solid-svg-icons';
import WeatherTemperature from "./WeatherTemperature";

function DailyWeather({
	date,
	iconCode,
	description,
	feelsLike,
	temperature,
	pressure,
	city,
	humidity,
	wind,
}) {
	return (
		<div className='dailyWeather'>
			<WeatherTemperature
				iconCode={iconCode}
				description={description}
				celsius={temperature}
			/>
			<div className='overview'>
				<h1 className='city'>{city}</h1>
				<div id='date'>{date}</div>
				<hr />
				<ul className='details'>
					{/* <li>
						<span className='detailsIcon'>
							<FontAwesomeIcon icon={faTemperatureHalf} />
						</span>
						Feels like: <span id='feelsLike'>{feelsLike}</span>
					</li> */}
					<li>
						<span className='detailsIcon'>
							<FontAwesomeIcon icon={faArrowDown} />
						</span>
						Pressure: <span id='pressure'>{pressure}</span> hPa
					</li>
					<li>
						<span className='detailsIcon'>
							<FontAwesomeIcon icon={faDroplet} />
						</span>
						Humidity: <span id='humidity'>{humidity}</span>%
					</li>
					<li>
						<span className='detailsIcon'>
							<FontAwesomeIcon icon={faWind} />
						</span>
						Wind: <span id='wind'>{wind}</span> m/h
					</li>
				</ul>
			</div>
		</div>
	);
}

export default DailyWeather;
