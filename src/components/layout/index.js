import React from 'react';
import Header from './header';
import Footer from './footer';

function Layout({children}) {
    return (
        <>
            <div className="main-container">
                <Header />
                <main className='main-content'>
                    {children}
                </main>
            </div>
            <Footer />  
        </>
    );
}

export default Layout;