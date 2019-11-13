import React, { Component } from 'react'
import './App.css'

import Converter from './Components/Converter'

class App extends Component {
	render() {
		return (
			<>
				<h2>Render Props</h2>
				<Converter
					render={(currencyData, amount) => (
						<p>
							US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
							{currencyData.symbol}
							{(amount * currencyData.rate).toFixed(2)}
						</p>
					)}
				/>
			</>
		)
	}
}

export default App