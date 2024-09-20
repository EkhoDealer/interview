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

const InterviewDebugging = () => {
	const [headingText, setHeadingText] = useState('Hello!');

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
			</Page>
		</PageWrapper>
	);
};

export default InterviewDebugging;
