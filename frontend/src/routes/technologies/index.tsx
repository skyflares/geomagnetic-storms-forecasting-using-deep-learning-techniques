import { useNavigate } from "react-router-dom";
import images from "../../assets/images";
import ScrollToTopButton from "../../components/ScrollToTop";
import styles from "./styles.module.css";

export default function Technologies() {
  const navigate = useNavigate();

  return (
    <div className="technologies flex flex-col gap-10 justify-center items-center w-full">
      <section
        className={
          styles.hero +
          " flex flex-col justify-center items-center gap-20 py-44"
        }
      >
        <h1 className="uppercase text-8xl drop-shadow-2xl text-center text-white">
          our space technologies
        </h1>
      </section>

      <section className="aiAstronomy flex flex-row-reverse items-center gap-4 h-screen">
        <img src={images.alien} alt="" className="absolute -z-10 left-32 opacity-75"/>
        <div className="text-right w-1/2">
          <h1>AI Astronomy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus
            pariatur assumenda optio voluptatem, perferendis fugit corrupti
            neque in aliquam ipsa expedita? Necessitatibus facere suscipit
            perspiciatis, illo, <span>facilis ab neque</span>, aut quod iure
            officia ex. Quasi eum, consequuntur adipisci numquam esse
            repellendus consequatur est velit quaerat unde voluptates optio
            quos.
          </p>
        </div>
      </section>

      <section className="machineLearningTech flex flex-col items-center gap-10 mb-12">
        <h1>Machine Learning Tech.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus
          pariatur assumenda optio voluptatem, perferendis fugit corrupti neque
          in aliquam ipsa expedita? Necessitatibus facere suscipit perspiciatis,
          illo, facilis ab neque, aut quod iure officia ex. Quasi eum,
          consequuntur
          <span>
            adipisci numquam esse repellendus consequatur est velit quaerat
          </span>
          unde voluptates optio quos.
        </p>
        <button>Check the model API</button>
      </section>

      <section className="timeSeries flex flex-col items-center gap-10">
        <h1>Time Series</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis
          eligendi <span>consequuntur blanditiis</span>. Animi, expedita tenetur
          distinctio similique earum recusandae corrupti quae atque blanditiis
          fugit assumenda sunt aspernatur error necessitatibus sit porro. Sint,
          id fugit!
        </p>
        <button>Read more</button>
      </section>

      <section className="spaceForecasting flex flex-col items-center gap-10">
        <h1>Space Forecasting</h1>
        <img src={images.forecast} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          perspiciatis, mollitia dolores quibusdam non dolorem corporis enim,
          cupiditate labore qui quam. Ut, enim! Saepe itaque dicta molestias,
          nemo ab quae atque vitae cumque non suscipit soluta veniam aperiam et
          hic.
        </p>
        <button
          onClick={() => {
            navigate("/predictions");
          }}
        >
          Check the model prediction
        </button>
      </section>
      <ScrollToTopButton />
    </div>
  );
}
