/**
 * Copyright (c) 2019
 * Infinite Scroll
 * 
 * @summary Infinite Scroll
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */
import React, {useState, useEffect} from "react";

export const Infinitescroll = (callback) => {
  
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  const handleScroll = ()=> {
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};
