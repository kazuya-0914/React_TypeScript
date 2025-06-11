import { useQuery } from "@tanstack/react-query";

const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

const fetchWeather = async () => {
  await sleep(2000);
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=ddbaf08feecb56297fd2f5b525d4ac47`);
  if (res.ok) { return res.json(); }
  throw new Error(res.statusText);
};

export default function Query() {
  const { data, isLoading, isError, error } =
  useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather
  });
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <figure>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
        alt={data?.weather?.[0]?.main} />
        <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  );
}

// index.tsx
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Query from './Chap06/Query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cli = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={cli}>
      <Query />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
*/