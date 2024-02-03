import type { Meta, StoryObj } from "@storybook/react";
import { Typograhpy } from "..";

const meta = {
	title: "Typography",
	component: Typograhpy,
} satisfies Meta<typeof Typograhpy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults: Story = {
	args: {
		variant: "h1",
		children: "Hello World",
	},
};
