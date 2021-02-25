import axios from "axios";

import { environment } from "../environments/environments";

export const getRepositories = limit => {
	return axios.get(`${environment.url}${environment.user}/repos?per_page=${limit}`);
};

export const getUser = () => {
	return axios.get(`${environment.url}${environment.user}`);
};

export const getEmail = () => {
	return axios.get(`${environment.url}${environment.user}/${environment.public}`);
};
