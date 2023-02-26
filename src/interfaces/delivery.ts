export interface IDelivery {
  _id: string;
  orgname: string;
  website: string;
  phone: string;
}

export type ICreatedDelivery = Omit<IDelivery, "_id">;

export interface ILoadingDelivery {
  isLoading: boolean;
  error: string | null;
  organization: Array<IDelivery>;
}
