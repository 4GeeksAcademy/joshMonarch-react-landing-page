const Header = () => {
    return (
        <header className="position-fixed w-100 top-0 z-3 fs-lg-1">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark h-100">
                <a href="# " className="navbar-brand ps-3 display-lg-1">My Landing Page</a>
                <button className="navbar-toggler pe-3" type="button" data-bs-toggle="collapse" data-bs-target="#navBarNav" aria-controls="navBarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBarNav">
                    <div className="navbar-nav ms-auto px-3 bg-dark">
                        <a className="nav-item nav-link active" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">About</a>
                        <a className="nav-item nav-link" href="#">Services</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;