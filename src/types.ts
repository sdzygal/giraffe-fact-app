export type GiraffeFact = {
    fact: string;
};

export interface FactService {
    getRandomFact: () => GiraffeFact;
}