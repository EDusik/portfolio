
import { environment } from "../environments/environments";
import { IProfile, IRepository } from "../types/types";

import axios from "axios";

export const getRepositories = async (limit: number) => {
	return await axios.get<IRepository[]>(`${environment.url}${environment.user}/repos?per_page=${limit}`);
};

export const getUser = async () => {
	return await axios.get<IProfile>(`${environment.url}${environment.user}`);
};
