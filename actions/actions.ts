export type $$nameUpper$$ActionType =
	| '$$nameTotalUpper$$_IS_LOADING'
	| 'UNKNOWN';

export type $$nameUpper$$Actions = $$nameUpper$$IsLoadingAction;

export interface $$nameUpper$$Action {
	type: $$nameUpper$$ActionType;
}

export interface $$nameUpper$$ActionWith<Payload> extends $$nameUpper$$Action {
	payload: Payload;
}

export interface $$nameUpper$$IsLoadingAction extends $$nameUpper$$ActionWith<boolean> {
	type: '$$nameTotalUpper$$_IS_LOADING';
}
