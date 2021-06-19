import NProgress from 'nprogress';
import { useEffect } from 'react';

NProgress.configure({
    showSpinner: false,
    easing: 'ease',
    speed: 500,
});

const TopProgressBar = (): any => {
    useEffect(() => {
        NProgress.start();
        NProgress.done();
    });

    return null;
};

export default TopProgressBar;
