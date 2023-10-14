import "../styles/footer.css";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";  

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="d-flex flex-row justify-content-center">
                <div className="col-md-3 col-0 p-2"></div>                
                <div className="col-md-2 col-4 p-2">
                    <a href="mailto:dhanushbaalaji123@gmail.com" target="_blank" rel="noreferrer"
                    style={{textDecoration:"none", color: "inherit"}}>
                        <AiFillMail size={30} />
                    </a>
                </div>
                <div className="col-md-2 col-4 p-2">
                    <a href="https://github.com/Realitylion" target="_blank" rel="noreferrer"
                    style={{textDecoration:"none", color: "inherit"}}>
                        <AiFillGithub size={30} />
                    </a>
                </div>
                <div className="col-md-2 col-4 p-2">
                    <a href="https://www.linkedin.com/in/dhanush-baalaji-k-719849233/" target="_blank" rel="noreferrer"
                    style={{textDecoration:"none", color: "inherit"}}>
                        <AiFillLinkedin size={30} />
                    </a>
                </div>
                <div className="col-md-3 col-0 p-2"></div>
            </div>
        </div>
    );
}

export default Footer;