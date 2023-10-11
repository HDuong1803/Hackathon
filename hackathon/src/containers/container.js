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
export default function Container() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProcessPage />} />
          <Route exact path="/distributor" element={<DistributorPage />} />
          <Route
            exact
            path="/distributor/:id"
            element={<DistributorDetails />}
          />
          <Route exact path="/person" element={<PersonPage />} />

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
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
