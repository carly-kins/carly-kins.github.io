import * as React from 'react';

const Alert = ( { alert } ) => {
	return (
		<div className="alert alert-primary" role="alert">
			<p className='project-cards__text' dangerouslySetInnerHTML={{ __html: alert.description }}></p>
		</div>
	);
};

export default Alert;