import { z } from 'zod';

export type ItemId = string;

export type Item = {
  id: ItemId;
  name: string;
  description: string;
  type: string;
  cuisineCountry: string;
  createdAt: string;
  isVegetarian: boolean;
  isVegan: boolean;
  isAlcoholic: boolean;
};

export const ItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  cuisineCountry: z.string(),

  createdAt: z.string().datetime(),

  isVegetarian: z.boolean(),
  isVegan: z.boolean(),
  isAlcoholic: z.boolean(),
});

export const ItemListSchema = z.array(ItemSchema);
