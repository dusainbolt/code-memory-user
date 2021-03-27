import { memo, useEffect, useState } from 'react';
import { DARK_THEME } from '@Config/contains';

interface _ThemeIcon {}

const ThemeIcon: React.FC<_ThemeIcon> = () => {
    const [themeName, setThemeName] = useState('');

    const toggleTheme = () => {
        const valueTheme = themeName ? '' : DARK_THEME;
        setThemeName(valueTheme);
        document.body.setAttribute("theme-data", valueTheme);
        localStorage.setItem('theme-app', valueTheme);
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme-app');
        if (localTheme) {
            setThemeName(localTheme);
            document.body.setAttribute("theme-data", localTheme);
        }
    }, []);

    return (
        <div onClick={toggleTheme} className="theme-icon-wrapper">
            CHANGE THEME
        </div>
    );
};

export default memo(ThemeIcon);
