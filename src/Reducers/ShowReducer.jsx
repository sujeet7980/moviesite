import {
    SHOW_LIST_REQUEST,
    SHOW_LIST_SUCCESS,
    SHOW_LIST_FAILS,
    SHOW_DETAILS_REQUEST,
    SHOW_DETAILS_SUCCESS,
    SHOW_DETAILS_FAILS
  } from "../Constants/ShowConstant";
  
  export const showListReducer = (state = { shows: [] }, action) => {
    switch (action.type) {
      case SHOW_LIST_REQUEST:
        return { loading: true, shows: [] };
      case SHOW_LIST_SUCCESS:
        return { loading: false, shows: action.payload };
      case SHOW_LIST_FAILS:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const showDetailsReducer = (state ={ show: []},action)=>{
      switch(action.type){
          case SHOW_DETAILS_REQUEST:
              return {loading: true, show: []};
          case SHOW_DETAILS_SUCCESS:
              return {loading: false, show: action.payload};
          case SHOW_DETAILS_FAILS:
              return {loading: false, error: action.payload};
          default:
              return state;
      }
  }
  