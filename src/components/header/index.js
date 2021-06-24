import React from 'react';

const Header = () => {

    return(

        <div className="p-3 text-center bg-dark">

            <h1 className = "mb-3 text-light">William Farnsworth</h1>
            <h4 className = "mb-2 text-light">Web Developer</h4>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-light" aria-current="page" href="">Home</a>
                        <a className="nav-link active text-light" href="">Projects</a>
                        <a className="nav-link active text-light" href="">Pricing</a>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header