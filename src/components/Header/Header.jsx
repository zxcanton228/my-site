import "./Header.css"
import Nav from "./nav/Nav"
import Dark from "./Dark/Dark"
import Header__min from "./Header-min/Header-min"
const Header = () => {
	return (
		<>
			<header className='header col-12'>
				<Nav />

				<Dark />
			</header>
			<Header__min />
		</>
	)
}

export default Header
