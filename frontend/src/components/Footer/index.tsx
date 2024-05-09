import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer w-full flex justify-center">
      <div className="w-3/4 flex flex-col gap-10 py-20 ">
        <hr className="bg-amber-500 w-full" />

        <div className="">
          <img className="mb-8" src={logo} alt="logo" />
          <p>
            Empowering the world's citizens to advance space science and
            exploration
          </p>
        </div>
      </div>
    </div>
  );
}
