
export default function Tour ({id, name, info, image, price, handleDelete}) {

    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img" />
            <div className="tour-price">${price}</div>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>{info}</p>
                <button className="btn btn-block delete-btn" onClick={()=>handleDelete(id)}>Remove Tour</button>
            </div>
        </article>
    )
}