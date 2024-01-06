import AppBody from "./components/AppBody";
import Inbox from "./components/Inbox";
import Mainmail from "./components/Mainmail";
import Navbartop from "./components/Navbar";
import Logincard from "./components/loginPage";
import { createBrowserRouter,RouterProvider} from 'react-router-dom';

const router=createBrowserRouter([
  {path:'/',element:<Logincard/>},
  {path:'/appbody',element:<AppBody/>},
  {path:'/compose',element:<Mainmail/>},
  {path:'/inbox',element:<Inbox/>},
])

function App() {
  return (
    <div >
      <Navbartop/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
