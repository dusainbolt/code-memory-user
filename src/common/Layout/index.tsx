import { SeoHome } from '@Models/seo-home';
import { Fragment, useEffect } from 'react';
import { FC } from 'react';
import Header from '@Common/Header';
import Footer from '@Common/Footer';
import { useAppDispatch } from '@Redux/store';
import { actionUser } from '@Redux/actionCreators/userActionCreators';
interface ILayout {
    children?: any;
    seoHome: SeoHome;
    scrollHeader?: boolean;
    blogBackground?: boolean;
    header?: boolean;
    footer?: boolean;
}

export const KEY_STYLE_BLOG = 'style';
export const TYPE_STYLE_BLOG = 'blog';

const LayoutCommon: FC<ILayout> = ({ children, seoHome, scrollHeader = false, footer = true, blogBackground = true, header = true }) => {
    useEffect(() => {
        if (blogBackground) {
            document.body.setAttribute(KEY_STYLE_BLOG, TYPE_STYLE_BLOG);
        }
    }, []);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(actionUser.userStartApp());
    }, []);

    return (
        <Fragment>
            {header && <Header scrollHeader={scrollHeader} />}
            {children}
            {footer && <Footer seoHome={seoHome} />}
        </Fragment>
    );
};

export default LayoutCommon;
