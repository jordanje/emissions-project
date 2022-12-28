/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    render(<Greeting />);
    const helloWorld = screen.getByText('Hello World', {exact: false});
    expect(helloWorld).toBeInTheDocument();
  });

  test('renders Its good to see you! if button was NOT clicked', () => {
    render(<Greeting />);
    const greetingMessage = screen.getByText("It's good to see you!");
    expect(greetingMessage).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const greetingMessage = screen.getByText('Changed!');
    expect(greetingMessage).toBeInTheDocument();
  });

  test('does not render Its good to see you! if button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const greetingMessage = screen.queryByText("It's good to see you!");
    expect(greetingMessage).toBeNull();
  })

});

