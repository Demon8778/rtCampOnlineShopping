import React from 'react';
import { create } from 'react-test-renderer';

import Navbar from '../client/components/Navbar';

test('Should render Navbar correctly', () => {
	const component = create(<Navbar />);
	console.log(component);
});
