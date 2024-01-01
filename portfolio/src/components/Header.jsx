
// import { Link, NavLink } from 'react-router-dom';



const Header = () => {
    return (
        // <header className="sticky top-0 shadow-lg bg-dark">
        <nav className="navbar navbar-expand-lg sticky bg-dark top-0 shadow">
            <div className="container-fluid">


                <li to="/" className="navbar-brand fs-5 fw-bold text-white">
                    Prerna
                </li>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>




                <div className="collapse navbar-collapse  text-secondary" id="navbarScroll">
                    <ul className="w-75 p-3 d-flex justify-content-evenly align-items-center navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item fs-5 fw-bold">
                            About
                        </li>
                        <li className="nav-item fs-5 fw-bold">
                            Skills
                        </li>
                        <li className="nav-item fs-5 fw-bold">
                            Project
                        </li>


                        <li className="nav-item fs-5 fw-bold">
                            Contact
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        // </header>
    );
}

export default Header;
