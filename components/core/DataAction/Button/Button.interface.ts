import { ButtonRounded, ButtonTheme, ButtonTypes } from "./Button.types";

export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	backgroundTheme: ButtonTheme;
	customBackgroundTheme?: string;
	typeButton?: ButtonTypes;
	rounded?: ButtonRounded;
	loading?: boolean;
}
