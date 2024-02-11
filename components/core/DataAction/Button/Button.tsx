import { IButtonProps } from "./Button.interface";
import { useButtonStyle } from "./hooks";

export const Button = (_props: IButtonProps) => {
	const { text, onClick, type = "button", typeButton = "filled" } = _props;

	const { filled, outlined } = useButtonStyle(_props);
	const $style = typeButton === "filled" ? filled : outlined;
	return (
		<button onClick={onClick} className={$style} type={type}>
			{text}
		</button>
	);
};
