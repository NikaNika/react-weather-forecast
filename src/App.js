import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
		<div className='App'>
			<div className='container'>
				<Weather defaultCity='Kyiv' />

				<footer>
					This project was coded by
					<a
						href='https://www.instagram.com/fierydreamnika/'
						target='_blank'
						rel='noopener noreferrer'
					>
						&nbsp; Tetiana Tatarova &nbsp;
					</a>
					and is
					<a
						href='https://github.com/NikaNika/react-weather-forecast'
						target='_blank'
						rel='noopener noreferrer'
					>
						&nbsp; open-sourced on GitHub &nbsp;
					</a>
				</footer>
			</div>
		</div>
	);
}
