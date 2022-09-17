import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar/sidebar';
import SubHeader from '../../Components/Header/subHeader';
import DefaultRouters from '../../Routers/default_router';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <div className="position-relative">
          <Header />
          <SubHeader />
        </div>
        <div className="py-0 conatiner-fluid content-inner mt-n5">
          <DefaultRouters />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Layout;