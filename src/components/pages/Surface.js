import MobilePlanetNav from "../MobilePlanetNav";
import {useParams} from "react-router-dom";


const Surface = () => {
    let {planet} = useParams();
    return (
        <section>
            <MobilePlanetNav />
            <h1 style={{color: 'white', fontSize: '50px'}}>Surface {planet}</h1>
        </section>
    )
};

export default Surface;