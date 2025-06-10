import IWidget from "../interfaces/Widget"

const Widget = ({
  isSpecialCard,
  title,
  description,
  rating,
  id,
  createdAt
}: IWidget) => {
  return (
    <div className="col-12 p-3">
      <div className={`card ${isSpecialCard && 'specialCard'}`}>

        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
          <div className="card-text font-italic">Rating: {rating}</div>
        </div>

        <div className="card-footer">
          <span className="float-left"># {id}</span>
          created: {new Date(createdAt).toISOString()}
        </div>

      </div>
    </div>
  )
}

export default Widget