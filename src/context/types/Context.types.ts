export interface IContextProps {
    profile: any;
    repositories: any[];
    isLoading: boolean;
    hasError: boolean;
    setProfile: (profile: any) => void;
    setRepositories: (repositories: any[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setHasError: (hasError: boolean) => void;
}
