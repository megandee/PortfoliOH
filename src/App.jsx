import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from './components/portfolio/Portfolio';
import Menu from "./components/menu/Menu";
import Modal from './components/modal/Modal';
import "./app.scss";
import { useState } from 'react';


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null); 

  const openModal = (item) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio openModal={openModal}/>
     </div>
     {isModalOpen && currentItem && <Modal item={currentItem} closeModal={closeModal} />}
    </div>
  );
}
export default App;
