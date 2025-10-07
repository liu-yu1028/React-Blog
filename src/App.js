import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import HelpLayout from "./HelpLayout";
import Faq from "./Faq";
import Contact from "./Contact";
import NotFound from "./NotFound";

import { ThemeProvider, ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function App(){
  return (
    <ThemeProvider>
      <Router>
        <MainApp/>
      </Router>
    </ThemeProvider>
  );
}

function MainApp(){
  const { theme } = useContext(ThemeContext);

  return (
      <div className={`App ${theme}`}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="help" element={<HelpLayout />}>
              <Route path="faq" element={<Faq />} />
              <Route path="contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
  );
}


export default App;
