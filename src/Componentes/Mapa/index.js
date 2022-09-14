import * as React from 'react';
import { Map, GeolocateControl, NavigationControl, ScaleControl, useMap } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

<link href='mapbox://styles/gabrieldenti/cl7z5viye002n14o7ismz0kq3' rel='stylesheet' />

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2FicmllbGRlbnRpIiwiYSI6ImNsN2ZpMzhxcDAzbzAzenFpaW8wdHBnbzgifQ.q0SUHizgCROOAfAjlFMzhw';

const Mapa = () => {

    const [viewState, setViewState] = React.useState({
        zoom: 60,

    });

    return (
        <div className="mapa" >
            <h1>Adoção mais próxima</h1>
            <Map

                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                style={{ left: 16, width: 1485, height: 400 }}
                mapStyle="mapbox://styles/gabrieldenti/cl7z5viye002n14o7ismz0kq3"
                mapboxAccessToken={MAPBOX_TOKEN}

            >

                <GeolocateControl />
                <NavigationControl />
                <ScaleControl />

            </Map>
        </div>

    )
}


export default Mapa