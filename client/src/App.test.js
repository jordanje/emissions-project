
/** @jest-environment jsdom */
import '@testing-library/jest-dom';


import { render, screen } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = 'hello';
  expect(screen.getByText(linkElement)).toBeInTheDocument();
});
