import { useEffect, useState } from 'react';

function useScrollHeader<T>(enable: boolean): { scrollTop: number } {
    const [scrollTop, setScrollTop] = useState<number>(0);

    useEffect(() => {
        if (enable) {
            window.addEventListener('scroll', onScroll);
            setTimeout(() => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            }, 100);
        }
    }, []);

    const onScroll = e => {
        const scrollHeight = e.target.documentElement.scrollTop;
        setScrollTop(scrollHeight);
    };
    return { scrollTop };
}

export default useScrollHeader;