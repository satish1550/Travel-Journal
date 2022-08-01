
export default function Cards(porps) {
    return (
        <div>
            <img src={`../images/${porps.imageUrl}`} alt="images" className="images"/>

            {/* <span className="images"></span> */}
            {/* <div style={{
                backgroundImage: `url("https://www.pinterest.com/pin/759067712188649015/")`
            }}>
            </div> */}
            <p className="location">{porps.location}</p>
            <p><a className="googleMaps" href='${{porps.googleMapsUrl}}'>  View on Google Maps</a></p>
            <h3 className="title">{porps.title}</h3>
            <p>
                <h4 className="stardate">{porps.startDate} </h4>
            </p>
            <p className="data">{porps.description}</p>
        </div>
    )
}