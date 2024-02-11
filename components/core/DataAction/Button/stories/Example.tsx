import { IButtonProps } from "../Button.interface";
import { Button } from "..";

const Example = (_props: IButtonProps) => {
	const { ...props } = _props;
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<Button {...props} />
		</div>
	);
};

export default Example;
