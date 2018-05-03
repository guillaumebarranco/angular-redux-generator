import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { IAppState } from '$$storePath$$';
import { BaseDispatcher } from '$$baseDispatcherPath$$';

import { $$nameUpper$$IsLoadingAction } from '$$actionsPath$$';

@Injectable()
export class $$nameUpper$$Dispatcher extends BaseDispatcher {
	subscriptions: Subscription[] = [];

	constructor(protected ngRedux: NgRedux<IAppState>) {
		super(ngRedux);
	}

	setIsLoading(value: boolean): void {
		this.dispatch<$$nameUpper$$IsLoadingAction>({
			type: '$$nameTotalUpper$$_IS_LOADING',
			payload: value,
		});
	}
}
