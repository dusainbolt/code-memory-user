// import { AnyAction } from 'redux'
// import { HYDRATE } from 'next-redux-wrapper'
// export interface _NextReducer {
//     server: any
//     client: any
// }
// const initialState: _NextReducer = { server: '', client: ''}

// function __NextReducer(state = initialState, action: AnyAction) {
//     switch (action.type) {
//         case HYDRATE:
//             return {
//                 ...state,
//                 server: {
//                     ...state.server,
//                     ...action.payload.server,
//                 },
//             }
//         case 'SERVER_ACTION':
//             return {
//                 ...state,
//                 server: {
//                     ...state.server,
//                     tick: action.payload,
//                     test: 'SERVER_ACTION',
//                 },
//             }
//         case 'CLIENT_ACTION':
//             console.log('CLIENT_ACTION')
//             return {
//                 ...state,
//                 client: {
//                     ...state.client,
//                     tick: action.payload,
//                     test: 'CLIENT_ACTION',
//                 },
//             }
//         default:
//             return state
//     }
// }

// export default __NextReducer
