import React, { useState } from "react";

function WeatherTemperature({ iconCode, description, celsius }) {
  const [unit, setUnit] = useState('celsius');

  const showFahrenheit = (event) => {
    event.preventDefault();
    setUnit('fahrenheit');
  }

  const showCelsius = (event) => {
    event.preventDefault();
    setUnit('celsius');
	}
	
	if (unit === 'celsius') {
		return (
			<div className='weatherTemperature'>
				<div className='row'>
					<img
						src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
						alt=''
						className='weatherIcon'
					/>
					<strong id='temperature'>{celsius}</strong>
					<span className='units'>
						<button id='celsiusLink' className='active' onClick={showCelsius}>
							°C
						</button>
						&nbsp;|&nbsp;
						<button id='fahrenheitLink' onClick={showFahrenheit}>
							°F
						</button>
					</span>
				</div>
				<div id='description'>{description}</div>
			</div>
		);
	} else {
		return (
			<div className='weatherTemperature'>
				<div className='row'>
					<img
						src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
						alt=''
						className='weatherIcon'
					/>
					<strong id='temperature'>{Math.round((celsius * 9) / 5 + 32)}</strong>
					<span className='units'>
						<button id='celsiusLink' onClick={showCelsius}>
							°C
						</button>
						&nbsp;|&nbsp;
						<button
							id='fahrenheitLink'
							className='active'
							onClick={showFahrenheit}
						>
							°F
						</button>
					</span>
				</div>
				<div id='description'>{description}</div>
			</div>
		);
	}

	
}

export default WeatherTemperature;
