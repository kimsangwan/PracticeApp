import React, { Fragment, useState } from "react";
import Breadcrumb from "../Dropzone/breadcrumb";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon,
  Polyline,
} from "google-maps-react";

const GoogleMap = (props) => {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState();
  const [selectedPlace, setSelectedPlace] = useState();

  const polygon = [
    { lat: 37.789411, lng: -122.422116 },
    { lat: 37.785757, lng: -122.421333 },
    { lat: 37.789352, lng: -122.415346 },
  ];

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace({
      selectedPlace: props,
    });
    setActiveMarker({
      activeMarker: marker,
    });
    setShowingInfoWindow({
      showingInfoWindow: true,
    });
  };

  const onMapClicked = (props) => {
    if (showingInfoWindow) {
      setShowingInfoWindow({
        showingInfoWindow: false,
      });
      setActiveMarker({
        activeMarker: null,
      });
    }
  };
  const triangleCoords = [
    { lat: -12.04, lng: -77.03 },
    { lat: -12.04, lng: -77.03 },
    { lat: -12.05, lng: -77.02 },
    { lat: -12.04, lng: -77.02 },
  ];

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h5>Marker Map</h5>
              </div>
              <div className="card-body">
                <div className="map-js-height">
                  <div id="gmap-simple" className="map-block">
                    <Map google={props.google} onClick={onMapClicked} zoom={14}>
                      <Marker
                        onClick={onMarkerClick}
                        name={"Current location"}
                      />
                      <InfoWindow
                        marker={activeMarker}
                        visible={showingInfoWindow}
                      >
                        <div>
                          <h1>{selectedPlace}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCdXpLSJ3Ibdu-Phs9QOvpqb9d1DtPf7wQ",
})(GoogleMap);
