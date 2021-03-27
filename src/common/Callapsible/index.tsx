import { useRef, useState } from 'react';
import { STATUS } from '@Config/contains';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface _Collapsible {
    title: string;
    description: string;
}

const Collapsible: React.FC<_Collapsible> = ({ title, description }) => {
    const [classActive, setClassActive] = useState(STATUS.NORMAL);
    const contentRef = useRef(null);

    const toggleClick = () => {
        const content = contentRef.current;
        content.style.maxHeight = content.style.maxHeight
            ? null
            : content.scrollHeight + 'px';
        setClassActive(content.style.maxHeight ? STATUS.ACTIVE : STATUS.NORMAL);
    };

    return (
        <div className="wrap-collapsible">
            <button
                onClick={toggleClick}
                className={`collapsible ${classActive}`}
            >
                <span>{title}</span>
                <span className="icon">
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </button>
            <div ref={contentRef} className="content">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Collapsible;
