import React from 'react';
import '../styles/button.css';

const Button = (props) => {
	return (
		<a href={props.href} target={props.target}>
			<button type="button" style={{ fontSize: props.fontSize }}>
				{props.name}
			</button>
		</a>
	);
};

export default Button;
