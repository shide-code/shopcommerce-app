import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "..";

const meta = {
	title: "Icon",
	component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults: Story = {
	args: {
		name: "CheckCircle",
	},
};

export const IconWithSize: Story = {
	args: {
		name: "Download",
		width: 42,
		height: 42,
	},
};

export const IconWithColor: Story = {
	args: {
		name: "Download",
		className: "-text-accent-normal",
	},
};
