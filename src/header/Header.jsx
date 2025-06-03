
import React, {useState} from "react";
import {motion} from "motion/react";
import './Header.css';

export default function Header(){

    const [menuVisible, setMenuVisible] = useState('menu hidden');

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return(
        <div className='header'>
            <div className="navbar">
                <div className="navbar__logo" style={{color: 'white'}}></div>
                <div className="button_hamburger" onClick={toggleMenu}>
                    <div className="button__bar"></div>
                    <div className="button__bar"></div>
                    <div className="button__bar"></div>
                </div>
            </div>
            <div className={`navbar__menu ${!menuVisible ? 'visible' : 'hidden'}`}>
                <div className="navbar__container">
                    <div className="menu__button home">Home</div>
                    <div className="menu__button intro">Introduction</div>
                    <div className="menu__button skill">Skill</div>
                </div>
            </div>
            <div className="home__page">
                <div className="home__body">
                    <motion.a
                        initial={{opacity: 0, y: "-50px"}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.3}}
                        viewport={{once: true}}
                    >
                    Welcome to 
                    <br></br>my portfolio site
                    </motion.a>
                </div>
            </div>
        </div>
    );
}