//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import axiosMock from 'axios'

import { 
  fireEvent,
  renderWithRedux 
} from '@/testing/library'
import { 
  createMockStore,
  getMockAppState
} from '@/testing/mocks'

import { 
  historyUndo,
  historyRedo
} from '@/state/history/actions'

import Lists from '@web/Lists/Lists'

//-----------------------------------------------------------------------------
// Tests
//-----------------------------------------------------------------------------
describe('Lists', () => {

  it("creates a new list when 'New List +' is clicked (including undo + redo)", async () => {
    // Setup
    const { queryAllByTestId, getByText, store: { dispatch, getState } } = renderWithRedux(<Lists />)
    expect(queryAllByTestId('ListsList').length).toBe(0)
    // Click the button to create a new list
    const newListButton = getByText('New List +')
    fireEvent.click(newListButton)
    expect(getState().list.lists.length).toBe(1)
    expect(queryAllByTestId('ListsList').length).toBe(1)
    const newListId = getState().list.lists[0]
    expect(getState().active.listId).toBe(newListId)
    expect(axiosMock.post).toHaveBeenCalledTimes(1)
    // Undo the new list creation
    dispatch(historyUndo())
    expect(getState().list.lists.length).toBe(0)
    expect(queryAllByTestId('ListsList').length).toBe(0)
    expect(getState().active.listId).toBe(null)
    expect(axiosMock.delete).toHaveBeenCalledTimes(1)
    // Redo the list creation
    dispatch(historyRedo())
    expect(getState().list.lists.length).toBe(1)
    expect(queryAllByTestId('ListsList').length).toBe(1)
    expect(getState().active.listId).toBe(newListId)
    expect(axiosMock.post).toHaveBeenCalledTimes(2)
  })

  it("displays the lists", async () => {
    // Setup
    const { queryAllByTestId, queryByText } = renderWithRedux(<Lists />, { store: createMockStore(getMockAppState({ numberOfLists: 2 })) })
    expect(queryAllByTestId('ListsList').length).toBe(2)
    expect(queryByText('List 1')).toBeTruthy()
    expect(queryByText('List 2')).toBeTruthy()
  })

})
