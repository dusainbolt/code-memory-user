import { Box } from '@Common/Layout';
import { DARK_THEME } from '@Config/contains';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { _styleLayout } from '@Config/models';

interface _Dropdown extends _styleLayout {
    content?: any;
}

const Dropdown: React.FC<_Dropdown> = ({ children, content, className = '', ...props }) => {
    const [visible, setVisible] = useState(false);
    const styleDropdown = clsx({ 'app-drop-down hover': true, [`${className}`]: className });
    const styleDropdownContent = clsx({ 'app-drop-down-wrap': true, visible: visible });
    const { left, right, top, bottom } = props;
    const position = {
        left: props.left ? props.left : 0,
        right: props.right ? props.right : 0,
        top: props.top ? props.top : 0,
        bottom: props.bottom ? props.bottom : 0,
    };
    const toggleDropdown = () => {
        setVisible(!visible);
    };
    return (
        <Box {...props} onClick={toggleDropdown} className={styleDropdown}>
            {children}
            <Box {...position} className={styleDropdownContent}>
                <li>
                    <a className="down-arrow" href="#"></a>
                </li>
                <li>
                    <div>sadasdsadsa
                        123123
                        123
                        123
                        21
                        3
                    </div>
                    {content}
                </li>
            </Box>
        </Box>
    );
};

export default Dropdown;

{
    /* <main>
  <h2>CSS Dropdown Menu</h2>
  <nav>
    <div class="dropdown hover">
      <a href="#">Hover Menu</a>
      <ul>
        <li><a href="#">Item</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Text</a></li>
        <li><a href="#">Page</a></li>
        <li><a href="#">Thing</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Text</a></li>
      </ul>
    </div>
    <div class="dropdown toggle">
      <input id="t1" type="checkbox" checked>
      <label for="t1">Toggle Menu</label>
      <ul>
        <li><a href="#">Item</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Text</a></li>
        <li><a href="#">Page</a></li>
        <li><a href="#">Thing</a></li>
      </ul>
    </div>
  </nav>
  <section>
    <h4>The hover menu is pure CSS.</h4>
    <h4>The toggle menu utilizes a minimal amount of javascript, but will degrade gracefully because it only uses javascript to close the menu when the user clicks outside of the menu.</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna eros, aliquet id dui at, mollis molestie lorem. Donec consectetur lorem elit, nec cursus neque interdum a. Mauris molestie ut dui eget suscipit. Ut ante risus, rhoncus eget metus sit amet, euismod sodales dui. Suspendisse potenti. Aliquam risus magna, euismod quis sagittis quis, convallis id metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>
      Integer et lacinia erat, vel aliquam magna. Pellentesque sagittis commodo rutrum. Nam dignissim, est fermentum rutrum molestie, arcu odio tempus tortor, a rutrum mauris diam at sapien. Aliquam in enim convallis, feugiat lectus in, rutrum nibh. Vivamus sollicitudin odio vel velit pulvinar tincidunt. Aenean nulla velit, consectetur a risus eu, consequat dictum dui. In suscipit dolor magna, id mollis arcu interdum et. Nunc vel nunc ut velit vulputate imperdiet. Aenean nisl dui, pharetra et blandit quis, condimentum id est.
    </p>
		<p>
			An original pen by <a href="https://codepen.io/ejsado/">Eric</a>.
		</p>
  </section>
</main> */
}
