import Image from "next/image";
import React from "react";
import { ProtocolInfo } from "../../lib/interfaces";

interface ProtocolListItemProps {
  item: ProtocolInfo;
}

const ProtocolListItem: React.FC<ProtocolListItemProps> = ({ item }) => {
  return (
    <tr className="protocolListItem">
      <td>
        <p>Uniswap</p>
        <Image src="/icons/share.svg" width="15" height="12" alt="Share icon" />
      </td>
      <td>
        <Image
          src="/icons/ticker.svg"
          width="29"
          height="29"
          alt="Ticker icon"
        />
        <Image
          src="/icons/ticker.svg"
          width="29"
          height="29"
          alt="Ticker icon"
        />
        <p>0x75f5...1666</p>
        <Image src="/icons/share.svg" width="15" height="12" alt="Share icon" />
      </td>
      <td>
        <p>{Object.entries(item.quote).map(([key, value]) => `${value.price.toFixed(6).replace(/\.000000$/, '')} ${key}`).join(' / ')}</p>
      </td>
      <td>
        <p
          className={`protocolListItem__status protocolListItem__status--${item.status}`}
        >
          {item.status}
        </p>
      </td>
    </tr>
  );
};

export default ProtocolListItem;
