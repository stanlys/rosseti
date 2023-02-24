import { Box } from "@mui/material";
// import "~antd/dist/antd.variable.min.css";
import MapComponent from "@terrestris/react-geo/dist/Map/MapComponent/MapComponent";
import LayerTree from "@terrestris/react-geo/dist/LayerTree/LayerTree";
import MapContext from "@terrestris/react-geo/dist/Context/MapContext/MapContext";
import { useMap } from "@terrestris/react-geo/dist/Hook/useMap";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOsm from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import OlSourceTileWMS from "ol/source/TileWMS";
import BackgroundLayerChooser from "@terrestris/react-geo/dist/BackgroundLayerChooser/BackgroundLayerChooser";

import React from "react";
const layers = [
  new OlLayerTile({
    source: new OlSourceOsm(),
    properties: {
      name: "OSM",
      isBackgroundLayer: true,
    },
  }),
  new OlLayerTile({
    visible: false,
    source: new XYZ({
      url: "https://core-sat.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}&scale=1&lang=ru_RU",
      maxZoom: 19,
    }),
    properties: {
      name: "PKK",
      isBackgroundLayer: true,
    },
  }),
];
const openlayersMap = new OlMap({
  view: new OlView({
    center: [801045, 6577113],
    zoom: 9,
  }),
  layers,
});

const ObjectMap = () => {
  const map = useMap();

  React.useEffect(() => {
    if (map != null) map.setTarget("usemap-map");
  }, []);

  return (
    <MapComponent
      id={"usemap-map"}
      map={map as OlMap}
      style={{
        height: "400px",
      }}
    />
  );
};

const BackgroundChooserExample = () => {
  return (
    <MapContext.Provider value={openlayersMap}>
      <ObjectMap />
      <BackgroundLayerChooser layers={layers} />
    </MapContext.Provider>
  );
};

export default BackgroundChooserExample;
