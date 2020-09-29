//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useRef } from 'react'
import { Animated, useWindowDimensions } from 'react-native'
import styled from 'styled-components/native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Modal = ({
  children,
  closeModal,
  isVisible,
  stickyHeaderIndices = []
}: IModal) => {

  // Window Dimensions
  const { height: windowHeight } = useWindowDimensions()

  // Refs
  const top = useRef(new Animated.Value(0)).current

  // Close the modal as needed
  useEffect(() => {
    if(isVisible) {
      Animated.timing(top, {
        useNativeDriver: true,
        toValue: 1,
        duration: 150
      }).start()
    }
    else {
      Animated.timing(top, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150
      }).start()
    }
  }, [ isVisible ])

  return (
    <Animated.View
      style={{
        zIndex: 1000,
        position: 'absolute',
        transform: [{
          translateY: top.interpolate({
            inputRange: [ 0, 0.5, 0.75, 1 ],
            outputRange: [ windowHeight, windowHeight * 0.25, windowHeight * 0.125, 0 ]
          })
        }],
        left: 0,
        width: '100%',
        height: '100%'
      }}>
      <CloseModalTouchable
        onPress={() => closeModal()}>
        <CloseModal />
      </CloseModalTouchable>
      <Content
        style={{
          height: '75%',
          width: '100%',
          shadowOpacity: 0.75,
          shadowRadius: 10,
          shadowColor: 'rgb(150, 150, 150)',
          shadowOffset: { height: 0, width: 0 },
        }}>
          <KeyboardAwareScrollView
            extraScrollHeight={20}
            stickyHeaderIndices={stickyHeaderIndices}
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
              backgroundColor: 'white',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            {children}
            </KeyboardAwareScrollView>
      </Content>
    </Animated.View>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IModal {
  children?: any
  closeModal(): void
  isVisible: boolean
  stickyHeaderIndices?: number[]
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const CloseModalTouchable = styled.TouchableWithoutFeedback``
const CloseModal = styled.View`
  height: 25%;
  width: 100%;
`

const Content = styled.View``

export default Modal
