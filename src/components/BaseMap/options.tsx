export const BaseMapOptions = () => {
  return (
    <>
      <option value={"https://yuiseki.github.io/vector-tile-kosovo/style.json"}>
        🗺 tilemaker (vector)
      </option>
      <option
        value={"https://tile.openstreetmap.jp/styles/osm-bright/style.json"}
      >
        🗺 OSM JP bright (vector)
      </option>
      <option
        value={
          "https://yuiseki.github.io/unmiss-map-vite/styles/HOT/style.json"
        }
      >
        🗺 OSM HOT (raster)
      </option>
      <option
        value={
          "https://yuiseki.github.io/unmiss-map-vite/styles/ArcGIS/World_Imagery/style.json"
        }
      >
        🛰 ArcGIS World Imagery (raster)
      </option>
      <option
        value={
          "https://ubukawa.github.io/ss-styles/styles/clearmapVT-esri.json"
        }
      >
        🗺 ClearMapVT-Esri
      </option>
      <option
        value={"https://ubukawa.github.io/ss-styles/styles/rastertile.json"}
      >
        🗺 ClearMapRaster-Esri
      </option>
      <option
        value={
          "https://ubukawa.github.io/ss-styles/styles/dev-clearmap-plain.json"
        }
      >
        🔒 InternalOnly-ClearMapVT-Plain
      </option>
      <option
        value={
          "https://ubukawa.github.io/ss-styles/styles/dev-clearmap-gray.json"
        }
      >
        🔒 InternalOnly-ClearMapVT-Gray
      </option>
      <option
        value={
          "https://ubukawa.github.io/ss-styles/styles/dev-clearmap-dark.json"
        }
      >
        🔒 InternalOnly-ClearMapVT-Dark
      </option>
      <option
        value={
          "https://ubukawa.github.io/ss-styles/styles/dev-clearmap-modis.json"
        }
      >
        🔒 InternalOnly-ClearMapVT-withModis
      </option>
      <option
        value={"https://ubukawa.github.io/ss-styles/styles/dev-style-std.json"}
      >
        🔒 InternalOnly-UniteStreetMapVT-Standard
      </option>
      <option
        value={"https://ubukawa.github.io/ss-styles/styles/dev-style-prod.json"}
      >
        🔒 InternalOnly-UniteStreetMapVT-Building3D
      </option>
      <option
        value={"https://ubukawa.github.io/ss-styles/styles/dev-style-el.json"}
      >
        🔒 InternalOnly-UniteStreetMapVT-Contour
      </option>
      <option
        value={"https://ubukawa.github.io/ss-styles/styles/dev-style-el2.json"}
      >
        🔒 InternalOnly-UniteStreetMapVT-3DTerrain
      </option>
      <option
        value={
          "https://ubukawa.github.io/ss-styles/styles/dev-style-std-azure.json"
        }
      >
        🔒 InternalOnly-UniteStreetMapVT-withAzure
      </option>
    </>
  );
};
