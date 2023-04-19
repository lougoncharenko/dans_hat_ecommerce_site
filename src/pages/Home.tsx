import React from 'react';
import Header from '../components/Header/Header';
import AboutCard from '../components/AboutSection/MediaCard/AboutCard';
import FC from '../components/FeatureSection/FeatureSection';

export interface IHomePageProps {};

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
  return (
    <>
    <Header/>
    <AboutCard />
    <FC/>
    </>
  )
}

export default HomePage