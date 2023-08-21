
import { createSelector } from '@ngrx/store';
import { CharacterResponse } from 'src/app/models/interfaces/character-response.interface';
import { AppState } from '../app.state';

export const selectCharacters = (state: AppState) => state.characters;

export const selectListCharacters = createSelector(
    selectCharacters,
    (state: CharacterResponse) => state.results
);