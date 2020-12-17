import React from 'react';
import Datetime1 from './Datetime1';

//const RoomContext = React.createCo
const Banner = ({children, title, subtitle}) => {
	 	return(
			
				<div className="banner" style={{overflow: 'auto', maxHeight: '40rem', marginTop: '2rem'}}>
					<h1>{title}</h1>
					<div></div>
					<Datetime1 />
					<p>{subtitle}</p>
					{children}
	 			</div>
			
	 		);

	};
	

export default Banner