//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { RefObject, useEffect } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Dropdown = ({ 
  bottom = 'auto',
  children,
  className,
  containerRef,
  closeDropdown,
  isDropdownVisible,
  minHeight = "auto",
  minWidth = "auto",
  top = '100%'
}: IDropdown) => {

  // Add event listeners when the dropdown is visible
  useEffect(() => {
    if(isDropdownVisible) {
      addEventListener('click', closeDropdownOnClickOutside)
    }
    else {
      removeEventListener('click', closeDropdownOnClickOutside)
    }
    return () => {
      removeEventListener('click', closeDropdownOnClickOutside)
    }
  }, [ 
    closeDropdown,
    containerRef && containerRef.current, 
    isDropdownVisible
  ])

  // Close Dropdown On Click Outside
  const closeDropdownOnClickOutside = (e: MouseEvent) => {
    if(containerRef && containerRef.current && !containerRef.current.contains(e.target as Node)) {
      closeDropdown()
    }
  }

  return (
    <StyledDropdown
      bottom={bottom}
      className={className}
      isDropdownVisible={isDropdownVisible}
      minHeight={minHeight}
      minWidth={minWidth}
      top={top}>
      {children}
    </StyledDropdown>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
export interface IDropdown {
  bottom?: string
  className?: string
  containerRef: RefObject<HTMLElement>
  children?: any
  closeDropdown(): void
  isDropdownVisible: boolean
  minHeight?: string
  minWidth?: string
  top?: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledDropdown = styled.div`
  z-index: 10;
  position: absolute;
  display: ${ ({ isDropdownVisible }: IStyledDropdown ) => isDropdownVisible ? 'block' : 'none' };
  top: ${ ({ bottom, top }: IStyledDropdown ) => bottom !== 'auto' ? 'auto' : top };
  bottom: ${ ({ bottom }: IStyledDropdown ) => bottom };
  left: 0;
  min-width: ${ ({ minWidth }: IStyledDropdown ) => minWidth };
  min-height: ${ ({ minHeight }: IStyledDropdown ) => minHeight };
  max-height: 50vh;
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
  border: 1px solid rgb(180, 180, 180);
  overflow-y: visible;
	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`
interface IStyledDropdown {
  bottom: string
  isDropdownVisible: boolean
  minWidth: string
  minHeight: string
  top: string
}

export default Dropdown
