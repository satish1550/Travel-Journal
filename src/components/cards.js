
export default function Cards(porps) {
    return (
        <div>
            <img  
                src={require(`../images/${porps.imageUrl}`)} 
                alt="images" 
                className="images"
            />
            <p className="location">{porps.location}</p>
            <p>
                <a 
                    href={`${porps.googleMapsUrl}`}
                    className="googleMaps" 
                    >View on Google Maps
                </a>
            </p>
                <h3 className="title">{porps.title}</h3>
            <p>
                <h4 className="stardate">{porps.startDate} </h4>
            </p>
            <p className="data">{porps.description}</p>
        </div>
    )
}