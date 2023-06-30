import './App.css';
import LayoutAdmin from './Components/Layouts/Container/LayoutAdmin/LayoutAdmin';
import LayoutPublic from './Components/Layouts/Container/LayoutPublic/LayoutPublic';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from './Pages/PageLogin/PageLogin';
import PageDashboard from './Pages/PageDashboard/PageDashboard';
import PageHome from './Pages/PageHome/PageHome';

// import Button from './Components/Button/Button'

function App() {
  return (
  <BrowserRouter> 
      <Routes>
      <Route 
      path="/login" 
      element={<PageLogin />} 
      />
       
      <Route 
      path="/admin" 
      element={
      <LayoutAdmin>
          <PageDashboard />
      </LayoutAdmin>} 
      />

      <Route 
      path="/" 
      element={
        <LayoutPublic>
          <PageHome />
      </LayoutPublic>}
      />  

      <Route 
      path="*" 
      element={<h1> error 404: Not found </h1>} 
      />

      </Routes> 
  </BrowserRouter>
  );
}

export default App;
