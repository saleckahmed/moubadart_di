import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import EventIftar from "./pages/events/EventIftar";
import EventIftarOne from "./pages/events/fridays/EventIftarOne";
import EventIftarTwo from "./pages/events/fridays/EventIftarTwo";
import EventIftarThree from "./pages/events/fridays/EventIftarThree";
import EventIftarFour from "./pages/events/fridays/EventIftarFour";
import Members from "./pages/Members";
import Sikayat from "./pages/Sikayat";

function App() {
  return (
    <>
     
      <Navbar />
      <Routes>
        <Route path="/moubadart_di" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/iftar" element={<EventIftar />} />
        <Route path="/events/iftar/1" element={<EventIftarOne />} />
        <Route path="/events/iftar/2" element={<EventIftarTwo />} />
        <Route path="/events/iftar/3" element={<EventIftarThree />} />
        <Route path="/events/iftar/4" element={<EventIftarFour />} />
        <Route path="/events/sikayat" element={<Sikayat />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </>
  );
}

export default App;
