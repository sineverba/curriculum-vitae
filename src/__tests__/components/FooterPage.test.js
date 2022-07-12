import { render, screen } from '@testing-library/react';
import FooterPage from "../../components/FooterPage";

describe('Test FooterPage', () => {
    it('Can render FooterPage', () => {
        render(<FooterPage />);
        const version = screen.getByText(/v./i);
        expect(version).toBeInTheDocument();
    });
});