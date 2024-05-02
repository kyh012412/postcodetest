import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Postcode from './component/Postcode';
import NextPage from './component/NextPage';
import ErrorPage from './component/ErrorPage';
import AddressInput from './component/AddressInput';
import ModalPostCode from './component/ModalPostCode';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Routes>
          <Route path=""></Route>
          <Route path="error" element={<ErrorPage />}></Route>
          <Route path="model1" element={<Postcode />}></Route>
          <Route path="model2" element={<ModalPostCode />}></Route>
          <Route path="model3" element={<AddressInput />}></Route>
          <Route path="nextpage" element={<NextPage />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
