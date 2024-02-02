import { Iconoir } from "iconoir-react";
import { IIconProps } from "./Icon.interface";

export const Icon = (_props: IIconProps) => {
	const { name } = _props;
	return <Iconoir name={name} />;
};
