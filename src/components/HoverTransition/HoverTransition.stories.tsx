import { Meta, StoryObj } from "@storybook/react";
import { HoverTransition } from "./HoverTransition";

const meta = {
  title: "HoverTransition",
  component: HoverTransition,
} satisfies Meta<typeof HoverTransition>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
