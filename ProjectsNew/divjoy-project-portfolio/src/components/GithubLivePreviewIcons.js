import React from "react";
//icons
import { GoMarkGithub } from 'react-icons/go';
import { MdOpenInNew } from 'react-icons/md';

export default function GithubLivePreviewIcons(props) {
  // could extract these styles to masterCms sheet and pass the values
  // down through props...will come back to this.
  const iconStyles = {
    color:'black', 
    fontSize:"22px", 
    marginRight:"5px",
    marginLeft:"5px"
  };

  return(
    <div>
      {props.url && (
        <a href={props.url} target="blank">
          <MdOpenInNew style={iconStyles} />
        </a>
      )}

      {props.repo && (
        <a href={props.repo} target='blank'>
          <GoMarkGithub style={iconStyles} />
        </a>
      )}
    </div>
  )
}