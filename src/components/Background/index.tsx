import styles from "./styles.module.scss";
import ActiveLink from "../ActiveLink";
import TypeIt from "typeit-react";
export function Background() {
  return (
   
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full object-cover h-full overflow-hidden"
      >
        <source src="assets/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  );
}
