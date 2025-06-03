
import React from "react";
import {motion} from "motion/react";
import "./Skill.css";

import cpp from "./assets/cpp.png"

export default function Skill() {

    const icons = [cpp];
    
    return(
        <div className="skill__page">
            <div className="skill__body">
                <motion.a
                    initial={{opacity: 0, y: "-50px"}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.3}}
                    viewport={{once: true}}
                >Those are tools and languages I use for development</motion.a>
                <div className="skill__list">
                    <div>
                        <img></img>
                    </div>
                </div>
            </div>
        </div>
    );
}