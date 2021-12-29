import { useState, useEffect } from 'react';
import axios from 'axios';

type SuperHeroesData = {
  name: string;
};

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<SuperHeroesData[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero, index) => {
        return <div key={`SuperHero_${index}`}>{hero.name}</div>;
      })}
    </>
  );
};

export default SuperHeroesPage;
