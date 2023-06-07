import React from "react";
import "../App.css";
import { useEffect } from "react";
import CardDetails from "./CardDetails";
import { useDispatch,useSelector } from 'react-redux';
import {Row,Col} from 'react-bootstrap'
import Loader from "./shared/Loader";
import Message from "./shared/Message";
import { ListShows } from "../Actions/ShowAction";

const Home = () => {
    const dispatch= useDispatch();
    const showList = useSelector(state => state.showList)
    const {loading,error,shows}=showList;
    useEffect(()=>{
       dispatch(ListShows());
    },[dispatch]);
  return (
    <>
    {
      loading?<Loader/> : error? <Message variant='danger' message={error}/> : 
      <Row data-aos="fade-down">
      {
          shows.map((show)=>(
              <Col key={show.show.id}  md={4}>
                <CardDetails show={show}/>
              </Col>
          ))
      }
    </Row> 
    }
    </>
  );
};

export default Home;
