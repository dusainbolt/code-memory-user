import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    getItem(key: any) {
      return Promise.resolve(null);
    },
    setItem(key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(key: any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

export default storage;
