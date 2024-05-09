import styles from "./styles.module.css";

export default function NewsCard() {
  return (
    <div className={styles.card}>
      <div className="flex items-baseline pr-60 pl-20">
        <h2 className="font-bold text-6xl">
          POWER GRIDS FAILURE IN EL-FERDOUS
          <span className="text-3xl ml-4 text-amber-500 italic">1 jan 2024</span>
        </h2>
      </div>

      <p className="pr-60 pl-20 text-3xl">
        Solar storm hitting the power grids and casuing a failure in the
        elferdous city nears elgendy's villa
      </p>
      
      <button className="mr-60 ml-20 w-1/6">Dicover more</button>
    </div>
  );
}
