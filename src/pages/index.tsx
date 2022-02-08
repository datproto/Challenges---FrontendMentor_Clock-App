/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Button from '../components/button';
import Clock from '../components/clock';
import Quote from '../components/quote';

import styles from './index.module.css';

const IndexPage: NextPage = () => {
  const [quote, setQuote] = useState({ quote: '', author: '' });
  const [geo, setGeo] = useState({ country: '', city: '', tz: '' });
  const [worldTime, setWorldTime] = useState({
    time: '',
    dow: '',
    doy: '',
    wn: '',
  });
  const [expand, setExpand] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const quoteApi = () => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote({
          ...quote,
          quote: data.en,
          author: data.author,
        });
      });
  };

  const geoApi = () => {
    fetch(
      'https://api.freegeoip.app/json/?apikey=8b43f200-883d-11ec-b2ad-e3b0a27fa6c6'
    )
      .then((response) => response.json())
      .then((data) => {
        setGeo({
          ...geo,
          country: data.country_code,
          city: data.city,
          tz: data.time_zone,
        });
      });
  };

  const worldTimeApi = () => {
    fetch(`https://worldtimeapi.org/api/timezone/${geo.tz}`)
      .then((response) => response.json())
      .then((data) => {
        setWorldTime({
          ...worldTime,
          time: new Date(data.unixtime * 1000).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
          }),
          dow: data.day_of_week,
          doy: data.day_of_year,
          wn: data.week_number,
        });
      });
  };

  useEffect(() => {
    quoteApi();
    geoApi();
  }, []);

  useEffect(() => {
    if (geo.tz !== '') {
      worldTimeApi();
    }
  }, [geo]);

  useEffect(() => {
    if (worldTime.time !== '') {
      const hour = parseInt(worldTime.time.substring(0, 3), 16);
      if (hour >= 0 && hour <= 6) {
        setDarkMode(true);
      } else if (hour >= 18) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, [worldTime]);

  return (
    <div>
      <Head>
        <title>Clock App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${
          styles[darkMode ? 'main-dark' : 'main-light']
        } flex flex-col justify-between w-full h-full px-6 pt-8 pb-10 md:px-16 md:pt-20 md:pb-16 xl:px-40 xl:pt-16 xl:pb-24`}
      >
        <div
          className={`z-10 ${expand && '-mt-32 md:-mt-56'} transition-[margin]`}
        >
          <Quote
            quote={quote.quote}
            author={quote.author}
            onclick={() => quoteApi()}
          />
        </div>
        <div
          className={`
          z-10 flex flex-col gap-12 ${
            expand && 'mb-64 md:mb-[26rem] xl:mb-[22rem]'
          } transition-[margin] xl:flex-row xl:justify-between
        `}
        >
          <Clock
            time={worldTime.time}
            country={geo.country}
            city={geo.city}
            darkMode={darkMode}
          />
          <div className="flex xl:flex-col xl:justify-end">
            <Button
              type={expand ? 'less' : 'more'}
              onclick={() => setExpand(!expand)}
            />
          </div>
        </div>

        <div
          className={`absolute ${
            expand ? 'bottom-0' : '-bottom-64 md:-bottom-[27rem]'
          } transition-[bottom] left-0 w-full flex gap-4 md:gap-20 xl:gap-64 flex-col md:flex-row ${
            darkMode
              ? 'bg-black/[.80] text-white'
              : 'bg-white/[.80] text-[#303030]'
          } py-12 px-6 md:py-28 md:px-16 xl:py-[4.5rem] xl:px-40`}
        >
          <div className="flex flex-col gap-4 md:gap-12 xl:gap-10">
            <div className="flex items-center justify-between md:flex-col md:items-start xl:gap-2">
              <h6>current timezone</h6>
              <h2>{geo.tz}</h2>
            </div>
            <div className="flex items-center justify-between md:flex-col md:items-start xl:gap-2">
              <h6>day of the year</h6>
              <h2>{worldTime.doy}</h2>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-12 xl:gap-10">
            <div className="flex items-center justify-between md:flex-col md:items-start xl:gap-2">
              <h6>day of the week</h6>
              <h2>{worldTime.dow}</h2>
            </div>
            <div className="flex items-center justify-between md:flex-col md:items-start xl:gap-2">
              <h6>week number</h6>
              <h2>{worldTime.wn}</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
