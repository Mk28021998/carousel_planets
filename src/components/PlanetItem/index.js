// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planets-item-cont">
      <img src={imageUrl} alt={name} className="planets-img" />
      <h1 className="planet-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
