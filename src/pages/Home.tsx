import React from 'react';
import Header from '../components/Header/Header';

export interface IHomePageProps {};

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
  return (
    <Header/>
  )
}

export default HomePage