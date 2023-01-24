import React, {useEffect} from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import HomePage from '@views/homepage'
import About from '@views/about'
import PageNotFound from '@views/404'
import {routes} from '@utils/constant'
// import { headerTop } from "@utils/commonFunctions";

const useUpdater = () => {
    const location = useLocation();
    useEffect(() => {
    //   headerTop();
    }, [location]);
  };

  const UpdateWrapper = () => {
    useUpdater();
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path={routes.about} element={<About />} />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

function Router() {
    return (
        <>
            <BrowserRouter>
                <UpdateWrapper />
            </BrowserRouter>
        </>
    );
}

export default Router;