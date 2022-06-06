import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Components/About/About';
import AddInventory from './Components/AddInventory/AddInventory';
import Checkout from './Components/Checkout/Checkout/Checkout';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import Order from './Components/Order/Order';
import InventoryDetail from './Components/InventoryDetail/InventoryDetail';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout/:inventoryId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/addinventory" element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
