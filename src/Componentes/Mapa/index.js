import * as React from 'react';
import { Map, GeolocateControl, NavigationControl, ScaleControl, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

<link href='mapbox://styles/gabrieldenti/cl7z5viye002n14o7ismz0kq3' rel='stylesheet' />

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2FicmllbGRlbnRpIiwiYSI6ImNsN2ZpMzhxcDAzbzAzenFpaW8wdHBnbzgifQ.q0SUHizgCROOAfAjlFMzhw';

const Mapa = () => {

    const [viewState, setViewState] = React.useState({
        latitude: -20.33639681975421,
        longitude: -40.29361656519826,
        zoom: 16

    });


    const geolocateControlRef = React.useCallback((ref) => {
        if (ref) {

            ref.trigger();

        }
    }, []);

    const [showPopup, setShowPopup] = React.useState(true);


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
                <Marker longitude={-40.28830700265175} latitude={-20.342103648037153} color="red" />
                <Marker longitude={-40.298649709218736} latitude={-20.336843805083163} color="red" />
                <Marker longitude={-40.30012385219876} latitude={-20.301592252791156} color="red" />
                <Marker longitude={-40.37366148053922} latitude={-20.354609848476812} color="red" />
                <Marker longitude={-40.34503692314379} latitude={-20.44862829573376} color="red" />
                <Marker longitude={-40.29361656519826} latitude={-20.33639681975421} color="red" />
                {showPopup && (
                    <Popup longitude={-40.29361656519826} latitude={-20.33639681975421}
                        anchor="bottom"
                        onClose={() => setShowPopup(false)}>
                        Você está aqui
                    </Popup>)}
                <GeolocateControl ref={geolocateControlRef} />
                <NavigationControl
                    visualizePitch {...(true)}
                />
                <ScaleControl />

            </Map>
        </div>

    )
}


export default Mapa