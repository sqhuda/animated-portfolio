import Sidebar from "../../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration:1.5}}>
                    Syed Qausain Huda
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/syed-qausain-huda/" target="_blank" rel="noreferrer"><img src="/linkedin.png"></img></a>
                    <a href="https://github.com/sqhuda" target="_blank" rel="noreferrer"><img src="/github.png"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;