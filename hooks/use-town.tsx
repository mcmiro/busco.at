import { useState } from 'react';
import { TownModel } from '@/types/Town';

export type DirectionProps = 'to-airport' | 'from-airport';

const useTown = () => {
  const [towns, setTowns] = useState<TownModel[]>();
  //const [townList, setTownList] = useState<TownModel[]>();
  //const [townInputFocus, setTownInputFocus] = useState<boolean>(false);
  //const [selectedTown, setSelectedTown] = useState<TownModel>({
  //  name: '',
  //});

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

    //setTownList(dbData);
    return dbData;
  };

  //const handleSelectTown = (payload: TownModel) => {
  //  setSelectedTown(payload);
  //  setTownInputFocus(false);
  //};

  //const handleFocusTown = () => {
  //  setTownInputFocus(true);
  //};

  //const autoCompleteTowns = (value: string) => {
  //  if (!towns) return [];
  //  setTownList(
  //    towns.filter((town: TownModel) =>
  //      town.name?.toLowerCase().startsWith(value?.toLowerCase())
  //    )
  //  );
  //};

  return {
    towns,
    getTowns,
    //townList,
    //selectedTown,
    //townInputFocus,
    //setTownInputFocus,
    //setSelectedTown,
    //autoCompleteTowns,
    //handleSelectTown,
    //handleFocusTown,
  };
};

export default useTown;
