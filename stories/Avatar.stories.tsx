import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props } from '../src';
import Avatar from '../src/atoms/avatar';

const meta: Meta = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Avatar {...args} url={"https://yt3.ggpht.com/a/AGF-l7_RzE-ViNhn23HUhNuk0G1GA83gUg1YGo2GdA=s240-c-k-c0xffffffff-no-rj-mo"} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const AvatarStory = Template.bind({});

AvatarStory.args = {};
