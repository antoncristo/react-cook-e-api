import { AxiosResponse } from 'axios';
import { axiosAgent } from 'api/axios';
import { IUser } from './users.type';

export const fetchExternal = (): Promise<AxiosResponse<IUser[]>> => {
	return axiosAgent.get(`https://jsonplaceholder.typicode.com/users`);
};
