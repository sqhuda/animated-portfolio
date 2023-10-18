import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return(
        <div className="navbar">
            
            <div className="wrapper">
                <motion.span>
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