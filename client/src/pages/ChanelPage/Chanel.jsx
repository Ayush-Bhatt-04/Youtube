import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import DesChanel from "./DesChanel";

function Chanel({ wdt, handleUpload, handleEditChanel }) {
  const { Cid } = useParams();

  // Memoize the filtered and reversed video list for better performance
  const videoReducer = useSelector((state) => state.videos);
  const vids = videoReducer
    ?.filter((q) => q.videoChanel._id === Cid)
    ?.reverse();

  return (
    <div className="container_pages">
      <LeftSidebar />
      <div className="container_pages2">
        <DesChanel
          Cid={Cid}
          handleUpload={handleUpload}
          handleEditChanel={handleEditChanel}
        />
        {vids && vids.length > 0 ? (
          <ShowVideoGrid vids={vids} />
        ) : (
          <p>No videos available for this channel.</p>
        )}
      </div>
    </div>
  );
}

export default Chanel;
