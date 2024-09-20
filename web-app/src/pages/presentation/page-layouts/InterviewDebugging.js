import React, { useState, useEffect } from 'react';
import Button from '../../../components/bootstrap/Button';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';

const InterviewDebugging = () => {
	const [counter, setCounter] = useState(0);
	const [isVisible, setIsVisible] = useState(true);
	const [message, setMessage] = useState('');
	const [color, setColor] = useState('#ffffff');

	useEffect(() => {
		if (counter > 5) {
			setMessage('Keep going!');
		} else {
			setMessage('Click to start counting!');
		}
	}, [counter]);

	useEffect(() => {
		if (!isVisible) {
			setColor('#e0e0e0');
		} else {
			setColor('#aaaaaa');
		}
	}, [isVisible]);

	const incrementCounter = () => {
		setCounter(counter + 1);
		setIsVisible(!isVisible);
	};

	const resetCounter = () => {
		setCounter(0);
		setMessage('Counter reset!');
	};

	return (
		<PageWrapper title='Interview Test'>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div className='col-12 d-flex justify-content-center'>
						<p style={{ fontSize: 'calc(1.5rem + 1vw)', color }}>{message}</p>
					</div>
				</div>

				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center'
						style={{
							fontSize: 'calc(3rem + 3vw)',
							backgroundColor: isVisible ? '#f8f9fa' : '#343a40',
							color: isVisible ? '#000' : '#fff',
						}}>
						<div>
							<span className='text-primary fw-bold me-1'>Counter: {counter}</span>
						</div>
					</div>
				</div>

				<div className='row d-flex align-items-center h-100'>
					<div className='col-12 d-flex justify-content-center'>
						<Button
							variant='primary'
							onClick={incrementCounter()}
							style={{
								backgroundColor: 'black',
								color: 'white',
								fontSize: 'calc(2rem + 2vw)',
								padding: '1rem 2rem',
								border: '2px solid white',
							}}>
							Increment Counter
						</Button>
					</div>
				</div>

				<div className='row d-flex align-items-center h-100 mt-3'>
					<div className='col-12 d-flex justify-content-center'>
						<Button
							variant='secondary'
							onClick={resetCounter()}
							style={{
								fontSize: 'calc(1rem + 1vw)',
								padding: '0.5rem 1rem',
								marginTop: '10px',
							}}>
							Reset Counter
						</Button>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default InterviewDebugging;
