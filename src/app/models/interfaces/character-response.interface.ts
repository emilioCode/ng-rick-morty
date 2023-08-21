export interface CharacterResponse {
    info: InfoCharacterRequest | undefined,
    results: ReadonlyArray<Character>
}

export interface InfoCharacterRequest {
    count: number;
    next: string;
    pages: number;
    prev: string;
}

export interface Character {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: object;
    name: string;
    origin: object;
    species: string;
    status: string;
    type: string;
    url: string;
}