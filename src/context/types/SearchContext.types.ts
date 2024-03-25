export interface IAction {
    name: string;
    value: string;
}

export interface ISearchContextProps {
    context: {
        search: string;
    };
    dispatch: React.Dispatch<IAction>;
}
