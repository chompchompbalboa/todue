//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'

import { 
  IActiveEditor,
  editorConfig
} from '@native/Todo/Todo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoEditorHeader = ({
  activeEditor,
  closeEditor
}: ITodoEditorHeader) => {

  return (
    <ContainerTouchable
      onPress={closeEditor}>
      <Container>
        {activeEditor &&
          <>
            <Icon>
              <Feather
                name="arrow-left"
                size={26}
                color="black"/>
            </Icon>
            <Label>
              {editorConfig[activeEditor].label}
            </Label>
          </>
        }
      </Container>
    </ContainerTouchable>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoEditorHeader {
  activeEditor: IActiveEditor
  closeEditor(): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ContainerTouchable = styled.TouchableWithoutFeedback``
const Container = styled.View`
  background-color: white;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 0;
  flex-direction: row;
  align-items: center;
`

const Icon = styled.View`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`

const Label = styled.Text`
  font-size: 24px;
  font-family: OpenSans_600SemiBold;
  top: -2px;
`

export default TodoEditorHeader
