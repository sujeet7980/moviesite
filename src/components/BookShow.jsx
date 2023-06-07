import React, { useEffect, useState } from "react";
import { Button, Form, } from "react-bootstrap";
import {  useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {ShowDetail} from "../Actions/ShowAction";
import AOS from "aos";
import "aos/dist/aos.css";
const RegisterScreen = () => {
    const { id } = useParams();
  const [user,setUser]=useState({
    "name":"",
    "movie":"",
    "email":"",
    "password":"",
  })
  const dispatch =useDispatch();
  const showDetails = useSelector((state) => state.showDetails);
  const {  show } = showDetails;
  const navigate= useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(user.password!==user.confirmPassword){
        alert("Password do not match");
    }
    else{
        localStorage.setItem("userInfo", JSON.stringify(user));
        alert("data save to local storage ");
        navigate('/');
    }
  };

  useEffect(() => {
    dispatch(ShowDetail(id));
  }, [dispatch, id]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  setInterval(()=>{
    setUser((prevUser) => ({ ...prevUser, movie: show.name }));
  },[])
  return (
    <>
    <div className="w-25  text-white m-auto my-5" data-aos="fade-down">
        <h1 className="text-white">Book now</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
            <Form.Label>Moive Name</Form.Label>
            <Form.Control
              type="name"
              name="movie"
              placeholder="Enter moive name"
              value={user.movie}
              disabled
            ></Form.Control>
          </Form.Group>
        <Form.Group controlId="name"> 
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              value={user.name}
              onChange={handleInputChange}
              required
            ></Form.Control>
          </Form.Group>
          
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={handleInputChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Re-enter Password"
              value={user.confirmPassword}
              onChange={handleInputChange}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="my-3">Book Now</Button>
        </Form>
        </div>
    </>
  );
};

export default RegisterScreen;
