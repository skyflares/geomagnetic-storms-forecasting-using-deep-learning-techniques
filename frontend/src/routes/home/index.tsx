import { useNavigate } from "react-router-dom";
import icons from "../../assets/icons";
import video from "../../assets/videos/VID-20231113-WA0007.mp4";
import NewsCard from "./NewsCard";
import ScrollToTopButton from "../../components/ScrollToTop";
import styles from "./styles.module.css";
import { useRef, useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current === null) return console.error("Video ref is null");
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMute = () => {
    if (videoRef.current === null) return console.error("Video ref is null");
    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section className="video w-full flex flex-col justify-center items-center relative">
      <video className="w-3/4" src={video} autoPlay muted ref={videoRef} loop/>
      <div className="buttons absolute bottom-4 flex gap-4 text-sm">
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleMute}>{isMuted ? "Unmute" : "Mute"}</button>
      </div>
    </section>
  );
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home flex flex-col gap-10 justify-center items-center">
      <section
        className={
          styles.hero +
          " flex flex-col justify-center items-center gap-20 py-44"
        }
      >
        <div className="uppercase text-8xl">
          <span className="mr-40 drop-shadow-2xl">
            Explore
            <br />
          </span>{" "}
          <span className="ml-20 drop-shadow-2xl">
            Beyond
            <br />
          </span>{" "}
          <span className="ml-44 drop-shadow-2xl">
            Aurora
            <br />
          </span>{" "}
        </div>

        <div className={styles.overlayBand + " text-5xl gap-10"}>
          <div className="left flex items-center gap-2 flex-col-reverse">
            <p>Storm Level</p>
            <p className="text-red-700 font-bold">Intensive</p>
          </div>
          <div className="h-5/6 w-1 bg-white">{""}</div>
          <div className="right">01:00:53:07</div>
        </div>

        <div
          className="join flex cursor-pointer gap-4 items-center button"
          onClick={() => navigate("/our_story")}
        >
          <img src={icons.right} alt="Right arrow icon" />
          <p className="text-5xl">Join Our Journey</p>
        </div>
      </section>

      <VideoSection />

      <section className="ourMission flex flex-col items-center w-3/4">
        <h1>Our Mission</h1>
        <ul className="flex flex-col gap-8">
          <li>
            <div className="title flex items-center mb-2">
              <img src={icons.earth} alt="earth icon" />
              <h2 className="font-bold text-2xl ml-4">Awareness</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              perspiciatis omnis illo eaque incidunt exercitationem mollitia
              veritatis veniam quaerat repudiandae sunt nemo enim ab nesciunt,
              autem pariatur perferendis cum rem fugiat quas quod, illum facere
              repellendus. Delectus nulla iure similique.
            </p>
          </li>

          <li>
            <div className="title flex items-center mb-2">
              <img src={icons.science} alt="science icon" />
              <h2 className="font-bold text-2xl ml-4">Science</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              perspiciatis omnis illo eaque incidunt exercitationem mollitia
              veritatis veniam quaerat repudiandae sunt nemo enim ab nesciunt,
              autem pariatur perferendis cum rem fugiat quas quod, illum facere
              repellendus. Delectus nulla iure similique.
            </p>
          </li>

          <li>
            <div className="title flex items-center mb-2">
              <img src={icons.brain} alt="brain icon" />
              <h2 className="font-bold text-2xl ml-4">AI</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              perspiciatis omnis illo eaque incidunt exercitationem mollitia
              veritatis veniam quaerat repudiandae sunt nemo enim ab nesciunt,
              autem pariatur perferendis cum rem fugiat quas quod, illum facere
              repellendus. Delectus nulla iure similique.
            </p>
          </li>
        </ul>
      </section>

      <section className="latestUpdates flex flex-col items-center w-3/4">
        <h1>Latest Updates</h1>
        <NewsCard />
      </section>

      <section className="impactsDetected flex flex-col items-center">
        <h1>Impacts Detected</h1>
        <p className="italic -mt-5">(UNTIL NOW)</p>
        <ul className="flex gap-28 text-4xl py-32">
          <li className="flex justify-center items-center">
            <div className="vline h-full w-1 bg-amber-500 rounded mr-5"></div>
            <span>
              <span className="font-bold text-6xl">
                50+ <br />
              </span>
              <span>Total disaster</span>
            </span>
          </li>

          <li className="flex justify-center items-center">
            <div className="vline h-full w-1 bg-amber-500 rounded mr-5"></div>
            <span>
              <span className="font-bold text-6xl">
                1000+ <br />
              </span>
              <span>Satellites destroyed</span>
            </span>
          </li>

          <li className="flex justify-center items-center">
            <div className="vline h-full w-1 bg-amber-500 rounded mr-5"></div>
            <span>
              <span className="font-bold text-6xl">
                900+ <br />
              </span>
              <span>Burned chips</span>
            </span>
          </li>
        </ul>
      </section>

      <ScrollToTopButton />
    </div>
  );
}
