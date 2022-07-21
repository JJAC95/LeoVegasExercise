import '../styles/checkbox.css';
export const Checkbox = ({ value, label, checked }) => {
	return (
		<div key={value} className="container">
			<input
				id={label}
				defaultValue={value}
				type="checkbox"
				defaultChecked={checked}
				className="checkBox"
			/>
			<label>{label}</label>
		</div>
	);
};
