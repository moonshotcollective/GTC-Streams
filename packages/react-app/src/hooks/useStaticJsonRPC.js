import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";

const createProvider = async (url) => {
  const provider = new ethers.providers.StaticJsonRpcProvider(url);

  await provider.ready;

  return provider;
};

export default function useStaticJsonRPC(urlArray) {
  const [provider, setProvider] = useState(null);

  const handleProviders = useCallback(async () => {
    try {
      const p = await Promise.race(urlArray.map(createProvider));
      const _p = await p;

      setProvider(_p);
    } catch (error) {
      // todo: show notification error about provider issues
      console.log(error);
    }
  });

  useEffect(() => {
    handleProviders();
  }, [JSON.stringify(urlArray)]);

  return provider;
}