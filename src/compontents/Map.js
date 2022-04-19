import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: props.mapa.lat, lng: props.mapa.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.mapa.lat, lng: props.mapa.lng }} />}
  </GoogleMap>

))

export default MyMapComponent

