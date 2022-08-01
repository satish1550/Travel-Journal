import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSafari } from "@fortawesome/free-brands-svg-icons"

export default function Header() {
    return(
        <div className="header">
            <h1><FontAwesomeIcon icon={faSafari} />Travel Journal</h1>
        </div>
    )
}