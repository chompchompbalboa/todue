//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IExampleActions = IExampleAction

//-----------------------------------------------------------------------------
// Example Action

//-----------------------------------------------------------------------------
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'
interface IExampleAction {
  type: typeof EXAMPLE_ACTION
  exampleActionData: any
}

export const setAllTeams = (exampleActionData: any): IExampleActions => {
	return {
		type: EXAMPLE_ACTION,
		exampleActionData
	}
}