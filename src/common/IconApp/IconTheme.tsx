import { Box } from '@Common/Layout';
import { DARK_THEME } from '@Config/contains';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface _IconTheme {
    className?: string;
}

const IconTheme: React.FC<_IconTheme> = ({ children, className, ...props }) => {
    const [themeName, setThemeName] = useState('');

    const toggleTheme = () => {
        const valueTheme = themeName ? '' : DARK_THEME;
        setThemeName(valueTheme);
        document.body.setAttribute('theme-data', valueTheme);
        localStorage.setItem('theme-app', valueTheme);
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme-app');
        if (localTheme) {
            setThemeName(localTheme);
            document.body.setAttribute('theme-data', localTheme);
        }
    }, []);

    return (
        <Box onClick={toggleTheme} flexBox fixed width={44} height={44} right={34} circle bottom={40} className="app-icon-theme">
            <FontAwesomeIcon icon={faMagic} />
        </Box>
    );
};

export default IconTheme;
