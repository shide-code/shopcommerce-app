import classNames from "classnames";
import { IButtonProps } from "./Button.interface";

export const useStyleButtonFilled = (props: IButtonProps) => {
	const {
		customBackgroundTheme,
		backgroundTheme,
		className,
		disabled,
		rounded,
	} = props;
	const $baseStyle = classNames({
		[`${customBackgroundTheme}`]: customBackgroundTheme,
		[`${className}`]: className,
		"base--btn": true,
		"text-white": true,
		"transition ease-in-out delay-100 hover:translate-y-1": !disabled,
		"bg-button-disable": disabled,
		// background color
		"bg-accent-normal": backgroundTheme === "accent",
		"bg-informative-normal": backgroundTheme === "informative",
		"bg-negative-normal": backgroundTheme === "negative",
		"bg-notice-normal": backgroundTheme === "notice",
		"bg-positive-normal": backgroundTheme === "positive",

		// focus ring
		"focus:ring-2 focus:ring-accent-hover":
			backgroundTheme === "accent" && !disabled,
		"focus:ring-2 focus:ring-informative-normal":
			backgroundTheme === "informative" && !disabled,
		"focus:ring-2 focus:ring-negative-normal":
			backgroundTheme === "negative" && !disabled,
		"focus:ring-2 focus:ring-notice-normal":
			backgroundTheme === "notice" && !disabled,
		"focus:ring-2 focus:ring-positive-normal":
			backgroundTheme === "positive" && !disabled,

		// hover
		"hover:bg-accent-press": backgroundTheme === "accent" && !disabled,
		"active:bg-accent-press": backgroundTheme === "accent" && !disabled,

		// Rounded
		"rounded-full": rounded === "full",
		"rounded-sm": rounded === "sm",
		"rounded-lg": rounded === "lg",
		"rounded-xs": rounded === "xs",
		"rounded-base": rounded === "none",
	});

	return $baseStyle;
};
