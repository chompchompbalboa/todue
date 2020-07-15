//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { RefObject, useEffect } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Dropdown = ({ 
  children,
  className,
  containerRef,
  closeDropdown,
  isDropdownVisible,
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
      className={className}
      isDropdownVisible={isDropdownVisible}>
      {children}
    </StyledDropdown>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
export interface IDropdown {
  className?: string
  containerRef: RefObject<HTMLElement>
  children?: any
  closeDropdown(): void
  isDropdownVisible: boolean
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledDropdown = styled.div`
  z-index: 10;
  position: absolute;
  display: ${ ({ isDropdownVisible }: IStyledDropdown ) => isDropdownVisible ? 'block' : 'none' };
  top: 100%;
  left: 0;
  max-height: 50vh;
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
  border: 1px solid rgb(180, 180, 180);
  overflow-y: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`
interface IStyledDropdown {
  isDropdownVisible: boolean
}

export default Dropdown
