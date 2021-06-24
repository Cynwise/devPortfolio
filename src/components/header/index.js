import React from 'react';

const Header = () => {

    return(

        <div className="p-3 text-center bg-dark row-12">

            <h1 className = "mb-3 text-light">William Farnsworth</h1>
            <h4 className = "mb-2 text-light">Web Developer</h4>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <div className="container row" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center col">
                        <a className="nav-link active text-light max-vw-25" href="">About Me</a>
                    </div>
                    <div className="navbar-nav text-center col">
                        <a className="nav-link active text-light max-vw-25" href="">Projects</a>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header