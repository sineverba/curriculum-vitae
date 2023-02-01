import { screen, waitFor } from '@testing-library/react';
import App from '../../views/App';
import { renderWithProviders } from '../__utils__/test-utils';

describe('Test App', () => {

  it('Can render App without crashing', async () => {
    renderWithProviders(<App />);
    await waitFor(() => {
      const database = screen.getByText(/mysql/i);
      expect(database).toBeInTheDocument();
      const framework = screen.getByText(/laravel/i);
      expect(framework).toBeInTheDocument();
    });
  });
});
