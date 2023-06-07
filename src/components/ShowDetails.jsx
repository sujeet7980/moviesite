import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { ShowDetail } from "../Actions/ShowAction";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import AOS from "aos";
import "aos/dist/aos.css";
const ShowDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showDetails = useSelector((state) => state.showDetails);
  const { loading, error, show } = showDetails;
  const handleBooking = () => {
     navigate(`/show/${id}/book`)
  };
  const sanitizeSummary = (summary) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = summary;
    return tempElement.textContent || tempElement.innerText || '';
  };
  useEffect(() => {
    console.log(id);
    dispatch(ShowDetail(id));
  }, [dispatch, id]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" message={error} />
      ) : (
        <div>
        
        <div className="show-container" data-aos="fade-down">
           
          <div>
          <LinkContainer to="/">
            <span className="btn btn-transparent">&larr; &nbsp; GO BACK</span>
          </LinkContainer>
            <img src={ show.image && show.image.original?show.image.original:"Image not available"} style={{ width: "25rem" }} alt={show.name}/>
          </div>
          <div className="show-contents">
            <span className="title">{show.name}</span>
            <div className="items">
              <div className="item">
                <span>Rating : </span>
                <span> {show.rating && show.rating.average? show.rating.average:"Not available"}</span>
              </div>
              <div className="item">
                <span className="material-symbols-outlined">timer</span>
                <span> { show.runtime} min</span>
              </div>
              <div className="item">
                <span >Status : </span>
                <span> { show.status} </span>
              </div>

            </div>
            <br/>
            <span className="summary">{sanitizeSummary(show.summary)}</span>
            <div>
            </div>
            <div style={{marginTop:"1rem",display:"flex"}} >
              <button className="button" disabled> View Now</button>
              <button className="button" onClick={handleBooking}>Book Now</button>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default ShowDetails;
