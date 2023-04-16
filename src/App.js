import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import {   Container } from './components/index';
import {Header, Footer} from './sections/index';
import {Home , Browse, Details} from './Pages/index'

const App = () => {
    
    return( 
        <>
        <Router>
            <Header/>
            <Container> 
                asdasd
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/browse' element={<Browse/>} />
                    <Route path='/details' element={<Details/>} />
                </Routes>
                dsadsa
            


            </Container>
            <Footer/>

        </Router>
    </>   
    )
}
export default App;

/*  <>
        <Router>
            <Header/>
            <Container> 
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/profile' element={<Profile/>} />
                </Routes>
            


            </Container>
            <Footer/>

        </Router>
    </>        
*/
