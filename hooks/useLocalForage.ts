import localforage from "localforage";
import { useEffect, useState } from "react";

export type LocalForageTypes<T> = [T, (value: T) => Promise<void>];

export const useLocalForageAsync = <T>(
  key: string,
  initialValue?: T
): LocalForageTypes<T> => {
  const [data, setData] = useState<T | undefined>(initialValue);

  useEffect(() => {
    let current = true;
    current &&
      void (async () => {
        const data: T | null = await localforage.getItem(key);
        setData(data == null ? initialValue ?? ({} as T) : data);
      })();
    return () => {
      current = false;
    };
  }, [initialValue, key]);

  const setItem = async (value: any) => {
    setData(value);
    await localforage.setItem(key, value);
  };
  return [data as T, setItem];
};
