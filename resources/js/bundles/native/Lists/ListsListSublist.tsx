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

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ListsListSublist = ({
  listId,
  sublistId
}: IListsListSublist) => {

  // Redux
  const dispatch = useDispatch()
  const sublistName = useSelector((state: IAppState) => state.sublist.allSublists[sublistId]?.name)

  return (
    <Container>
      <SublistNameTouchable
        onPress={() => dispatch(updateActiveSublistId(listId, sublistId))}>
        <SublistName>
          {sublistName}
        </SublistName>
      </SublistNameTouchable>
    </Container>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublist {
  listId: IList['id']
  sublistId: ISublist['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View``

const SublistNameTouchable = styled.TouchableWithoutFeedback``
const SublistName = styled.Text`
  font-size: 22px;
  font-family: OpenSans_400Regular;
`

export default ListsListSublist
