import { Reducer } from 'redux';
import { $$nameUpper$$Actions } from '$$actionsPath$$';

export interface $$nameUpper$$State {
	loading: boolean;
}

export const initialState: $$nameUpper$$State = {
	loading: false,
};

export const $$nameCamel$$Reducer: Reducer<$$nameUpper$$State> = (
	state = initialState,
	action: $$nameUpper$$Actions
): $$nameUpper$$State => {

	switch (action.type) {

		case "$$nameTotalUpper$$_IS_LOADING":
			return {
				...state,
				loading: action.payload,
			}

		default:
			return state;
	}
};
