import actionTypes from '../actionTypes';


let INITIAL_STATE = {
    isProgress: false,
    isError: false,
    errorTest: '',
    serviceSuccess: '',
    contactSuccess: '',
    paymentSuccess: '',
    utilitupaymentsuccess: '',
    GET_ONE_BED_PROPERTY: null,
    GET_TWO_BED_PROPERTY: null,
    GET_THREE_BED_PROPERTY: null




}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SERVICE_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.SERVICE_SUCCESS:
            return { ...state, serviceSuccess: "Your query is submitted", isProgress: false }
        case actionTypes.SERVICE_ERROR:
            return { ...state, isError: true, errorTest: action.error }
        case actionTypes.SERVICE_ERROR_ALERT:
            return { ...state, isError: false, errorTest: '', isProgress: false }
        case actionTypes.CONTACT_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.CONTACT_SUCCESS:
            return { ...state, contactSuccess: "Success", isProgress: false }
        case actionTypes.CONTACT_ERROR:
            return { ...state, isError: true, errorTest: action.error }
        case actionTypes.CONTACT_ERROR_LIST:
            return { ...state, isError: false, errorTest: '', isProgress: false }
        case actionTypes.PAYMENT_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.PAYMENT_SUCCESS:
            return { ...state, paymentSuccess: "Your payment is submitted", isProgress: true }
        case actionTypes.PAYMENT_ERROR:
            return { ...state, isError: true, errorTest: action.error }
        case actionTypes.PAYMENT_ERROR_ALERT:
            return { ...state, isError: false, errorTest: '', isProgress: false }
        case actionTypes.UTILITY_PAYMENT_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.UTILITY_PAYMENT_SUCCESS:
            return { ...state, utilitupaymentsuccess: "Your Utility payment is submitted", isProgress: true }
        case actionTypes.GET_PROPERTY_ONE_BED_SUCCESS:
            return { ...state, GET_ONE_BED_PROPERTY: action.payload }

        case actionTypes.GET_PROPERTY_TWO_BED_SUCCESS:
            return { ...state, GET_TWO_BED_PROPERTY: action.payload }

        case actionTypes.GET_PROPERTY_THREE_BED_SUCCESS:
            return { ...state, GET_THREE_BED_PROPERTY: action.payload }




        default:
            return state;
    }

}