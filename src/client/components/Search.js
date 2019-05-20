import React from 'react';

import { ProductConsumer } from '../context';

export default () => {
	return (
		<React.Fragment>
			<ProductConsumer>
				{value => {
					return (
						<React.Fragment>
							<div>
								<input
									type="text"
									value={value.searchByName}
									onChange={e => {
										value.onSearchByName(e.target.value);
									}}
								/>
							</div>
							<div>
								<select
									value={value.searchByCategory}
									onChange={e => value.onSearchByCategory(e.target.value)}
								>
									<option value="">Choose...</option>
									{value.categories.map(category => (
										<option key={category} value={category.toLowerCase()}>
											{category}
										</option>
									))}
								</select>
							</div>
						</React.Fragment>
					);
				}}
			</ProductConsumer>
		</React.Fragment>
	);
};
