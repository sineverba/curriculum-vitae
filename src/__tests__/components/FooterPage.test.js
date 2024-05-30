import { screen, waitFor } from "@testing-library/react";
import FooterPage from "@/app/components/common/FooterPage";
import { renderWithProviders } from "../__utils__/test-utils";

describe("Test FooterPage", () => {
  it("Can render FooterPage", async () => {
    renderWithProviders(<FooterPage />);
    await waitFor(() => {
      const version = screen.getByText(/9.8.7/i);
      expect(version).toBeInTheDocument();
    });
  });
});
