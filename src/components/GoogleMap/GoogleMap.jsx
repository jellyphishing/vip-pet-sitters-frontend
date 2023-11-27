import React, { useEffect, useState } from "react";

const GoogleMap = ({ address }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDxUMDxleuv72lZ_iwW9xy3OK_9u7cQx_0&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.intiMap = () => {
      const newMap = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: { lat: 0, lng: 0 },
          zoom: 2,
        }
      );
      setMap(newMap);

      geocodeAddress(address);
    };

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, [address]);

  const geocodeAddress = (address) => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);

        new window.google.maps.Marker({
          map: map,
          position: location,
        });
      } else {
        console.error(
          "Geocode was not successful for the following reason: ",
          status
        );
      }
    });
  };

  return (
    <div>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
};
export default GoogleMap;
