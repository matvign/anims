import { Meta, StoryObj } from "@storybook/react";
import { NodeTransition } from "./NodeTransition";

const meta = {
  title: "NodeTransition",
  component: NodeTransition,
} satisfies Meta<typeof NodeTransition>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
