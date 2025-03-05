import { StoryObj, Meta } from "@storybook/react";

import { StateTransition } from "./StateTransition";

const meta = {
  title: "StateTransition",
  component: StateTransition,
} satisfies Meta<typeof StateTransition>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
