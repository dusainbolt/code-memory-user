import * as Redux from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

declare module "redux" {
    export interface Store {
        sagaTask: ReturnType<typeof sagaMiddleware.run>;
    }
}
