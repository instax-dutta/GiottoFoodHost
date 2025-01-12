import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CartProvider } from "./context/cartContext"
import Home from "./pages/Home"
import GiottoFoodUk from "./pages/GiottoFoodUk"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"


function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
      
    },
    {
      path:"/giottofood",
      element:<GiottoFoodUk/>
      
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    
    {
      path:"/contact",
      element:<Contact/>
    },
  ])

  return (
    <>
      <CartProvider>
        <RouterProvider router={appRouter}/>
      </CartProvider>
    </>
  )
}

export default App
