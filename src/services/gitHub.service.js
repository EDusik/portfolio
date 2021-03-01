import { environment } from "../environments/environments";

import axios from "axios";

export const getRepositories = async limit => {
	return await axios.get(`${environment.url}${environment.user}/repos?per_page=${limit}`);
};

export const getUser = async () => {
	return await axios.get(`${environment.url}${environment.user}`);
};
