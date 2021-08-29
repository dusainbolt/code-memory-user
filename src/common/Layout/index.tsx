import { Fragment, useEffect } from 'react';
import { FC } from 'react';
import Header from '@Common/Header';
import Footer from '@Common/Footer';
import { NotifySystem } from '@Common/Notify/NotifySystem';
interface ILayout {
  children?: any;
  scrollHeader?: boolean;
  blogBackground?: boolean;
  header?: boolean;
  footer?: boolean;
}

export const KEY_STYLE_BLOG = 'style';
export const TYPE_STYLE_BLOG = 'blog';
export const TYPE_STYLE_HOME = 'home';

const LayoutCommon: FC<ILayout> = ({ children, scrollHeader = false, footer = true, blogBackground = true, header = true }) => {
  useEffect(() => {
    document.body.setAttribute(KEY_STYLE_BLOG, blogBackground ? TYPE_STYLE_BLOG : TYPE_STYLE_HOME);
  }, []);

  return (
    <Fragment>
      {header && <Header scrollHeader={scrollHeader} />}
      {children}
      {footer && <Footer />}
      <NotifySystem />
    </Fragment>
  );
};

export default LayoutCommon;
