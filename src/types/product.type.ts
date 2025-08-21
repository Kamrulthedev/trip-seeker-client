

export interface IProduct {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  discount?: string; // Changed to string to match your data
  rating: number;
}