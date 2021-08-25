import { SeoHome } from 'src/types/SeoHomeModel';
import { Fragment, useEffect } from 'react';
import { FC } from 'react';
import Header from '@Common/Header';
import Footer from '@Common/Footer';
import { useAppDispatch, useAppSelector } from '@Redux/store';
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

const LayoutCommon: FC<ILayout> = ({ children, scrollHeader = false, footer = true, blogBackground = true, header = true }) => {
  const seoHome = useAppSelector(store => store.seoHomeSlice);

  useEffect(() => {
    if (blogBackground) {
      document.body.setAttribute(KEY_STYLE_BLOG, TYPE_STYLE_BLOG);
    }
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(actionUser.userStartApp());
  }, []);

  return (
    <Fragment>
      {header && <Header scrollHeader={scrollHeader} />}
      {children}
      {footer && <Footer seoHome={seoHome} />}
      <NotifySystem />
    </Fragment>
  );
};

export default LayoutCommon;
