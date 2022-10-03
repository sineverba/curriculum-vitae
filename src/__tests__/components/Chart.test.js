import { render, screen } from '@testing-library/react';
import Chart from "../../components/Chart";

describe('Test Chart', () => {

    const options = {
        title: {
            text: 'FooBarBaz'
        },
        series: [{
            data: [1, 2, 3]
        }],
        accessibility: {
            enabled: false,
        }
    }

    it('Can render chart', () => {
        render(<Chart options={options} />);
        const title = screen.getByText(/foobarbaz/i);
        expect(title).toBeInTheDocument();
    });
});