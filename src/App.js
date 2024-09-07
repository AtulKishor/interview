import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

// components
import Navbar from "./Component/Navbar";
// pages
import Homepage from "./Pages/Homepage";
import DetailsPage from "./Pages/DetailsPage";
import { Error } from "./Pages/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        // default home page
        {index:true, element: <Homepage />}, 
        // Product details page
        {path:"/detailspage", element: <DetailsPage />},
        // about page        
        {path:"/about", element: <p>About page</p>},
      ]
    }
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
