import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import OrderReview from './Components/OrderReview/OrderReview';
import Main from './layout/Main';
import Shop from './Components/Shop/Shop'
import MangeInventory from './Components/MangeInvertory/MangeInventory';
import { ProductAndcartLoader } from './loaders/ProductsAndCartLoader';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Main></Main>, children:[
        {
          path:'/' ,
          loader:async()=>{
            return fetch('products.json')
          } ,element:<Shop></Shop>
        },
        {
          path:'/manageInventory' , 
          element:<PrivateRoute><MangeInventory></MangeInventory></PrivateRoute>
        },
        {
          path:'/orderReview' ,
          loader:ProductAndcartLoader,
           element:<OrderReview></OrderReview>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/shipping',
          element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
        },

      ]
    },
    



  ]);
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
