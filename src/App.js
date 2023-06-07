import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/shared/Header";
import { Container } from "react-bootstrap";
import ShowDetails from "./components/ShowDetails";
// import Login from "./components/Login";
import BookShow from './components/BookShow'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
        <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/show/:id/book" element={<BookShow/>} />
              <Route path="/show/:id" element={<ShowDetails/>} />
            </Routes>
        </Container>
        </main>

      </BrowserRouter>
    </div>
  );
}

export default App;
