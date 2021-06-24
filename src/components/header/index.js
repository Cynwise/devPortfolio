import React from 'react';

const Header = () => {

    return(

        <div className="p-3 text-center bg-dark">

            <h1 className = "mb-3 text-light">William Farnsworth</h1>
            <h4 className = "mb-2 text-light">Web Developer</h4>

            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active text-light" aria-current="page" href="">Home</a>
                        <a class="nav-link active text-light" href="">Projects</a>
                        <a class="nav-link active text-light" href="">Pricing</a>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header