import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home Pages
import HomePage from "./Page/HomePage";
import AboutUs from "./Page/AboutUs";
import Confirmation from "./Page/Confirmation";
import RoomList from "./Page/RoomList";
import RoomDetails from "./Page/RoomDetails";
import Rooms from "./Page/Rooms"; 
import BookingInformation from "./Page/BookingInformation";   
import Contact from "./Page/Contact";

// Layout
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import DetailsPage from "./Page/DetailsPage";
import SingleRoomDetails from "./Components/SingleRoomDetails";

function App() {
  return (
    <Router>
      {/* Header should be visible on all pages */}
      <Header />

      {/* Main routes (page content changes here) */}
      <Routes>
        <Route path="/" element={<HomePage />} /> //yes res up
         <Route path="/about-us" element={<AboutUs />} />  //yes res up
        <Route path="/confirmation" element={<Confirmation />} /> //yes res up
        <Route path="/details/:roomId" element={<SingleRoomDetails />} /> //yes res up
        <Route path="/roomlist" element={<Rooms />} /> //yes res up
        <Route path="/rooms" element={<RoomList />} />     //yes res up
        <Route path="/booking" element={<BookingInformation />} />
        <Route path="/contact" element={<Contact />} /> //yes res up
        <Route path="/room-details/:roomId" element={<DetailsPage/>}/> //yes res up

        {/* Default / Fallback route */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* Footer should be visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
