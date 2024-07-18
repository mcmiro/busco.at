export type DestinationType = {
  data: {
    attributes: {
      name: string;
    };
  };
};

export type RouteType = {
  from: DestinationType;
  to: DestinationType;
  distanceInKm: number;
  image: string;
  additionalCosts: number;
  description: string;
};
