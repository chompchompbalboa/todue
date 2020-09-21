//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import { updateActiveSublistId } from '@/state/active/actions'

import ListsListSublistNameInput from '@native/Lists/ListsListSublistNameInput'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ListsListSublistName = ({
  listId,
  sublistId,
  setIsListsVisible
}: IListsListSublistName) => {

  // Redux
  const dispatch = useDispatch()
  const sublistName = useSelector((state: IAppState) => state.sublist.allSublists[sublistId]?.name)

  // Handle Sublist Name press
  const handleSublistNamePress = () => {
    dispatch(updateActiveSublistId(listId, sublistId))
    setIsListsVisible(false)
  }
  return (
    <Container>
      {sublistName === null 
        ? <ListsListSublistNameInput
            listId={listId}
            sublistId={sublistId}/>
        : <SublistNameTouchable
            onPress={handleSublistNamePress}>
            <SublistName>
              <SublistNameText>
                {sublistName}
              </SublistNameText>
            </SublistName>
          </SublistNameTouchable>
      }
    </Container>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistName {
  listId: IList['id']
  sublistId: ISublist['id']
  setIsListsVisible(nextIsListsVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
`

const SublistNameTouchable = styled.TouchableWithoutFeedback``
const SublistName = styled.View`
  padding: 1px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SublistNameText = styled.Text`
  font-size: 20px;
  font-family: OpenSans_400Regular;
  color: black;
`

export default ListsListSublistName
