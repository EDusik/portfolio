export interface IAction {
	action: string;
	payload: string;
}

export interface ISearchContextProps {
	context: {
        search: string;
    };
    dispatch: React.Dispatch<IAction>;
}
