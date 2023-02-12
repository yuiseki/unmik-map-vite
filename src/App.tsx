import React, { useCallback, useState } from "react";
import { ViewState, ViewStateChangeEvent } from "react-map-gl";

import "./App.css";
import { BaseMap } from "./components/BaseMap";
import { useLocalStorage } from "./hooks/localStorage";
import { MilitaryLayer } from "./components/Layers/MilitaryLayer";
import { BaseMapOptions } from "./components/BaseMap/options";
import { RefugeeSiteLayer } from "./components/Layers/RefugeeSiteLayer";
import { HospitalLayer } from "./components/Layers/HospitalLayer";
import { GovernmentLayer } from "./components/Layers/GovernmentLayer";
import { WaterLayer } from "./components/Layers/WaterLayer";

function App() {
  const [viewState, setViewState] = useState<ViewState>();

  const [styleJsonUrl, setStyleJsonUrl] = useLocalStorage<string | undefined>(
    "unmik-style-json-url",
    undefined
  );

  const [militaryChecked, setMilitaryChecked] = useLocalStorage(
    "unmik-military-checked",
    true
  );
  const [hospitalChecked, setHospitalChecked] = useLocalStorage(
    "unmik-hospital-checked",
    false
  );
  const [governmentChecked, setGovernmentChecked] = useLocalStorage(
    "unmik-government-checked",
    false
  );
  const [waterChecked, setWaterChecked] = useLocalStorage(
    "unmik-water-checked",
    false
  );
  const [refugeeSiteChecked, setRefugeeSiteChecked] = useLocalStorage(
    "unmik-refugee-site-checked",
    false
  );

  const onMapMoveEnd = useCallback((e: ViewStateChangeEvent) => {
    setViewState(e.viewState);
  }, []);

  const onChangeStyle = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setStyleJsonUrl(e.target.value);
    },
    []
  );

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "nowrap",
          position: "absolute",
          top: 0,
          height: "50px",
          width: "100%",
          maxWidth: "100%",
          overflowY: "hidden",
          overflowX: "auto",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 1000,
          fontFamily: "sans-serif, emoji",
        }}
      >
        <div
          style={{
            paddingLeft: "10px",
            textAlign: "center",
          }}
        >
          <img
            style={{
              display: "inline-block",
              verticalAlign: "middle",
            }}
            src="./unopengis_logo.png"
            width={40}
            height={40}
          />
        </div>
        <div
          style={{ whiteSpace: "nowrap", paddingLeft: "10px", fontWeight: 600 }}
        >
          UNMIK Field Maps
        </div>
        <div
          style={{
            whiteSpace: "nowrap",
            paddingLeft: "20px",
            fontFamily: "sans-serif, emoji",
          }}
        >
          🗺{" "}
          <select
            style={{
              height: "1.8em",
              maxWidth: "130px",
              textOverflow: "ellipsis",
              fontSize: "0.8em",
              fontFamily: "sans-serif, emoji",
            }}
            value={styleJsonUrl}
            onChange={onChangeStyle}
          >
            <BaseMapOptions />
          </select>
        </div>
        <div style={{ whiteSpace: "nowrap", paddingLeft: "15px" }}>
          <input
            id="military-checkbox"
            type="checkbox"
            checked={militaryChecked}
            onChange={(e) => setMilitaryChecked(e.target.checked)}
          />
          <label htmlFor="military-checkbox"> 🪖 Military</label>
        </div>
        <div style={{ whiteSpace: "nowrap", paddingLeft: "15px" }}>
          <input
            id="refugee-site-checkbox"
            type="checkbox"
            checked={refugeeSiteChecked}
            onChange={(e) => setRefugeeSiteChecked(e.target.checked)}
          />
          <label htmlFor="refugee-site-checkbox"> ✅ Refugee site</label>
        </div>
        <div style={{ whiteSpace: "nowrap", paddingLeft: "15px" }}>
          <input
            id="hospital-checkbox"
            type="checkbox"
            checked={hospitalChecked}
            onChange={(e) => setHospitalChecked(e.target.checked)}
          />
          <label htmlFor="hospital-checkbox"> 🏥 Hospital</label>
        </div>
        <div style={{ whiteSpace: "nowrap", paddingLeft: "15px" }}>
          <input
            id="government-checkbox"
            type="checkbox"
            checked={governmentChecked}
            onChange={(e) => setGovernmentChecked(e.target.checked)}
          />
          <label htmlFor="government-checkbox"> 🏢 Government</label>
        </div>
        <div style={{ whiteSpace: "nowrap", paddingLeft: "15px" }}>
          <input
            id="water-checkbox"
            type="checkbox"
            checked={waterChecked}
            onChange={(e) => setWaterChecked(e.target.checked)}
          />
          <label htmlFor="water-checkbox"> 🚰 Water</label>
        </div>
      </div>

      <BaseMap
        latitude={42.6994}
        longitude={20.9746}
        zoom={8}
        style={styleJsonUrl}
        onMapMoveEnd={onMapMoveEnd}
      >
        {militaryChecked && <MilitaryLayer />}
        {refugeeSiteChecked && <RefugeeSiteLayer />}
        {hospitalChecked && <HospitalLayer />}
        {governmentChecked && <GovernmentLayer />}
        {waterChecked && <WaterLayer />}
      </BaseMap>
    </div>
  );
}

export default App;
