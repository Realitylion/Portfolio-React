import "../styles/projects.css";

function Projects() {
    return (
        <div className='container-fluid projects p-0'>
            <div className="d-flex flex-row flex-wrap p-5 align-items-center">
                <div className="projects-title col-12">
                    My Projects
                </div>
                <div className="row d-flex flex-row flex-wrap p-3 align-items-center">
                    <div className="col-md-2 col-0"></div>
                    <div className="col-md-5 col-8 projects-text-right">
                        <div className="project-name-right m-0">
                            Cinemate
                        </div>
                        <div className="projects-description p-0">
                            Developed and implemented the voting feature and backend functionality for Cinemate, a
                            web application designed to facilitate movie selection for families and groups of friends.
                            Collaborated on the integration of a recommendation model, which generated movie
                            options based on the combined preferences of each member.
                        </div>
                        <div className="projects-link-button p-0">
                            <a href="https://cinemate.co.in" target="_blank" rel="noreferrer"
                            style={{textDecoration:"none", color: "inherit"}}>
                                <button type="button" className="btn btn-outline-dark">View Project</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 p-0">
                        <img src="https://cdn.discordapp.com/attachments/1148952235431178302/1162792595957751878/cinemate_logo_main.png?ex=653d39fe&is=652ac4fe&hm=5fe74d21b23f1d58946d11905672bd7b9f01add9910c40e1047bedaac67390c2&" 
                        alt="cinemate" className="img-fluid" id="projects-pic" />
                    </div>
                    <div className="col-md-1 col-0"></div>
                </div>
                <div className="row d-flex flex-row flex-wrap p-3 align-items-center">
                    <div className="col-md-1 col-0"></div>
                    <div className="col-4 p-0">
                        <img src="https://cdn.discordapp.com/attachments/1148952235431178302/1162805713828053053/image.png?ex=653d4636&is=652ad136&hm=e6e792a7194124e268e1f028484b7904950468e957842c71f02a39427dda8825&" 
                        alt="CRUDman" className="img-fluid" id="projects-pic" />
                    </div>
                    <div className="col-md-5 col-8 projects-text-left">
                        <div className="project-name-left m-0">
                            CRUDman
                        </div>
                        <div className="projects-description p-0">
                        This is a simple CRUD (Create, Read, Update, Delete) application built with React.js. The application allows users to manage a list of items, including adding new items, updating existing ones, and deleting them.
                        </div>
                        <div className="projects-link-button p-0">
                            <button type="button" className="btn btn-outline-dark">
                                <a href="https://crud-react-test-ro4nvwl4x-realitylion.vercel.app/" target="_blank" rel="noreferrer"
                                style={{textDecoration:"none", color: "inherit"}}>
                                    View Project
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-2 col-0"></div>
                </div>
                
            </div>
        </div>
    );
}

export default Projects;