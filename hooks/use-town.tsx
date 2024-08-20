import { useState } from 'react';
import { TownModel } from '@/types/Town';

export type DirectionProps = 'to-airport' | 'from-airport';

const useTown = () => {
  const [towns, setTowns] = useState<TownModel[]>();

  const getTowns = async (): Promise<TownModel[]> => {
    const dbData = await fetch(
      `${process.env.NEXT_PUBLIC_APOLLO_CLIENT_URL}/api/towns?pagination[pageSize]=1000&sort=name`
    )
      .then((response) => response.json())
      .then((data) => {
        const towns = data.data.map((town: any) => {
          return { id: town.id, name: town.attributes.name };
        });
        setTowns(towns);
        return towns;
      })
      .catch(console.error);

    return dbData;
  };

  return {
    towns,
    getTowns,
  };
};

export default useTown;
