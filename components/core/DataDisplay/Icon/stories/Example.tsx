import { FC } from "react";
import { IIconProps, Icon } from "..";

const Example: FC<IIconProps> = ({ name }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<Icon name={name} />
		</div>
	);
};

export default Example;
