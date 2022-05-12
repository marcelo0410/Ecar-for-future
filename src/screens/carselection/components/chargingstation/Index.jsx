import React,{useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import * as chargingpointData from "../../../../assets/data/cpm_mod.json";
import * as chargingpointData from "./cpm_mod.json";
import style from './style.module.css'
// import 'leaflet/dist/leaflet.css';

export default function Index(props) {
  const melGeo = [-37.814107, 144.96328]
  const zoomSize = 13
  const data = require('./cpm_mod.json')
  useEffect(() => {
    console.log(props.coordinate)
  
    return () => {
      
    }
  }, [props])
  
  return (
    <div>
      {console.log(props.coordinate)}
    <MapContainer center={props.coordinate} zoom={13} scrollWheelZoom={true} className={style.leaflet_container}>
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.features.map(chargingpoint => (
            <Marker
              position={[
                chargingpoint.geometry.coordinates[0],
                chargingpoint.geometry.coordinates[1]
              ]}>
                <Popup>
                  Name: {chargingpoint.properties.name}<br />
                  Address: {chargingpoint.properties.address}<br />
                  Station numbers: {(chargingpoint.properties.stations).length}
                  </Popup>
                </Marker>
          ))}

    </MapContainer>
    </div>
      );
}
