
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, Link, RouterProvider,
} from "react-router-dom";

import Register from './Pages/Register';
import Inloggning from './Pages/Inloggning ';
import Step2 from './Pages/Step2'
import MultipleInvoice from './Pages/MultipleInvoice';
import YourFacilities from './Pages/TotalFacilities';
import TotalFacilities from './Pages/TotalFacilities';





function App(props) {

  const costumeRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Inloggning />} />
        <Route path="/component1" element={<Component1 />} />
        <Route path="/component2" element={<Component2 />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route
          path="/fetchdata"
          element={<FetchedData />}
          loader={dataLoader}
        />
      </Route>
    )
  );


  return (
    <div style={{display:"flex",justifyContent:"center",}}>
   
     
    <Inloggning />
        

    </div>
  );
}

export default App;

const Root = () => {

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/component1">Component1</Link>
        <Link to="/component2">Component2</Link>
        <Link to="/header">Header</Link>
        <Link to="/footer">Footer</Link>
        <Link to="/fetchdata">FetchData</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );

} 
