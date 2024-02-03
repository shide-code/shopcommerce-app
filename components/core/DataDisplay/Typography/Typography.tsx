import { ITypography } from ".";

export const Typograhpy = (_props: ITypography) => {
	const { variant, className, children } = _props;

	const $style = () => {
		const $baseStyle = "typography-" + variant;
		if (className) {
			return `${className} ${$baseStyle}`;
		}
		return $baseStyle;
	};

	const Component = variant as keyof JSX.IntrinsicElements;

	return <Component className={$style()}>{children}</Component>;
};
