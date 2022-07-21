import { render, screen } from '@testing-library/react';
import { Header } from '../../components/Header';

describe('Header Component', () => {
	it('renders correctly', () => {
		const { container } = render(<Header />);

		expect(container).toMatchSnapshot();
	});

	it('shows the searchbar', () => {
		render(<Header />);

		const input = screen.getByPlaceholderText('Search Games');

		expect(input).toBeInTheDocument();
	});
});
