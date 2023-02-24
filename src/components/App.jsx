import { Routes, Route } from 'react-router-dom';
import Calculator from '../routes/Calculator';
import Home from '../routes/Home';
import NotMatch from '../routes/NotMatch';
import Quote from '../routes/Quote';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
