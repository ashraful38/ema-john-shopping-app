import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import OrderReview from './Components/OrderReview/OrderReview';
import Main from './layout/Main';
import Shop from './Components/Shop/Shop'
import MangeInventory from './Components/MangeInvertory/MangeInventory';
import { ProductAndcartLoader } from './loaders/ProductsAndCartLoader';


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
          path:'/manageInventory' , element:<MangeInventory></MangeInventory>
        },
        {
          path:'/orderReview' ,
          loader:ProductAndcartLoader,
           element:<OrderReview></OrderReview>
        }
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
