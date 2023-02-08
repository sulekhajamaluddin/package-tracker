//Node Modules
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function LocationMap({ latitude, longitude }) {
  const mapOptions = {
    googleMapApiKey: process.env.REACT_APP_API_KEY,
  };

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  const center = {
    lat: +latitude,
    lng: +longitude,
  };

  const containerStyle = {
    width: "375px",
    height: "375px",
  };

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    )
  );
}
