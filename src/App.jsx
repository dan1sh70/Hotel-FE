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
<<<<<<< HEAD
        <Route path="/" element={<HomePage />} /> //yes res
         <Route path="/about-us" element={<AboutUs />} />  //yes res
        <Route path="/confirmation" element={<Confirmation />} /> //yes res
        <Route path="/details" element={<SingleRoomDetails />} /> //yes res
        <Route path="/rooms" element={<Rooms />} /> //yes res
        <Route path="/roomlist" element={<RoomList />} />     //yes
=======
        <Route path="/" element={<HomePage />} /> //1
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/confirmation" element={<Confirmation />} /> //5
        <Route path="/details" element={<SingleRoomDetails />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomlist" element={<RoomList />} />     //2
>>>>>>> 55cdd9dedfbfe59e9fa9684571205fee11f4a8f0
        <Route path="/booking" element={<BookingInformation />} />
        <Route path="/contact" element={<Contact />} /> //yes res
        <Route path="/room-details" element={<DetailsPage/>}/> //yes

        {/* Default / Fallback route */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* Footer should be visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
