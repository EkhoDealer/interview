import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Routes } from 'react-router-dom';
import InterviewDebugging from '../pages/presentation/page-layouts/InterviewDebugging';

import COLORS from '../common/data/enumColors';

const App = () => {
	const theme = {
		primary: COLORS.PRIMARY.code,
	};

	return (
		<ThemeProvider theme={theme}>
			<div className='app'>
				<Routes />
				<InterviewDebugging />
			</div>
		</ThemeProvider>
	);
};

export default App;
