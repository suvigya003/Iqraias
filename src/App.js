import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import CurrentAffairs from './components/currentAffairs/Main';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/currentAffairsArticle/Main';
import { ThemeProvider } from '@mui/material';
import {theme} from './theme';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <CurrentAffairs />
     <Main/>
       {/* <Routes>
        <Route path="/" element={<CurrentAffairs />}></Route>
        <Route path="/dailyNews/28Sep" element={<Main />}></Route>
        </Routes> */}
    </BrowserRouter>    
    </ThemeProvider>
     
    </>
  );
}

export default App;
