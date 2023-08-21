import { ActionReducerMap } from "@ngrx/store";
import { CharacterResponse } from "../models/interfaces/character-response.interface";
import { charactersReducer } from "./reducers/characters.reducers";

export interface AppState {
    characters: CharacterResponse;
}

export const appReducer: ActionReducerMap<AppState> = {
    characters: charactersReducer
}