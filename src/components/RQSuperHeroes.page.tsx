import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const RqSuperHeroesPage = () => {
  const { isLoading, data } = useQuery('super-heroes', () => {
    return axios.get('http://localhost:4000/superheroes');
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return data?.data.map((hero: { name: string }, index: number) => {
    return <div key={`hero_${index}`}>{hero.name}</div>;
  });
};

export default RqSuperHeroesPage;
