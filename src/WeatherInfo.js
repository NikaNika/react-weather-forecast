import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowDown,
	faDroplet,
	faWind,
	faTemperatureHalf,
} from '@fortawesome/free-solid-svg-icons';

export default function WeatherInfo(props) {
	let celsius_feels_like = Math.round(props.data.feels_like);
	let fahrenheit_feels_like = Math.round((props.data.feels_like * 9) / 5 + 32);

  return (
		<div className='WeatherInfo'>
			<div className='row mt-3'>
				<div className='col-6 d-flex align-items-center flex-column justify-content-center'>
					<div className='d-flex'>
						<div>
							<WeatherIcon code={props.data.icon} size={52} />
						</div>

						<div>
							<WeatherTemperature
								celsius={props.data.temperature}
								unit={props.unit}
								setUnit={props.setUnit}
							/>
						</div>
					</div>
					<div className='description'>{props.data.description}</div>
				</div>
				<div className='col-6'>
					<h1>{props.data.city}</h1>
					<FormattedDate date={props.data.date} />
					<hr />
					<ul>
						<li>
							<span className='detailsIcon'>
								<FontAwesomeIcon icon={faTemperatureHalf} />
							</span>
							&nbsp; Feels like:
							{props.unit === 'celsius' ? (
								<span> {celsius_feels_like} °C</span>
							) : (
								<span> {fahrenheit_feels_like} °F</span>
							)}
						</li>
						<li>
							<span className='detailsIcon'>
								<FontAwesomeIcon icon={faArrowDown} />
							</span>
							&nbsp; Pressure: {props.data.pressure} hPa
						</li>
						<li>
							<span className='detailsIcon'>
								<FontAwesomeIcon icon={faDroplet} />
							</span>
							&nbsp; Humidity: {props.data.humidity}%
						</li>
						<li>
							<span className='detailsIcon'>
								<FontAwesomeIcon icon={faWind} />
							</span>
							&nbsp; Wind: {props.data.wind} km/h
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
