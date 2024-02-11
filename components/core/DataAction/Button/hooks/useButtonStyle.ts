import classNames from "classnames";
import { IButtonProps } from "../Button.interface";

export const useButtonStyle = (props: IButtonProps) => {
	const {
		customBackgroundTheme,
		backgroundTheme,
		className,
		disabled,
		rounded,
	} = props;
	const $filledStyle = classNames({
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

	const $outlinedStyle = classNames({
		[`${customBackgroundTheme}`]: customBackgroundTheme,
		[`${className}`]: className,
		"base--btn": true,
		"border-2": true,
		"transition ease-in-out delay-100 hover:translate-y-1": !disabled,
		"border-button-disable": disabled,
		// background color
		"border-accent-normal": backgroundTheme === "accent",
		"border-informative-normal": backgroundTheme === "informative",
		"border-negative-normal": backgroundTheme === "negative",
		"border-notice-normal": backgroundTheme === "notice",
		"border-positive-normal": backgroundTheme === "positive",

		// text color
		"text-accent-normal": backgroundTheme === "accent",
		"text-informative-normal": backgroundTheme === "informative",
		"text-negative-normal": backgroundTheme === "negative",
		"text-notice-normal": backgroundTheme === "notice",
		"text-positive-normal": backgroundTheme === "positive",

		"text-button-disable": disabled,
		// Rounded
		"rounded-full": rounded === "full",
		"rounded-sm": rounded === "sm",
		"rounded-lg": rounded === "lg",
		"rounded-xs": rounded === "xs",
		"rounded-base": rounded === "none",
	});

	return {
		filled: $filledStyle,
		outlined: $outlinedStyle,
	};
};
