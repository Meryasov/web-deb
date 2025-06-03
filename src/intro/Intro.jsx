
import {React, useRef} from "react";
import {motion, useScroll} from "motion/react";
import "./Intro.css";
import gng from "./gng.jfif";

export default function Intro(){

    return(
        <div className="intro__page">
            <div className="intro__body">
                <motion.div className="intro__info"
                initial={{opacity: 0, y: "-50px"}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.7, delay: 0.3}}
                viewport={{once: true}}
                >
                    <div className="intro__image">
                        <img className="image__dev" src={gng}></img>
                    </div>
                    <div className="intro__text">
                        <a>
                            What's good, gang?
                            <br />My name is Kir.
                            <br />I'm fullstack developer
                            <br/>from Russian Federation.
                            <br />I'm top 1 Jobseeker
                            <br />in Deepwoken.
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}