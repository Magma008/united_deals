import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Header_bottom from "./components/header_bottom/Header_bottom"
import Header_top from "./components/header_top/Header_top"
import Home from "./pages/home/Home"
import SinglePage from "./pages/singlePage/SinglePage"
import Categories from "./pages/categories/Categories"
import Electronics from "./pages/electronics/Electronics"
import Zara from "./pages/zara/Zara"
import SignUpPage from "./pages/signUpPage/SignUpPage"

const App = () => {
  return (
    <div>
      <Header_top/>
      <Header/>
      <Header_bottom/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/singlePage/:id" element={<SinglePage/>} />
        <Route path="/allCategories" element={<Categories/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/zara/:id" element={<Zara/>} />
        <Route path="/signUp" element={<SignUpPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
