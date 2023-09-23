import { render } from '@testing-library/react';
import Layout from './Layout';

test('renders learn react link', () => {
  const { getByText } = render(
    <Layout />
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
