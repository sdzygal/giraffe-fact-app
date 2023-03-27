export type GiraffeFact = {
    fact: string;
};

export type GiraffeImg = {
    img: any;
};

export interface ImgService {
    getRandomImg: () => GiraffeImg;
}

export interface FactService {
    getRandomFact: () => GiraffeFact;
}
