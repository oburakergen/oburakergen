export enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export interface IContact {
  name: string;
  email: string;
  message: string;
  ip: string | null;
  active: Status;
  createdAt: Date;
}
