// import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppSelector, useAppDispatch, RootState } from '@Redux/store';
import { decrement } from '@Redux/reducer/indexReducer';
import { _tValue } from '@Utils/index';
import { actions } from '@Redux/actions/index';

import Meta from '@Components/Meta';
import Link from 'next/link';
import LazyImage from '@Common/LazyImage';

export default function IndexPage({ t, locale }) {
    const router = useRouter();
    const count = useAppSelector((state: RootState) => state._indexState.count);
    const dispatch = useAppDispatch();

    const changeLanguage = e => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
        dispatch(decrement());
        dispatch(actions.getDemo({ data: 'HELLO' }));
    };

    const onTestDispatchSaga = () => {
        dispatch(actions.getDemo({ data: 'HELLO' }));
    };

    return (
        <main>
            {/* <ViewSource /> */}
            <Meta title="hello" />
            <LazyImage
                largeSrc="https://i1.wp.com/blog.learningdollars.com/wp-content/uploads/2020/07/custom-typescript-redux-saga.png?fit=816%2C459&ssl=1"
                smallSrc="https://i1.wp.com/blog.learningdollars.com/wp-content/uploads/2020/07/custom-typescript-redux-saga.png?fit=816%2C459&ssl=1"
            />
            <div className="hero">
                <div className="bg-image" onClick={onTestDispatchSaga}>
                    <span className="bg-black opacity-40 absolute w-full h-full z-10" />
                    <Image alt="Hero" src="/hero.jpg" layout="fill" objectFit="cover" priority />
                </div>
                {/* <Nav /> */}
                <section className="pt-8 pb-20 flex flex-col items-center">
                    <nav aria-label="breadcrumb">
                        <ol className="flex space-x-2 text-white text-sm mb-8 text-shadow">
                            <li>
                                {count}
                                asdddddddddddddddddd
                                <a href="#">{'Science >'}</a>
                            </li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <li>Birth web</li>
                        </ol>
                    </nav>
                    <h1 className="text-5xl text-white text-shadow font-bold px-8 text-center">{t.hero}</h1>
                    <hr className="mt-16 mb-8 w-32 border-t-2 border-white" />
                    <p className="text-white text-shadow px-8">{_tValue(t.description, { hello: 'YOU ARE WELCOME' })}</p>
                </section>
            </div>
            <article className="mt-16 px-8 max-w-4xl m-auto">
                <p className="mb-8">{t.p1}</p>
                <Image alt="Screenshot" src="/screenshot.png" width={1440} height={870} />
                <p className="my-8">{t.p2}</p>
                <p className="mb-16">{t.p3}</p>
                <select onChange={changeLanguage} defaultValue={locale} className="text-white text-shadow-sm text-lg bg-transparent tracking-wide">
                    <option className="text-black" value="en">
                        EN
                    </option>
                    <option className="text-black" value="fr">
                        FR
                    </option>
                </select>
            </article>
        </main>
    );
}
