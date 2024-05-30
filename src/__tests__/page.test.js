import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./__utils__/test-utils";
import Page from "@/app/page";

describe("Test Page", () => {
  it("Can render Page without crashing", async () => {
    renderWithProviders(<Page />);
    await waitFor(() => {
      const programmingLanguage = screen.getByText(/php/i);
      expect(programmingLanguage).toBeInTheDocument();
      const framework = screen.getByText(/laravel/i);
      expect(framework).toBeInTheDocument();
      const tool = screen.getByText(/docker-compose/i);
      expect(tool).toBeInTheDocument();
      const database = screen.getByText(/mysql/i);
      expect(database).toBeInTheDocument();
      const working = screen.getByText(/test drive development/i);
      expect(working).toBeInTheDocument();
    });
  });
});
