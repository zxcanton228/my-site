import {
	HashRouter,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Preloader from "./components/Preloader/Preloader"
import ProjectsDetails from "./components/Projects/ProjectDetails/ProjectsDetails"
import Projects from "./components/Projects/Projects"
import Contacts from "./components/TextComponents/Conacts/Contacts"
import Skils from "./components/TextComponents/Skils/Skils"
import "./main/reset.css"
import "./main/vars.css"

function App() {
	return (
		<>
			<Router>
				<HashRouter basename='/'>
					<Header />
					<Preloader />

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='projects' element={<Projects />} />
						<Route path='project' element={<ProjectsDetails />} />
						<Route path='contacts' element={<Contacts />} />
						<Route path='skils' element={<Skils />} />
						<Route path='/Project/:id' element={<ProjectsDetails />} />

						<Route
							path='*'
							element={<div className='notFound'>Not Found...</div>}
						/>
					</Routes>

					<Footer />
				</HashRouter>
			</Router>
		</>
	)
}

export default App
