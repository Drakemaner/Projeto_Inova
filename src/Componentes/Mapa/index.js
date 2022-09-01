import * as React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2FicmllbGRlbnRpIiwiYSI6ImNsN2ZpMzhxcDAzbzAzenFpaW8wdHBnbzgifQ.q0SUHizgCROOAfAjlFMzhw';



const Mapa = () => {

    const [viewState, setViewState] = React.useState({
        longitude: -40.28528570945985,
        latitude: -20.333264204325932,
        zoom: 16
    });


    return (
        <div className="mapa" >
            <h1>Adoção mais próxima</h1>
            <Map
                mapboxAccessToken={MAPBOX_TOKEN}
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                style={{ left: 16, width: 1485, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker longitude={-40.28528570945985} latitude={-20.333264204325932} color="red" />
            </Map>
        </div>

    )
}



export default Mapa