import React, {
	useState
} from 'react';

export default function App() {
	const questions = [{
			questionText: 'Who won 1994 FIFA WORLDCUP?',
			answerOptions: [{
					answerText: 'France',
					isCorrect: false
				},
				{
					answerText: 'USA',
					isCorrect: false
				},
				{
					answerText: 'Brazil',
					isCorrect: true
				},
				{
					answerText: 'Italy',
					isCorrect: false
				},
			],
		},
		{
			questionText: 'JS stands for?',
			answerOptions: [{
					answerText: 'Jetscript',
					isCorrect: false
				},
				{
					answerText: 'Javascript',
					isCorrect: true
				},
				{
					answerText: 'Jetspace',
					isCorrect: false
				},
				{
					answerText: 'Jetsale',
					isCorrect: false
				},
			],
		},
		{
			questionText: 'Owner of Microsoft?',
			answerOptions: [{
					answerText: 'Bill Gates',
					isCorrect: true
				},
				{
					answerText: 'Imran Khan',
					isCorrect: false
				},
				{
					answerText: 'Elon Musk',
					isCorrect: false
				},
				{
					answerText: 'Colin Powel',
					isCorrect: false
				},
			],
		},
		{
			questionText: 'Current version of Microsoft Windows',
			answerOptions: [{
					answerText: '10',
					isCorrect: false
				},
				{
					answerText: '9',
					isCorrect: false
				},
				{
					answerText: 'XP',
					isCorrect: false
				},
				{
					answerText: '11',
					isCorrect: true
				},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return ( <
		div className = 'app' > {
			showScore ? ( <
				div className = 'score-section' >
				You scored {
					score
				}
				out of {
					questions.length
				} <
				/div>
			) : ( <
				>
				<
				div className = 'question-section' >
				<
				div className = 'question-count' >
				<
				span > Question {
					currentQuestion + 1
				} < /span>/ {
					questions.length
				} <
				/div> <
				div className = 'question-text' > {
					questions[currentQuestion].questionText
				} < /div> <
				/div> <
				div className = 'answer-section' > {
					questions[currentQuestion].answerOptions.map((answerOption) => ( <
						button onClick = {
							() => handleAnswerOptionClick(answerOption.isCorrect)
						} > {
							answerOption.answerText
						} < /button>
					))
				} <
				/div> <
				/>
			)
		} <
		/div>
	);
}
