import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = props => {
	const [ selected, setSelected ] = useState(0);
	const [ votos, setVoto ] = useState([ 0 ]);
	const [ cont, setCont ] = useState(0);
	const [ masvotado, setMasVotado ] = useState(-1);

	const clicNext = () => {
		setSelected(anecaleatoria(0, anecdotes.length));
		calcMasVotado();
	};

	function calcMasVotado() {
		let ind = 0;
		let mvotos = 0;
		while (ind < anecdotes.length) {
			if (votos[ind]) {
				if (votos[ind] > mvotos) {
					mvotos = votos[ind];
					setMasVotado(ind);
				}
			}
			ind++;
		}
	}

	const clicVotar = () => {
		if (!votos[selected]) {
			votos[selected] = 0;
		}
		votos[selected] = votos[selected] + 1;
		setVoto(votos);
		setCont(cont + 1);

		calcMasVotado();
	};

	function anecaleatoria(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	return (
		<div>
			<h2 className="titulo">Anecdote of the day</h2>
			<p id="anecdotaselec" className="anecdotas">{props.anecdotes[selected]}</p>
			<p id="votosselec" className="votos">has {votos[selected]} votes</p>
			<button id="votar" className="botones" onClick={clicVotar}>
				vote
			</button>
			<button className="botones" onClick={clicNext}>
				next anecdote
			</button>
			{masvotado >= 0 ? (
				<div>
					<h2 className="titulo">Anecdote with most votes</h2>
					<p id="notamasvotada" className="anecdotas">{props.anecdotes[masvotado]}</p>
					<p id="numerodevotos" className="votos">has {votos[masvotado]} votes</p>
				</div>
			) : (
				<p />
			)}
		</div>
	);
};

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
