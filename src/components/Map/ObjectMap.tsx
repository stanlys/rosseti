import { Box } from "@mui/material";
// import "~antd/dist/antd.variable.min.css";
import MapComponent from "@terrestris/react-geo/dist/Map/MapComponent/MapComponent";
import LayerTree from "@terrestris/react-geo/dist/LayerTree/LayerTree";
import MapContext from "@terrestris/react-geo/dist/Context/MapContext/MapContext";
import { useMap } from "@terrestris/react-geo/dist/Hook/useMap";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import { Vector as VectorLayer } from "ol/layer";
import OlSourceOsm from "ol/source/OSM";
import { Vector } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";
import LayerSwitcher from "@terrestris/react-geo/dist/LayerSwitcher/LayerSwitcher";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";

import XYZ from "ol/source/XYZ";
import OlSourceTileWMS from "ol/source/TileWMS";
import BackgroundLayerChooser from "@terrestris/react-geo/dist/BackgroundLayerChooser/BackgroundLayerChooser";

import React from "react";
import { MY_PATH } from "./MOCK_MAP";

const styles = {
  LineString: new Style({
    stroke: new Stroke({
      color: "green",
      width: 1,
    }),
  }),
  MultiLineString: new Style({
    stroke: new Stroke({
      color: "green",
      width: 1,
    }),
  }),
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: "yellow",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(255, 255, 0, 0.1)",
    }),
  }),
  Polygon: new Style({
    stroke: new Stroke({
      color: "blue",
      lineDash: [4],
      width: 3,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  }),
  Circle: new Style({
    stroke: new Stroke({
      color: "red",
      width: 2,
    }),
    fill: new Fill({
      color: "rgba(255,0,0,0.2)",
    }),
  }),
};

const vectorSource = new Vector({
  features: new GeoJSON().readFeatures(MY_PATH),
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: styles.LineString,
});

const layers = [
  new OlLayerTile({
    source: new OlSourceOsm(),
    properties: {
      name: "OSM",
      isBackgroundLayer: false,
    },
  }),
  vectorLayer,
  new OlLayerTile({
    visible: false,
    source: new XYZ({
      url: "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=1&lang=ru_RU",
      // urls: [
      //   "https://core-sat.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}&scale=1&lang=ru_RU",
      //   "https://core-renderer-tiles.maps.yandex.net/tiles?l=skl&x={x}&y={y}&z={z}&scale=1&lang=ru_RU",
      // ],
      maxZoom: 19,
    }),
    properties: {
      name: "Yandex",
      isBackgroundLayer: true,
    },
  }),
  new OlLayerTile({
    visible: true,
    source: new XYZ({
      url: "https://core-sat.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}&scale=1&lang=ru_RU",
      maxZoom: 19,
    }),
    properties: {
      name: "Космоснимки",
      isBackgroundLayer: true,
    },
  }),
];

const openlayersMap = new OlMap({
  view: new OlView({
    center: [4428591.824187, 6720605.980535],
    zoom: 9,
  }),
  layers: [vectorLayer],
});

const ObjectMap = () => {
  const map = useMap();

  React.useEffect(() => {
    if (map != null) map.setTarget("usemap-map");
  }, []);

  return (
    <>
      <MapComponent
        lang="ru_RU"
        id={"usemap-map"}
        map={map as OlMap}
        style={{
          height: "70vh",
        }}
      />
      <LayerSwitcher
        layers={layers}
        map={map as OlMap}
        style={{
          position: "relative",
          bottom: "80px",
          left: "0px",
          zIndex: 2,
        }}
      />
    </>
  );
};

const OMap = () => {
  return (
    <MapContext.Provider value={openlayersMap}>
      <ObjectMap />
    </MapContext.Provider>
  );
};

export default OMap;
