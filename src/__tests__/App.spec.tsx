import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  it('renders the initial count value', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Count/i }); // Use getByRole to retrieve a single button

    expect(button).toBeInTheDocument();
  });

  it('increments count value on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Count/i }); // Use getByRole

    fireEvent.click(button);

    expect(button.textContent?.replace(/\u00a0/g, ' ')).toBe('Count 1');
  });

  it('renders documentation links', () => {
    render(<App />);
    const links = screen.getAllByRole('link');

    const viteLink = links.find(
      (link) => link.getAttribute('href') === 'https://vite.dev',
    );
    const reactLink = links.find(
      (link) => link.getAttribute('href') === 'https://react.dev',
    );

    expect(viteLink).toBeTruthy();
    expect(reactLink).toBeTruthy();
  });
});
