import { ProtocolInfo } from "./interfaces";

const API_URL = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

export const getProtocolData = async () => {
  const status: ["green", "yellow", "red"] = ["green", "yellow", "red"];

  try {
    const res = await fetch(API_URL,{
      headers: {
        'X-CMC_PRO_API_KEY': process.env.COINMARKET_KEY! ,
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip'
      }
    });
  
    const data: { data: ProtocolInfo[]  } = await res.json();
    return data.data.map((i) => ({
      id: i.id,
      name: i.name,
      symbol: i.symbol,
      quote: i.quote,
      status: status[Math.floor(Math.random() * status.length)]
    }));
  } catch (error) {
    // TODO: handle error
  }
}