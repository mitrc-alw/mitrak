import React from "react";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import App from "../App";
import AboutUsPage from "../Pages/AboutUsPage";
import CampusLife from "../Pages/CampusLifePage";
import PlacementPage from "../Pages/PlacementPage";
import MagazinePage from '../Pages/CampusLifePage/MagazinePage/index';  
import StudentProfile from "../Pages/Profile/StudentProfile";
import SidePanel from "../Pages/Dashboard/Admin/SidePanel";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashBorad";
import EventGallery from "../Pages/CampusLifePage/EventGallery";
import DepartmentsPage from "../Pages/AcademicsPage/DepartmentsPage";
import MandatoryDisclosuresPage from "../Pages/AcademicsPage/MandatoryDisclosuresPage";

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/about" exact component={AboutUsPage} />
          <Route
            path="/campus-life/collegedaze"
            exact
            component={MagazinePage}
          />
          <Route
            path="/campus-life/events-gallery/:child"
            exact
            component={EventGallery}
          />

          <Route path="/placements" exact component={PlacementPage} />
          <Route
            path="/campus-life/:routename/:child"
            exact
            component={CampusLife}
          />

          <Route
            path="/placements/:routename"
            exact
            component={PlacementPage}
          />
          <Route
            path="/profile/student/:studentid"
            exact
            component={StudentProfile}
          />
<<<<<<< HEAD
          <Route path="/admin/dashboard" exact component={AdminDashboard} />
=======
          <Route
            path="/academics/madatory-disclosures"
            exact
            component={MandatoryDisclosuresPage}
          />
          <Route
            path="/academics/departments/:child"
            exact
            component={DepartmentsPage}
          />
>>>>>>> 9ebdcdcc56176a44381a5e95115455b7e1d9f4d6
        </Switch>
      </BrowserRouter>
    );
    }


export default Router;