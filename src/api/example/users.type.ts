export interface IUserAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
	address: IUserAddress;
}
