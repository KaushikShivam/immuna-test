export interface ProtocolInfo {
  id: string;
  name: string;
  symbol: string;
  status: "red" | "yellow" | "green";
  quote: {
    [key: string]: { price: number }
  }
}