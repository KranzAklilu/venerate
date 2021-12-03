import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../layout/Header";
import Hero from "../view/Home/Hero";
import PopularPlaces from "../view/Home/PopularPlaces";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <PopularPlaces />
    </div>
  );
};

export default Home;
