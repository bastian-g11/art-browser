import Loading from '@components/Loading';
import { render, screen } from '@testing-library/react';

describe('Loading component', () => {
  it('renders "Loading..."', () => {
    render(<Loading />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });
});
