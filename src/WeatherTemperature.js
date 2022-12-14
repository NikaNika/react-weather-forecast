import React, { useState } from "react";

export default function WeatherTemperature(props) {
  

	const showFahrenheit = (event) => {
		event.preventDefault();
		props.setUnit('fahrenheit');
	};

	const showCelsius = (event) => {
		event.preventDefault();
		props.setUnit('celsius');
	};

  if (props.unit === 'celsius') {
    return (
			<div className='WeatherTemperature'>
				<span className='temperature'>{Math.round(props.celsius)}</span>
				<span className='unit active' onClick={showCelsius} >
					°C
				</span>
				<span className='unit'> | </span>
				<span className='unit' onClick={showFahrenheit}>
					°F
				</span>
			</div>
		);
  } else {
    return (
			<div className='WeatherTemperature'>
				<span className='temperature'>
					{Math.round((props.celsius * 9) / 5 + 32)}
				</span>
				<span className='unit' onClick={showCelsius}>
					°C
				</span>
				<span className='unit'> | </span>
				<span className='unit active' onClick={showFahrenheit}>
					°F
				</span>
			</div>
		);
  }
}
