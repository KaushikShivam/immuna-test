import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SIDEMENU_ITEMS = [
  {
    name: "dashboard",
    url: "/dashboard",
  },
  {
    name: "alerts",
    url: "/alerts",
  },
  {
    name: "defend",
    url: "/defend",
  },
  {
    name: "protect",
    url: "/protect",
  },
];

const SideMenu = () => {
  const { pathname } = useRouter();

  return (
    <aside className="sideMenu">
      <div className="sideMenu__logo">
        <Image
          src="/icons/logo.svg"
          width="132"
          height="32"
          alt="Immuna logo"
        />
      </div>
      <ul className="sideMenu__list">
        {SIDEMENU_ITEMS.map((i) => (
          <li
            key={i.name}
            className={pathname.includes(i.name) ? "selected" : ""}
          >
            <Link href={i.url}>
              <Image
                src={`/icons/${i.name}.svg`}
                width="15"
                height="15"
                alt={`${i.name} url`}
              />
              <p>{i.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;
