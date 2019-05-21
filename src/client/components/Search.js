import React from 'react';

import { ProductConsumer } from '../context';

export default () => {
	return (
		<React.Fragment>
			<ProductConsumer>
				{value => {
					return (
						<React.Fragment>
							<form>
								<div className="text-center">
									<h5 className="mb-1">Refine your products</h5>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label
											className="form-label"
											htmlFor="searchbyname"
										>
											Search
										</label>
										<input
											className="form-control shadow-none"
											id="searchbyname"
											type="text"
											value={value.searchByName}
											onChange={e => {
												value.onSearchByName(e.target.value);
											}}
										/>
									</div>
									<div className="form-group col-md-6">
										<label
											className="form-label"
											htmlFor="searchbycategory"
										>
											Choose Category
										</label>
										<select
											className="form-control shadow-none"
											id="searchbycategory"
											value={value.searchByCategory}
											onChange={e =>
												value.onSearchByCategory(e.target.value)
											}
										>
											<option value="">Choose...</option>
											{value.categories.map(category => (
												<option
													key={category}
													value={category.toLowerCase()}
												>
													{category}
												</option>
											))}
										</select>
									</div>
								</div>
							</form>
						</React.Fragment>
					);
				}}
			</ProductConsumer>
		</React.Fragment>
	);
};
