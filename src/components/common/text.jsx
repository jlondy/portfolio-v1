import React from 'react';
import '../styles/text.css';

const Text = (props) => {
	return <span className="styled-text">{props.text}</span>;
};

export default Text;
