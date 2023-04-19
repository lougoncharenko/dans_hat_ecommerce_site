import React from 'react';
import Header from '../components/Header/Header';
import AboutCard from '../components/AboutSection/MediaCard/AboutCard';

export interface IHomePageProps {};

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
  return (
    <>
    <Header/>
    <AboutCard />
    </>
   
  )
}

export default HomePage