import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "..";

const meta = {
	title: "Button",
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "accent",
		rounded: "none",
	},
};

export const Informative: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "informative",
		rounded: "xs",
	},
};

export const Negative: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "negative",
		rounded: "sm",
	},
};

export const Notice: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "notice",
		rounded: "lg",
	},
};

export const Positive: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "positive",
		rounded: "full",
	},
};

export const Disable: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "notice",
		rounded: "lg",
		disabled: true,
	},
};

export const DefaultOutlined: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "accent",
		rounded: "none",
		typeButton: "outlined",
	},
};

export const InformativeOutlined: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "informative",
		rounded: "xs",
		typeButton: "outlined",
	},
};

export const NegativeOutlined: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "negative",
		rounded: "sm",
		typeButton: "outlined",
	},
};

export const NoticeOutlined: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "notice",
		rounded: "lg",
		typeButton: "outlined",
	},
};

export const PositiveOutlined: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "positive",
		rounded: "full",
		typeButton: "outlined",
	},
};

export const DisableOutlined: Story = {
	args: {
		text: "Click ME !!!",
		backgroundTheme: "notice",
		rounded: "lg",
		disabled: true,
		typeButton: "outlined",
	},
};
