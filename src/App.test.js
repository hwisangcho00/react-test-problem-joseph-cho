import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js

import { DefaultPage } from './App.stories.js';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

test('Checks if the button starts as <click me>', () => {
    render(<DefaultPage/>)

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('click me');

})

test('Checks if the button turns to  as <thanks> after single click', () => {
    render(<DefaultPage/>)

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveTextContent('thanks');

})

test('Checks if the button returns to  as <click me> after two clicks', () => {
    render(<DefaultPage/>)

    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);

    expect(button).toHaveTextContent('click me');

})


test('Checks the state of the button after arbitrary number of clicks', () => {
    render(<DefaultPage/>)

    const button = screen.getByRole('button');

    let cnt = Math.floor(Math.random() * 1000);

    for (let i = 0; i < cnt; i++) {
        fireEvent.click(button);
    }

    if (cnt % 2 == 0) {
        expect(button).toHaveTextContent('click me');
    } else {
        expect(button).toHaveTextContent('thanks');
    }

    

})