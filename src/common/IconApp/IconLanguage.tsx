import Dropdown from '@Common/Dropdown';
import { Box } from '@Common/Layout';
import { DARK_THEME } from '@Config/contains';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface _IconLanguage {
    className?: string;
}

const IconLanguage: React.FC<_IconLanguage> = ({ children, className, ...props }) => {
    // const [themeName, setThemeName] = useState('');

    // const toggleTheme = () => {
    //     const valueTheme = themeName ? '' : DARK_THEME;
    //     setThemeName(valueTheme);
    //     document.body.setAttribute('theme-data', valueTheme);
    //     localStorage.setItem('theme-app', valueTheme);
    // };

    // useEffect(() => {
    //     const localTheme = localStorage.getItem('theme-app');
    //     if (localTheme) {
    //         setThemeName(localTheme);
    //         document.body.setAttribute('theme-data', localTheme);
    //     }
    // }, []);

    return (
        <Dropdown right={34} bottom={100}>
            <Box flexBox fixed width={44} height={44} right={34} circle bottom={100} className="app-icon-theme">
                <FontAwesomeIcon icon={faMagic} />
            </Box>
        </Dropdown>
    );
};

export default IconLanguage;
