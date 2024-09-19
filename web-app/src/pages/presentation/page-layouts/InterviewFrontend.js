import React, { useState, useEffect } from 'react';
import Button from '../../../components/bootstrap/Button';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '../../../components/bootstrap/Modal';

const InterviewFrontend = () => {
	const [showModal, setShowModal] = useState(false);
	const [headingText, setHeadingText] = useState('Hello!');
	const [modalShownOnce, setModalShownOnce] = useState(false);

	const handleShow = () => {
		setShowModal(true);
		setHeadingText('Showing Modal');
		setModalShownOnce(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	useEffect(() => {
		if (!showModal && modalShownOnce) {
			setHeadingText('Modal Acknowledged');
		}
	}, [showModal, modalShownOnce]);

	return (
		<PageWrapper title='Interview Test'>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center'
						style={{ fontSize: 'calc(3rem + 3vw)' }}>
						<p>
							<span className='text-primary fw-bold me-1'>{headingText}</span>
						</p>
					</div>
				</div>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center'
						style={{ fontSize: 'calc(3rem + 3vw)' }}>
						<Button
							variant='primary'
							onClick={handleShow}
							style={{
								backgroundColor: 'black',
								color: 'white',
								fontSize: 'calc(2rem + 2vw)',
								padding: '1rem 2rem',
							}}>
							Show Modal
						</Button>
					</div>
				</div>
				<Modal isOpen={showModal} setIsOpen={setShowModal} centered>
					<ModalHeader setIsOpen={setShowModal}>
						<ModalTitle id='tour-title' className='d-flex align-items-end'>
							<span className='ps-2'>Test Modal</span>
						</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<div className='d-flex align-items-center justify-content-center'>
							<div>
								<h2 className='text-center'>Lorem ipsum.</h2>
								<p className='lead text-center'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button variant='danger' onClick={handleClose}>
							No
						</Button>
						<Button
							variant='success'
							onClick={() => {
								handleClose();
							}}>
							Yes
						</Button>
					</ModalFooter>
				</Modal>
			</Page>
		</PageWrapper>
	);
};

export default InterviewFrontend;
