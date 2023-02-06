import React, { Component } from "react";
import video from "../../video/lfs-video.mp4";

class Content extends Component {
  render() {
    return (
      <div>
         <video src={video} width="600" height="300" controls="controls" autoplay="true" />
      </div>
    );
  }
}

export default Content;