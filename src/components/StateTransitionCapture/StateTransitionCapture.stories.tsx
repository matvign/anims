import { StoryObj, Meta } from "@storybook/react";

import { StateTransition } from "./StateTransitionCapture";

const meta = {
  title: "StateTransitionCapture",
  component: StateTransition,
} satisfies Meta<typeof StateTransition>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
