import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import AdminPage from "./Admin";
import CreateAdmin from "./CreateAdmin";
import CreateDistributor from "./CreateDistributor";
import DistributorPage from "./Distributor";
import DistributorDetails from "./DistributorDetails";
import LogisticDetails from "./LogisticDetails";
import PersonPage from "./Person";
import ProcessPage from "./Process";
import CreateObjectInjection from "./CreateObjectInjection";
import CreateProcess from "./CreateProcess";
import CreateStation from "./CreateStation";
import WarehousePage from "./Warehouse";
import WarehouseDetails from "./WarehouseDetails";
import CreateWarehouse from "./CreateWarehouse";
import StationPage from "./Station";
import StationDetails from "./StationDetails";
import PersonDetails from "./PersonDetails";
import TempDashboard from "./TempDashboard";
import QRCodeView from "./QRCodeView";
export default function Container() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProcessPage />} />
          <Route path="/create-process" element={<CreateProcess />} />
          <Route exact path="/warehouse" element={<WarehousePage />} />
          <Route exact path="/warehouse/:id" element={<WarehouseDetails />} />
          <Route exact path="/create-warehouse" element={<CreateWarehouse />} />
          <Route exact path="/distributor" element={<DistributorPage />} />
          <Route
            exact
            path="/distributor/:id"
            element={<DistributorDetails />}
          />
          <Route exact path="/station" element={<StationPage />} />
          <Route exact path="/station/:id" element={<StationDetails />} />
          <Route exact path="/create-station" element={<CreateStation />} />
          <Route exact path="/person" element={<PersonPage />} />
          <Route exact path="/person/:id" element={<PersonDetails />} />
          <Route
            exact
            path="/create-person"
            element={<CreateObjectInjection />}
          />

          <Route
            exact
            path="/logistic-details/:id"
            element={<LogisticDetails />}
          />

          <Route exact path="/manage-admin" element={<AdminPage />} />
          <Route
            exact
            path="/create-distributor"
            element={<CreateDistributor />}
          />
          <Route exact path="/create-admin" element={<CreateAdmin />} />
          <Route
            exact
            path="/temperature-dashboard"
            element={<TempDashboard />}
          />
          <Route exact path="/qrcode-view/:id" element={<QRCodeView />} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
