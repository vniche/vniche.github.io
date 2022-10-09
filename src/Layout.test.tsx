import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Layout from './Layout';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Layout />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
