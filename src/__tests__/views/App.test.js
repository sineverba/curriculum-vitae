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
      const programmingLanguage = screen.getByText(/php/i);
      expect(programmingLanguage).toBeInTheDocument();
      const tool = screen.getByText(/docker-compose/i);
      expect(tool).toBeInTheDocument();
      const working = screen.getByText(/test drive development/i);
      expect(working).toBeInTheDocument();
    });
  });
});
