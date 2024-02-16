import { useEffect } from "react";
import GA4 from "react-ga4";

export const usePageTracking = (pageTitle) => {
    const pathname = window.location.pathname + window.location.search;
    useEffect(() => { 
        GA4.send({ hitType: "pageview", page: pathname, title: pageTitle}); 
    }, [pathname, pageTitle]); 
}

export const initializeGA = (session) => {    
    const options = {
        gaOptions: {
            cookie_flags: 'samesite=none;secure',
            send_page_view: false,
            userId: session,
        },
    }; 
    const config = [
        { trackingId: process.env.REACT_APP_GA_MEASUREMENT_ID },
    ]; 
    GA4.initialize(config, options);
}

export const sendEvent = ({ action, category, label, value, pageTitle }) => {
    
    // GA4.reset();
    //     const options = {
    //         gaOptions: {
    //             cookie_update: false,
    //             send_page_view: false,
    //             page_title: pageTitle,
    //         },
    //     };

    //     const config = [
    //         { trackingId: process.env.REACT_APP_GA_MEASUREMENT_ID },
    //     ];
    //     GA4.initialize(config, options);
        GA4.event(
            {
                action: action,
                category: category,
                label: label,
                value: value
            }
        );
  };