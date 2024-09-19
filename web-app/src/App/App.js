import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Routes } from 'react-router-dom';
import InterviewTest from '../pages/presentation/page-layouts/InterviewTest';

import COLORS from '../common/data/enumColors';

const App = () => {
	const theme = {
		primary: COLORS.PRIMARY.code,
	};

	return (
		<ThemeProvider theme={theme}>
			<div className='app'>
				<Routes />
				<InterviewTest />
			</div>
		</ThemeProvider>
	);
};

export default App;
