import { Link } from "react-router-dom";

function Home() {
    return ( 
        <>
            <div className="main-container">
                <div className="identity">
                    <div className="image-container">
                       
                    </div>
                    <h1>Leonardo M. Rubuz</h1>
                    <h2>Software Engineer</h2>
                </div>
                <button>
                    <Link to="/get-in-touch" target="_blank">
                        Talk to me
                    </Link>
                </button>
                <h2>Kinshasa, DRC</h2>
                <hr />
                {/* <div className="socials">
                    <div className="social-icon">
                        <img src="/" alt="" />
                    </div>
                    <div className="social-icon">
                        <img src="/" alt="" />
                    </div>
                    <div className="social-icon">
                        <img src="/" alt="" />
                    </div>
                </div> */}
            </div>
        </>
     );
}

export default Home;