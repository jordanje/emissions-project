import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Signup from './Signup';

describe('Signup componenet', () => {
  test('should allow user to sign up using credentials', () => {
    render(<Signup />)

    const firstnameField = screen.getAllByPlaceholderText('First Name')
    const lastnameField = screen.getAllByPlaceholderText('Last Name')
    const emailField = screen.getByPlaceholderText('Email')
    const passwordField = screen.getByPlaceholderText('Password');
    const submitBtn = screen.getByText('Sign up')


    userEvent.type(firstnameField, 'Jordan');
    userEvent.type(lastnameField, 'Jennings')
    userEvent.type(emailField, 'jojo@gmail.com');
    userEvent.type(passwordField, '1234');
    userEvent.click(submitBtn);

    expect(submit).toHaveBeenCalledWith({
      email: 'jojo@gmail.com',
      password: '1234'
    })
  })
})