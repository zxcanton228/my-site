import "./Cards.css"
import { allProjects } from "../../../data"
import Card from "./Card/Card"
const Cards = () => {
	return (
		<div className='cards justify-content-center'>
			{allProjects.map(crd => {
				return <Card crd={crd} key={crd.id} />
			})}
		</div>
	)
}

export default Cards
