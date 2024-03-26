import { useEffect, useState } from 'react';
import { IRepository } from '../types/types';

const useSearch = (searchValue: string, repositories: IRepository[]): any => {
    const [showProjects, setShowProjects] = useState<IRepository[]>([]);

    useEffect(() => {
        if (searchValue && searchValue.trim() !== "") {

            const projects = concatQuery(searchValue);
            const result = mapProjects(projects);

            if (result !== undefined) {
                setShowProjects(previousState => ({
                    ...previousState,
                    showProjects: result
                }));
            }
        } else {
            setShowProjects(previousState => ({
                ...previousState,
                showProjects: repositories
            }));
        }
    }, [searchValue]);

    const concatQuery = (value: string) => {
        value = value.toLowerCase();
        const name = repositories.filter(projectName => (projectName.name ? projectName.name.toLowerCase().includes(value) : null));
        const language = repositories.filter(projectLanguage => (projectLanguage.language ? projectLanguage.language.toLowerCase().includes(value) : null));
        const description = repositories.filter(projectDescription => (projectDescription.description ? projectDescription.description.toLowerCase().includes(value) : null));

        let listOfProjects = name.concat(language);
        listOfProjects = listOfProjects.concat(description);

        return listOfProjects;
    };

    const mapProjects = (projects: IRepository[]) => {
        const projectMap = new Map<number, IRepository>();
        for (const project of projects) {
            projectMap.set(project.id, project);
        }
        const resultOfMap = Array.from(projectMap.values());
        return resultOfMap;
    };

    return showProjects
};

export default useSearch;