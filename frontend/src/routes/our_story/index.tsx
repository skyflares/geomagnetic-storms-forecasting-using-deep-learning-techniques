import icons from "../../assets/icons";
import images from "../../assets/images";
import ScrollToTopButton from "../../components/ScrollToTop";
import styles from "./styles.module.css";

const Seperator = ({ height = 400 }: { height?: number | string }) => {
  return (
    <div className="seperator flex flex-col justify-center items-center">
      <img src={icons.dot} />
      <div
        className={styles.vline}
        style={{
          height: height,
        }}
      ></div>
      <img src={icons.dot} />
    </div>
  );
};

export default function OurStory() {
  return (
    <div className="ourStory flex flex-col gap-10 justify-center items-center">
      <section
        className={
          styles.hero +
          " flex flex-col justify-center items-center gap-20 py-44"
        }
      >
        <p className="uppercase text-8xl drop-shadow-2xl text-center">
          EVERYTHING STARTED FROM HERE...
        </p>
      </section>
      <Seperator />
      <section className="theAurora flex flex-col items-center">
        <h1>The Aurora</h1>
        <img src={images.aurora} alt="" />
        <p className="text-center leading-10">
          Of course most of us heard about it. <br />
          {""}
          <span className="font-bold text-white">
            Yeah I know it sounds so cool and pleasing to watch but, the
            question is, <br />
            {""}
            who really knows <span>the secrets</span> of these beautiful lights?{" "}
            <br />
            {""}
            And what is going on <span>behind the scenes?</span>
          </span>
        </p>
      </section>
      <Seperator />
      <section
        className="theSolarStorms relative w-full"
        style={{
          marginTop: -88,
        }}
      >
        <Seperator height={"75vh"} />
        <div className="flex items-center gap-4 w-screen absolute top-0">
          <img src={images.solar} className="absolute -z-10 right-0" />
          <div className="w-1/4">
            <h1>The Solar Storms</h1>
            <p>
              The <span>SUN</span> hitting the earth with solar dangerous waves
              from time to time. <br /> <br />
              {""}
              Which is the main reason for the aurora phenomenon. 🤯
            </p>
            <button>Explore more</button>
          </div>
        </div>
      </section>
      <section className="ourNaturalDefence flex flex-col items-center gap-10">
        <h1>Our Natural Defence</h1>
        <img src={images.magnet} alt="" />
        <p className="text-center leading-10">
          Our planet has a magnetic field that protects us from the majority of
          the solar wind. <br />
          {""}
          The aurora is caused by wind passing across the
          <span>magnetic field</span>. <br />
          {""}
          But that's not the issue... Sometimes the leakage is more intense,
          resulting in <span>more serious calamities</span>.
        </p>
      </section>
      <Seperator />

      <section className="secondaryDefense flex flex-col items-center gap-20">
        <h1>Secondary Defense</h1>
        <img src={images.nasa} alt="" />
        <p className="text-center font-bold">
          <span
            style={{
              color: "#2300FF",
            }}
          >
            NASA
          </span>{" "}
          launched a satellite-based observatory named
          <span> DSCOVR</span>. <br /> <br />
          {""}
          Its primary purpose is observing the solar wind, magnetic fields, and
          other solar phenomena.
        </p>
        <button>Explore more</button>
      </section>

      <Seperator />

      <section
        className="dscovrMission relative w-full"
        style={{
          marginTop: -88,
        }}
      >
        <img src={images.sate} className="-z-10 absolute h-screen -left-64 -top-96" />
        <Seperator height={"75vh"} />
        <div className="flex items-center gap-20 absolute top-0 left-0 text-right">
          <div
            className="spacer"
            style={{
              minWidth: "50%",
            }}
          />
          <div className="">
            <h1>DSCOVR Mission</h1>
            <p>
              <span
                style={{
                  color: "#2300FF",
                }}
              >
                NASA
              </span>
              's plan was to collect magnetic field and solar wind data. To
              issue early <span>warnings</span> for solar storms. But{" "}
              <span>DSCOVR</span>
              's solar wind data is not as reliable as it used to be.
            </p>
            <button>Explore more</button>
          </div>
        </div>
      </section>

      <section className="ourMission flex flex-col items-center gap-20">
        <h1>Our Mission</h1>
        <p>
          Using artificial intelligence to build a{" "}
          <span>machine learning model </span>
          trained on a huge data gathered since <span>2016</span> from the the
          DSCOVR satellite <br /> <br />
          {""}
          and its mission is to predict the solar storms' speed, strength and
          when it's going to arrive so we can avoid it.
        </p>
        <button>Check the model API</button>
      </section>

      <ScrollToTopButton />
    </div>
  );
}
