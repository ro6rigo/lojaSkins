import { useEffect } from "react";
import GA4 from "react-ga4";
//import { useLocation } from "react-router-dom";

export const usePageTracking = (pageTitle) => {
    //const location = useLocation();
    //const pathname = location.pathname.length > 200 ? location.pathname.substring(0,location.pathname.lastIndexOf("/")) : location.pathname;
    const pathname = window.location.pathname + window.location.search;
    useEffect(() => {
 
    const options = {
        gaOptions: {
            cookie_flags: 'samesite=none;secure',
            send_page_view: false,
        },
    };
 
    const config = [
        { trackingId: process.env.REACT_APP_GA_MEASUREMENT_ID },
    ];
 
        GA4.initialize(config, options);
        GA4.send({ hitType: "pageview", page: pathname, title: pageTitle });
 
    }, [pathname, pageTitle]);
 
}