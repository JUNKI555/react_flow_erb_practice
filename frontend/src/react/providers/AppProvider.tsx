import React, { useEffect } from "react";
import { SWRConfig } from "swr";

function getCsrfToken():string {
  const metas = document.getElementsByTagName("meta");
  for (let meta of metas) {
    if (meta.getAttribute("name") === "csrf-token") {
      return meta.getAttribute("content") !== null ? meta.getAttribute("content")! : "";
    }
  }
  return "";
}

async function globalFetcher<T>(resource: string, init?: RequestInit): Promise<T> {
  const res = await fetch(resource, {
    ...init,
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": getCsrfToken()
    }
  });

  return await res.json();
}

const AppProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  console.log('AppProvider!!!!');

  useEffect(() => {
    console.log('AppProvider useEffect!!!!', getCsrfToken());
  }, []);

  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: globalFetcher
        }}
      >
        {children}
      </SWRConfig>
    </>
  );
};

export default AppProvider;
