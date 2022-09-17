import React from 'react';
import Users from '../Pages/Users/Users';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ManageMedia from '../Pages/ManageMedia/ManageMedia';
import UploadMedia from '../Pages/UploadMedia/UploadMedia';
import Transactions from '../Pages/Transactions/Transactions';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const DefaultRouters = () => {
    return (
        <TransitionGroup>
            <CSSTransition className={"fadein"} timeout={300}>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/transaction' element={<Transactions />} />
                    <Route path='/privacy_policy' element={<PrivacyPolicy></PrivacyPolicy>} />
                    <Route path='/manage_media' element={<ManageMedia></ManageMedia>} />
                    <Route path='/media/:id' element={<UploadMedia></UploadMedia>} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default DefaultRouters;