import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProviderCostom } from "./theme";
//
import { Template } from "components/Template";
import { Home } from "pages/Home";
import { Room } from "pages/Home/Room";
import { CreateRoom } from "pages/Home/Room/Create";
import { RoomID } from "pages/Home/Room/RoomID";

const App = () => {
  return (
    <div className="app">
      <ThemeProviderCostom>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Home />} />
            <Route path="room">
              <Route index element={<Room />} />
              <Route path="create" element={<CreateRoom />} />
              <Route path=":roomId" element={<RoomID />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProviderCostom>
    </div>
  );
};

export default App;
