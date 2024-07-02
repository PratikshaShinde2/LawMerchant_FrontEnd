// src/hooks/useScrollToAbout.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useScrollToAbout = (aboutRef) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollToAbout) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });

            // Clean up the state after using it
            navigate(location.pathname, { replace: true });
        }
    }, [location, navigate, aboutRef]);
};

export default useScrollToAbout;
