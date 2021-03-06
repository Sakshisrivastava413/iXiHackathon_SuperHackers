import React from 'react';

const Options = (props) => {

	const { option, selected, onClick } = props;

	return (
		<React.Fragment>
			<div className="columns" onClick={onClick}>
				<div className="column">
					<div className={selected ? "ans-options bg-blue" : "ans-options bg-white"}>
						<label className={selected ? "chZpAy wht-bg" : "chZpAy wht-bg"}>
							<input className="hide" type="checkbox" />
						</label>
						<p className="opt-text">{option}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Options;
