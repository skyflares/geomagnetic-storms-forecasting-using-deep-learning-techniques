import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import routes from "../../routes/routes";
import icons from "../../assets/icons";

const NavEntry = ({ display, path, active = false }: (typeof routes)[0]) => {
  return (
    <Link
      to={path}
      className={active ? `${styles.active}` : `` + ` ${styles.navEntry}`}
    >
      {display}
    </Link>
  );
};

type TSocialEntry = {
  name: string;
  icon: string;
  link: string;
};

const SocialEntries: TSocialEntry[] = [
  {
    name: "discord",
    icon: icons.discord,
    link: "https://discord.com",
  },
  {
    name: "instagram",
    icon: icons.instagram,
    link: "https://instagram.com",
  },
  {
    name: "github",
    icon: icons.github,
    link: "https://github.com",
  },
  {
    name: "facebook",
    icon: icons.facebook,
    link: "https://facebook.com",
  },
  {
    name: "twitter",
    icon: icons.twitter,
    link: "https://twitter.com",
  },
];

export default function Nav() {
  const location = useLocation();
  return (
    <>
      <nav className={"fixed top-1/3 left-8 z-10"}>
        <ul className="flex flex-col gap-16 text-2xl">
          {routes.map((route) => (
            <li key={route.display}>
              <NavEntry
                display={route.display}
                path={route.path}
                active={location.pathname === route.path}
              />
            </li>
          ))}
        </ul>
      </nav>

      <nav className="w-full fixed top-1/3 z-10">
        <ul className="socialIcons flex flex-col gap-16 right-8 absolute z-10">
          {SocialEntries.map((entry) => (
            <li key={entry.name}>
              <Link to={entry.link} target="_blank">
                <img src={entry.icon} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
