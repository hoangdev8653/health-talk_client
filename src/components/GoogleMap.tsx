"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 15.8778259,
  lng: 108.3702659,
};

const GoogleMapComponent: React.FC = () => {
  const googleMapsApiKey = process.env
    .NEXT_PUBLIC_API_KEY_GOOGLE_MAPS as string;

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
