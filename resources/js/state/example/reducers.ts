//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import { 
  IExampleActions,
  EXAMPLE_ACTION
} from '@/state/example/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
export type IExampleState = {
  exampleStateData: any
}

export const initialDraftState: IExampleState = {
  exampleStateData: null
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const example = (state = initialDraftState, action: IExampleActions): IExampleState => {
	switch (action.type) {

    case EXAMPLE_ACTION: {
      const { exampleActionData } = action
      return {
        ...state,
        exampleStateData: exampleActionData
      }
    }

		default:
			return state
	}
}

export default example
