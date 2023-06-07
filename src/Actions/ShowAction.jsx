
import {
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAILS,
  SHOW_DETAILS_REQUEST,
  SHOW_DETAILS_SUCCESS,
  SHOW_DETAILS_FAILS,
} from "../Constants/ShowConstant";

export const ListShows = () => async (dispatch) => {
    
  try {
    dispatch({ type: SHOW_LIST_REQUEST });
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    dispatch({ type: SHOW_LIST_SUCCESS, payload: data, });
  } catch (error) {
    dispatch({
      type: SHOW_LIST_FAILS,
      payload : error.response && error.response.data.message? error.response.data.message : error.message
    });
  }
};

export const ShowDetail = (id)=> async (dispatch)=>{
    try{
        dispatch({type: SHOW_DETAILS_REQUEST});
        
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
         const data = await response.json();
        dispatch({type: SHOW_DETAILS_SUCCESS,payload:data,});
        
    }catch(error){
        dispatch({
            type: SHOW_DETAILS_FAILS,
            payload:error.response && error.response.data.message? error.response.data.message: error.message
        })
    }
}