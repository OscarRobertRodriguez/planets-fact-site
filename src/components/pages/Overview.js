import {useParams, useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from 'styled-components'
import MobilePlanetNav from "../MobilePlanetNav";
import IconSource from '../../assets/icon-source.svg';
import data  from '../../data.js';


const Overview = () => {
    const {planet} = useParams();
    const location = useLocation();

    const planetData = data.filter(item => item.name.toLowerCase() === planet);


    return (
        <section>
            <MobilePlanetNav />
            {planetData.map(item => {
                return (
                    <div key={item.name}>
                        <div>
                          <img src={item.images.planet} alt="hello"/>
                        </div>
                        <h1>{item.name}</h1>
                        <p>{item.overview.content}</p>
                        <div>
                          <span>Sources:</span>
                          <a href={item.overview.source}>Wikipedia</a>
                           <img src={IconSource} alt='icon source' />
                        </div>
                    </div>
                )
            })}


        </section>
    )
}

export default Overview;