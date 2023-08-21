import { createAction, props } from "@ngrx/store";
import { Character, CharacterResponse } from "../../models/interfaces/character-response.interface";

export const loadCharacters = createAction(
    '[Character Page] Init'
)

export const LoadedCharacters = createAction(
    '[Character Page] Loaded Success',
    props<{ characterResult: CharacterResponse }>()
);