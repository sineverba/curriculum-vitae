import { screen, waitFor } from '@testing-library/react';
import App from '../../views/App';
import { renderWithProviders } from '../__utils__/test-utils';
import { rest } from "msw";
import { server } from "../__mocks__/api/server";
import { items as databases } from "../__mocks__/responses/databases";

describe('Test App', () => {

  it('Can render App without crashing', async () => {
    rest.get(
      `${process.env.REACT_APP_BACKEND_URL}/databases`,
      (req, res, ctx) => {
        return res(ctx.json(databases));
      }
    )
    renderWithProviders(<App />);
    await waitFor(() => {
      const mysql = screen.getByText(/mysql/i);
      expect(mysql).toBeInTheDocument();
    });
  });

  it ("Can render App without databases", async () => {
    renderWithProviders(<App />);
    await waitFor(() => {
      const github = screen.getByText(/github/i);
      expect(github).toBeInTheDocument();
    });
  });

});
