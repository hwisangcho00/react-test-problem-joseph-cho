// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories

import { within, userEvent } from '@storybook/testing-library';

import React from 'react';

import App from './App.js';

export default {
    title : 'App',
    component: App,
}

const Template = () => <App/>;

export const DefaultPage = Template.bind({});

export const OneClick = Template.bind({});
OneClick.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByRole('button');
    await userEvent.click(button);
}

export const TwoClick = Template.bind({});
TwoClick.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByRole('button');
    await userEvent.click(button);
    await userEvent.click(button);

}