import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Start from './components/start/Start';
import Home from './components/visitor/Home';
import About from './components/visitor/About';
import Requirements from './components/visitor/Requirements';
import Articles from './components/visitor/Articles';
import Help from './components/visitor/Help';
import LoginFV from './components/visitor/Login';
import SignUpFV from './components/visitor/Signup';

import AdminDashboard from './components/admin/Dashboard';
import VictimDashboard from './components/victim/Dashboard';
import CounselorDashboard from './components/counselor/Dashboard';
import LegalAdvisorDashboard from './components/legalAdvisor/Dashboard';
import DoctorDashboard from './components/doctor/Dashboard';

import Tasks from './components/victim/Tasks';
import Explore from './components/victim/Explore';
import VStore from './components/victim/Store';
import HelpVictim from './components/victim/Help';

import ViewCases from './components/legalAdvisor/ViewCases';
import ProvideLegalAdvice from './components/legalAdvisor/ProvideLegalAdvice';
import UpdateLegalResources from './components/legalAdvisor/UpdateLegalResources';
import ScheduleConsultations from './components/legalAdvisor/ScheduleConsultations';

import ViewPatients from './components/doctor/ViewPatients';
import ConsultPatients from './components/doctor/ConsultPatients';
import Prescribe from './components/doctor/Prescribe';
import ViewArticles from './components/doctor/ViewArticles';
import ViewAppointments from './components/doctor/ViewAppointments';

import Users from './components/admin/Users';
import VictimReports from './components/admin/VictimReports';
import ManageRoles from './components/admin/ManageRoles';
import Training from './components/admin/Training';
import Issues from './components/admin/Issues';

import HomeC from './components/visitor/Home';
import Publish from './components/counselor/Publish';
import Sell from './components/counselor/Sell';
import Withdraw from './components/counselor/Withdraw';
import Store from './components/counselor/Store';
import Read from './components/counselor/Read';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/requirements" element={<Requirements />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/help" element={<Help />} />
                <Route path="/login" element={<LoginFV />} />
                <Route path="/signup" element={<SignUpFV />} />

                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/victim-reports" element={<VictimReports />} />
                <Route path="/admin/manage-roles" element={<ManageRoles />} />
                <Route path="/admin/training" element={<Training />} />
                <Route path="/admin/issues" element={<Issues />} />

                <Route path="/victim/dashboard" element={<VictimDashboard />} />
                <Route path="/victim/tasks" element={<Tasks />} />
                <Route path="/victim/explore" element={<Explore />} />
                <Route path="/victim/store" element={<VStore />} />
                <Route path="/victim/help" element={<HelpVictim />} />

                <Route path="/" element={<HomeC />} />
                <Route path="/counselor/publish" element={<Publish />} />
                <Route path="/counselor/sell" element={<Sell />} />
                <Route path="/counselor/withdraw" element={<Withdraw />} />
                <Route path="/counselor/store" element={<Store />} />
                <Route path="/counselor/read" element={<Read />} />

                <Route path="/counselor/dashboard" element={<CounselorDashboard />} />
                <Route path="/legal-advisor/dashboard" element={<LegalAdvisorDashboard />} />
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

                <Route path="/doctor/view-patients" element={<ViewPatients />} />
                <Route path="/doctor/consult" element={<ConsultPatients />} />
                <Route path="/doctor/prescribe" element={<Prescribe />} />
                <Route path="/doctor/view-articles" element={<ViewArticles />} />
                <Route path="/doctor/view-appointments" element={<ViewAppointments />} />

                <Route path="/legal-advisor/view-cases" element={<ViewCases />} />
                <Route path="/legal-advisor/provide-legal-advice" element={<ProvideLegalAdvice />} />
                <Route path="/legal-advisor/update-legal-resources" element={<UpdateLegalResources />} />
                <Route path="/legal-advisor/schedule-consultations" element={<ScheduleConsultations />} />
            </Routes>
        </Router>
    );
};

export default App;
