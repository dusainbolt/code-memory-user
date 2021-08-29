import { AnyAction, Store } from 'redux';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';

export type SSRContext = GetServerSidePropsContext & {
  store: Store<any, AnyAction>;
};

export type SSGContext = GetStaticPropsContext & {
  store: Store<any, AnyAction>;
};


export type findTagBySlugInput = {
  slug: string;
};
export interface ParamsPathSlug {
  params: findTagBySlugInput;
  locale?: string;
}
