import icons from "../assets/icons";
import scrollToTop from "../utils/scrollToTop";

export default function ScrollToTopButton() {
  return (
    <div className="scrollToTop button cursor-pointer" onClick={scrollToTop}>
      <img src={icons.up} alt="Up arrow" />
    </div>
  );
}
