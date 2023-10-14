import "../styles/about.css";

function About() {
    return (
        <div className='container-fluid about p-0'>
            <div className="d-flex flex-row flex-wrap">
                <div className="col-md-8 col-12 name-area">
                    <div className="name-text">
                        Hello, I'm 
                        <div className="name">Dhanush Baalaji.K</div>
                        <div className="designation">[ Full Stack Developer ]</div>
                        <button className="btn btn-outline-light btn-lg" id="resume-button">
                            <a href="https://cdn.discordapp.com/attachments/1148952235431178302/1162770369590087800/dhanush_baalaji_k_resume.pdf?ex=653d254b&is=652ab04b&hm=bf7293907b20c9db3f8d392b939949e2aec810cfa6435fe85474b10eeaec37c0&"
                            download rel="noreferrer" target="_blank"
                            style={{textDecoration:"none", color: "inherit"}}>
                                Download Resume
                            </a>
                        </button>
                    </div>
                </div>
                <div className="col-md-4 col-12 p-0">
                    <img src="https://cdn.discordapp.com/attachments/1148952235431178302/1162760483200319599/Profile_Pic_-_cropped.jpeg?ex=653d1c16&is=652aa716&hm=020f34e5ed476204e1f130d201d3f3642e039f1f8e1a9b9243e3d9e16358c012&" 
                    alt="Dhanush Baalaji" className="img-fluid" id="profile-pic" />
                </div>
            </div>
        </div>
    );
}

export default About;