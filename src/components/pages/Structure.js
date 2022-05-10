import MobilePlanetNav from "../MobilePlanetNav";
import {useParams} from "react-router-dom";

const Structure = () => {
    let {planet} = useParams();
    return (
        <section>
            <MobilePlanetNav />
            <h1 style={{color: 'white', fontSize: '50px'}}>Structure {planet}</h1>
        </section>
    )
};

export default Structure;