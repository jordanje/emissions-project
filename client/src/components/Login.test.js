/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login';


describe('Login component', () => {
  test('should have an email and password field', () => {
    render(<Login />);
    
    const emailField = screen.getByPlaceholderText('Email')
    const passwordField = screen.getByPlaceholderText('Password');
    // const submitBtn = screen.getByText('Log in')

    // userEvent.type(emailField, 'jojo@gmail.com');
    // userEvent.type(passwordField, '1234');
    // userEvent.click(submitBtn);

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

  });

  test('should allow the user to submit their credentials', () => {
    const submit = jest.fn();
    render(<Login submit={submit} />);
    
    const emailField = screen.getByPlaceholderText('Email')
    const passwordField = screen.getByPlaceholderText('Password');
    const submitBtn = screen.getByText('Log In')

    userEvent.type(emailField, 'jojo@gmail.com');
    userEvent.type(passwordField, '1234');
    userEvent.click(submitBtn);

    expect(submit).toHaveBeenCalledWith({
      email: 'jojo@gmail.com',
      password: '1234'
    })

  })
})