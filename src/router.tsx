import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const Router = () => (
  <Routes>
    <Route
      element={
        <Layout />
      }>
      <Route
        index
        element={
          <Landing />
        } />
    </Route>
    <Route path='*' element={<NotFound />} />
  </Routes>
);

export default Router;