import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Injectable()
export class ItemsEffects {

    loadItems$ = createEffect(() => this.actions$.pipe(
        ofType('[Character Page] Init'),
        mergeMap(() => this.apiService.getCharacters()
            .pipe(
                map(response => ({ type: '[Character Page] Loaded Success', characterResult: response }),
                    catchError(() => EMPTY)
                ))
        )
    ));

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) { }
}
