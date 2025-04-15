import { baseApi } from '../../../API/api';
import { Item, ItemId, ItemListSchema } from './types';

export const itemsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getItems: build.query<Item[], ItemId>({
      query: () => '/items',
      transformResponse: (response) => {
        return ItemListSchema.parse(response);
      },
    }),
  }),
});
