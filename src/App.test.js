// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ServerIota title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ServerIota/i);
    expect(titleElement).toBeInTheDocument();
});
