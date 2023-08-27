import "./Button.css";

const Button = ({setCount}) => {
	return (
		<button className="button-custom" onClick={() => {
            setCount((prev) => prev + 1);
        }}>
			Dodaj klik
		</button>
	);
};

export default Button;
