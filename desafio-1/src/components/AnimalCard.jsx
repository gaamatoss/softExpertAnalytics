import React, { Fragment, useState, useEffect } from 'react';
import FeedbackAlert from './FeedbackAlert'

const cardStyles = {
	background: '#fff',
	borderRadius: 2,
	height: 300,
	width: 275,
	boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between'
};

const colors = ['red', 'blue', 'green', 'yellow', 'aqua', 'tomato'];

export default function AnimalCard(props) {

	const [color, setColor] = useState('')
	const [changedColor, setChangedColor] = useState(false)
	const handleClean = () => setChangedColor(false)

	useEffect(() => {
		if (color !== '') {
			setChangedColor(true)
		}
	}, [color]);

	function renderColorSelector() {
		return (
			<div style={{ display: 'flex', gap: 8 }}>
				<select defaultValue={''} onChange={e =>
					setColor(colors.findIndex(color => e.target.value && color === e.target.value))
				}>
					<option value={''}>{'Default'}</option>
					<option value={'red'}>{'Red'}</option>
					<option value={'blue'}>{'Blue'}</option>
					<option value={'green'}>{'Green'}</option>
					<option value={'yellow'}>{'Yellow'}</option>
					<option value={'aqua'}>{'Aqua'}</option>
					<option value={'tomato'}>{'Tomato'}</option>
				</select>
				<FeedbackAlert show={changedColor} callback={handleClean} />
			</div>
		);
	}

	return (
		<div style={{ ...cardStyles, backgroundColor: colors[color] }} data-testid={'card'}>
			{(
				(props) => {
					return (
						<Fragment>
							<div style={{ height: 75, padding: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
								{renderColorSelector()}
								<p data-testid={'name'}>
									<strong>{'Name: '}</strong>
									{props.name}
								</p>
								<p data-testid={'type'}>
									<strong>{'Type: '}</strong>
									{props.animal_type}
								</p>
							</div>
							<div style={(() => ({ width: '100%', height: 200, backgroundImage: `url(${props.image_link})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }))()} />
						</Fragment>
					);
				}
			)(props)}
		</div>
	);
}
