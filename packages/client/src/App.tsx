import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PageList from "./components/pageList";
import PageCard from "./components/pageCard";
import { DataState, getData } from "./reducers/dataSlice";

function App() {
  const dispatch = useDispatch();
  const typeName: Array<string> = ["Barge", "Cargo", "High Speed Craft", "Tug"];
  const portName = ["Port Canaveral", "Port of Los Angeles", "Fort Lauderdale"];

  const request = async () => {
    const response = await fetch(
      "https://fakerapi.it/api/v1/custom?_quantity=100&weight=buildingNumber&data=date&tasks=long_text&name=name&id=uuid"
    );
    const json = await response.json();
    const data: Array<DataState> = json.data;

    const newData = data.map((values) => {
      const randomIndexForPort = Math.min(Math.round(Math.random() * 10), 2);
      const randomIndexForType = Math.min(Math.round(Math.random() * 10), 3);

      return {
        ...values,
        type: typeName[randomIndexForType],
        port: portName[randomIndexForPort],
      };
    });

    dispatch(getData(newData));
  };

  useEffect(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="list/1" />} />
        <Route path="list" element={<PageList />}>
          <Route path=":page" element={<PageList />} />
        </Route>
        <Route path="card" element={<PageCard />}>
          <Route path=":id" element={<PageCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
