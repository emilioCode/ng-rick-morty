import { createReducer, on } from "@ngrx/store";
import { CharacterResponse } from "src/app/models/interfaces/character-response.interface";
import { loadCharacters, LoadedCharacters } from "../actions/characters.actions";

export const initialCharactersState: CharacterResponse = {
    info: undefined,
    results: []
};

export const charactersReducer = createReducer(
    initialCharactersState,
    on(loadCharacters, (state) => {
        return { ...state, info: undefined, results: [] }
    }),
    on(LoadedCharacters, (state, { characterResult }) => {
        return { ...state, info: characterResult.info, results: characterResult.results }
    })
);
