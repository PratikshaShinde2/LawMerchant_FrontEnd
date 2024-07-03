import {useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const useScrollToSearch = (searchRef) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() =>{
        if (location.state?.scrollToSearch){
            searchRef.current.scrollIntoView({behavior: 'smooth'});

            navigate(location.pathname, {replace: true});
        }
    }, [location, navigate, searchRef]);
};

export default useScrollToSearch;
