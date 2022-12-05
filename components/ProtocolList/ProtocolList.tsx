import Image from "next/image";
import React from "react";
import { ProtocolInfo } from "../../lib/interfaces";
import ProtocolListItem from "../ProtocolListItem/ProtocolListItem";

interface ProtocolListProps {
  data: ProtocolInfo[];
}

const ProtocolList: React.FC<ProtocolListProps> = ({ data }) => {
  return (
    <table className="protocolList">
      <thead>
        <tr>
          <th>
            <p>Protocol</p>
            <Image
              src="/icons/sorter.svg"
              width="7"
              height="10"
              alt="Sort icon"
            />
          </th>
          <th>
            <p>Pool</p>
            <Image
              src="/icons/sorter.svg"
              width="7"
              height="10"
              alt="Sort icon"
            />
          </th>
          <th>
            <p>Balance</p>
            <Image
              src="/icons/sorter.svg"
              width="7"
              height="10"
              alt="Sort icon"
            />
          </th>
          <th>
            <p>Risk Status</p>
            <Image
              src="/icons/sorter.svg"
              width="7"
              height="10"
              alt="Sort icon"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((i) => <ProtocolListItem key={i.id} item={i} />)}
      </tbody>
    </table>
  );
};

export default ProtocolList;
