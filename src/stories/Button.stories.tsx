import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "components/Header";

export default {
  title: "components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => (
  <Header {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isBlogStripOpen: false,
};
