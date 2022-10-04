import React, { Component, Fragment } from 'react';

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

class FeedbackAlert extends Component {
	constructor(props) {
		super(props);

		this.handleClean = this.handleClean.bind(this);

		this.state = {
			show: props.show
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.show !== this.props.show) {
			this.setState({ show: this.props.show });
		}
	}

	handleClean() {
		this.setState({ show: false }, () => {
			this.props.callback();
		});
	}

	render() {
		return this.state.show && (
			<div style={{ display: 'flex', gap: 8 }}>
				<div>
					{ 'cor alterada!' }
				</div>
				<button onClick={this.handleClean}>
					{ 'ok' }
				</button>
			</div>
		);
	}
}

class AnimalCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			animal: props,
			color: '',
			changedColor: false
		};
	}

	componentDidUpdate(_prevProps, prevState) {
		if (prevState.color !== this.state.color) {
			this.setState({ changedColor: true });
		}
	}

	renderColorSelector() {
		return (
			<div style={{ display: 'flex', gap: 8 }}>
				<select onChange={e => {
					this.setState({ color: colors.findIndex(item => e.target.value && item === e.target.value) });
				}}>
					<option value={''} selected>{ 'Cor de fundo' }</option>
					<option value={'red'}>{ 'red' }</option>
					<option value={'blue'}>{ 'blue' }</option>
					<option value={'green'}>{ 'green' }</option>
					<option value={'yellow'}>{ 'yellow' }</option>
					<option value={'aqua'}>{ 'aqua' }</option>
					<option value={'tomato'}>{ 'tomato' }</option>
				</select>
				<FeedbackAlert show={this.state.changedColor} callback={() => this.setState({ changedColor: false })} />
			</div>
		);
	}

	render() {
		return (
			<div style={{ ...cardStyles, backgroundColor: colors[this.state.color] }} data-testid={'card'}>
				{ (
					(animal) => {
						return (
							<Fragment>
								<div style={{ height: 75, padding: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
									{ this.renderColorSelector() }
									<p data-testid={'name'}>
										<strong>{ 'Name: ' }</strong>
										{ animal.name }
									</p>
									<p data-testid={'type'}>
										<strong>{ 'Type: ' }</strong>
										{ this.state.animal.animal_type }
									</p>
								</div>
								<div style={(() => ({ width: '100%', height: 200, backgroundImage: `url(${this.state.animal.image_link})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }))()} />
							</Fragment>
						);
					}
				)(this.props) }
			</div>
		);
	}
}

export default AnimalCard;