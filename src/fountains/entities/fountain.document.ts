export class FountainDocument {
    static collectionName = 'fountains';

    name: string;
    added_by: string;
    rating: number;
    location: Geolocation;
    description: string;
  }