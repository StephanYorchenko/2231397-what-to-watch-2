export type Review = {
  id: number;
  rating: string;
  user: {
    id: number;
    name: string;
  };
  date: string;
  comment: string;
}
