import { $$nameUpper$$Actions, $$nameUpper$$Action } from '$$actionsPath$$';
import { $$nameCamel$$Reducer , $$nameUpper$$State } from './$$name$$.reducer';

describe('$$nameUpper$$ Reducer', () => {

	it('$$nameTotalUpper$$_IS_LOADING should set isLoading with false', () => {
		const initialState: $$nameUpper$$State = {
			loading: true,
		};

		const $$nameUpper$$Mock: boolean = false;

		const action: $$nameUpper$$Actions = {
			type: '$$nameTotalUpper$$_IS_LOADING',
			payload: $$nameUpper$$Mock,
		};

		const newState = $$nameCamel$$Reducer(initialState, action);

		expect(newState.loading).toEqual($$nameUpper$$Mock);
	});

	it('UNKNOWN action should not affect state', () => {
		const initialState: $$nameUpper$$State = {
			loading: true,
		};

		const action: $$nameUpper$$Action = {
			type: 'UNKNOWN',
		};

		const newState = $$nameCamel$$Reducer(initialState, action);

		expect(newState).toEqual(initialState);
	});
});
