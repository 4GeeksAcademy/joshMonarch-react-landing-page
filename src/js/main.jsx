import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import CardsContainer from './components/CardsContainer';

const content = () => {
  return (
    <div className='content'>
      <Jumbotron/>
      <CardsContainer/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Header/>
      {content()}
      <Footer/>
    </React.StrictMode>
)
