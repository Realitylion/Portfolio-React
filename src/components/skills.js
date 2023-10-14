import "../styles/skills.css";

function Skills() {
    return (
        <>
            <div className='skills mt-0'>
                <div className="skills-font py-5">
                    I am proficient in
                </div>
                <div className="skills-list container-fluid d-flex flex-column flex-wrap pb-5">
                    <div className="row">
                        <div className="col-sm-4 col-6">
                            <button>Python</button>
                        </div>
                        <div className="col-sm-4 col-6">
                            <button>Java</button>
                        </div>
                        <div className="col-sm-4 col-6">
                            <button>React</button>
                        </div>
                        <div className="col-sm-4 col-6">
                            <button>HTML</button>
                        </div>
                        <div className="col-sm-4 col-6">
                            <button>Firebase</button>
                        </div>
                        <div className="col-sm-4 col-6">
                            <button>Next.js</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;