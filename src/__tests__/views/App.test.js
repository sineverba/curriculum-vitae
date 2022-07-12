import { render, screen } from '@testing-library/react';
import App from '../../views/App';

describe('Test App', () => {

  it('Can render App without crashing', () => {
    render(<App />);
    const github = screen.getByText(/github/i);
    expect(github).toBeInTheDocument();
  });

});
