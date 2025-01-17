import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ShowVideo.css";
import {BsThreeDotsVertical} from 'react-icons/bs'
import moment from "moment";

function ShowVideo({ vid }) {
  const chanels = useSelector((state) => state?.currentUserProfileReducer);
  // console.log(vid);

  const currentChanel = chanels?.filter((c) => c?._id === vid?.videoChanel)[0];

  return (
    <>
      <Link to={`/VideoPage/${vid?._id}`}>
        <video
          src={`${process.env.REACT_APP_SERVER}/${vid.filePath}`}
          // src={`https://youtubeclone4023.herokuapp.com/${vid.filePath}`}
          // src={`http://localhost:5500/${vid.filePath}`}
          className="video_ShowVideo controls"
          // controls
        > </video>
      </Link>
      <div className="video_description">
        <div className="chanel_logo">
          {currentChanel ? (
            <>
              <Link to={`/chanel/${vid.videoChanel}`} className="chanel_logo">
                <p>{currentChanel?.name?.charAt(0).toUpperCase()}</p>
              </Link>
            </>
          ) : (
            <>
              <div className="chanel_logo">
                <p>{vid?.Uploder?.charAt(0).toUpperCase()}</p>
              </div>
            </>
          )}
        </div>
        <div className="video_details">
          <p className="title_vid_ShowVideo">
            {/* <>{String("vid.videoTitlevid.videoTitlevid.videoTitlevid.videoTitlevid.videoTitlevid.videoTitlevid.videoTitle").slice(0, 20)}...</> */}
            <b>{String(vid.videoTitle).slice(0, 20)}...</b>
            {/* <b>{String("xyxyxyxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy").slice(0, 20)}</b> */}
            <i><BsThreeDotsVertical/></i>
          </p>
          
          <pre className="vid_views_UploadTime">{vid?.Uploder}</pre>
          <pre className="vid_views_UploadTime">
             {vid.Views} Views <div className="dot"></div> {moment(vid.createdAt).fromNow()}
          </pre>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
