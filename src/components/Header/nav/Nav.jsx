import "./Nav.css"
import { NavLink, Link } from "react-router-dom"
const Nav = () => {
	const activeLink = "active"
	const normalLink = ""
	return (
		<>
			<nav className='header__nav container d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-none'>
				<ul>
					<li id='title'>
						<NavLink to='/'>
							<span className='title__ex'>Home</span>Visit
						</NavLink>
					</li>
					<li>
						<NavLink to='/projects'>projects</NavLink>
					</li>
					<li>
						<NavLink to='/contacts'>contacts</NavLink>
					</li>
					<li>
						<NavLink to='/skils'>skils</NavLink>
					</li>
				</ul>
			</nav>
			<div className='hd__min col-12 d-xxl-none d-xl-none d-lg-none d-md-none d-block'>
				<h1 className='title col-12 d-flex justify-content-center'>
					<a href='index.html'>
						<span className='title__ex text-center'>Home</span>
						Visit
					</a>
				</h1>
			</div>
		</>
	)
}

export default Nav
