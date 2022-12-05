import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import LoggedNavbar from "../components/Navbar/LoggedNavbar";
import PaginationFooter from "../components/PaginationFooter/PaginationFooter";
import ProtocolList from "../components/ProtocolList/ProtocolList";
import Searchbar from "../components/Searchbar/Searchbar";
import SideMenu from "../components/SideMenu/SideMenu";
import { getProtocolData } from "../lib/api";
import { ProtocolInfo } from "../lib/interfaces";

interface DashboardPageProps {
  data: ProtocolInfo[]
}

const DashboardPage: React.FC<DashboardPageProps> = ({ data }) => {
  return (
    <main className="dashboard">
      <SideMenu />
      <section>
        <LoggedNavbar />
        <div className="dashboard__content">
          <div className="dashboard__innernav">
            <p>Immuna Monitor Portal</p>
            <div className="dashboard__info">
              <Searchbar width="small" placeholder="Search" />
              <div className="dashboard__ticker">
                <div>
                  <Image
                    src="/icons/etherium.svg"
                    width="9"
                    height="14"
                    alt="Etherium logo"
                  />
                  <p>ETH</p>
                </div>
                <div>
                  <p>0xBAD7...E116</p>
                </div>
                <div>
                  <Image
                    src="/icons/copy.svg"
                    width="12"
                    height="16"
                    alt="Etherium logo"
                  />
                </div>
              </div>
            </div>
          </div>
          {data.length ? <ProtocolList data={data} /> : <></>}
        </div>
        <PaginationFooter defaultItems={12} total={100} />
      </section>
    </main>
  );
};

export default DashboardPage;

export async function getServerSideProps() {
  const data = await getProtocolData();

  return { props: { data } };
}
