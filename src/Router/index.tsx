import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import * as routes from './routes';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={routes.root.path} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
