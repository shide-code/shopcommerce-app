import { FC } from "react";
import { ITypography, Typograhpy } from "..";

const Example: FC<ITypography> = ({ variant, children }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<Typograhpy variant={variant}>{children}</Typograhpy>
		</div>
	);
};

export default Example;
