import React from 'react';
import LettersService from '../../services/letters-api-service';
import './Landing.css';

class Landing extends React.Component {
	state = {
		// letter is singular because only displaying one for now. Api/Server reference to "letter" is plural because it's scalable
		letter: {
			content: []
		},
		error: null
	};

	componentDidMount = () => {
		LettersService.getLetters()
			.then(res =>
				this.setState({
					// assumes there is only one letter
					letter: res[0],
					error: null
				})
			)
			.catch(error => this.setState({ error }));
	};

	render = () => {
		const { error } = this.state;
		return (
			<div className='Landing mainContainer'>
				<h1 className='header'>{this.state.letter.title}</h1>
				<div role='alert' className='italic'>
          {error && <p className='alert'>{error}</p>}
        </div>
				{this.state.letter.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
			</div>
		);
	};
}

export default Landing;
