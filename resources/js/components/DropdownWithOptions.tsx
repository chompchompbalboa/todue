//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { RefObject, useEffect } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const DropdownWithOptions = ({ 
  activeDropdownOptionIndex,
  children,
  className,
  containerRef,
  closeDropdown,
  dropdownOptions,
  isDropdownVisible,
  selectDropdownOption,
  setActiveDropdownOptionIndex
}: IDropdownWithOptions) => {

  // Add event listeners when the dropdown is visible
  useEffect(() => {
    if(isDropdownVisible) {
      addEventListener('mousedown', closeDropdownOnClickOutside)
      addEventListener('keydown', handleDropdownKeydown)
    }
    else {
      removeEventListener('mousedown', closeDropdownOnClickOutside)
      removeEventListener('keydown', handleDropdownKeydown)
    }
    return () => {
      removeEventListener('mousedown', closeDropdownOnClickOutside)
      removeEventListener('keydown', handleDropdownKeydown)
    }
  }, [ 
    activeDropdownOptionIndex, 
    closeDropdown,
    containerRef && containerRef.current, 
    dropdownOptions, 
    isDropdownVisible,
    selectDropdownOption
  ])

  // Update the activeDropdownIndex when dropdownOptionsLength is 0
  useEffect(() => {
    if(dropdownOptions.length === 0 && activeDropdownOptionIndex !== 0) {
      setActiveDropdownOptionIndex(0)
    }
  }, [ activeDropdownOptionIndex, dropdownOptions.length ])

  // Close Dropdown On Click Outside
  const closeDropdownOnClickOutside = (e: MouseEvent) => {
    if(containerRef && containerRef.current && !containerRef.current.contains(e.target as Node)) {
      closeDropdown()
    }
  }

  // Update Active Dropdown Option Index On Keydown
  const handleDropdownKeydown = (e: KeyboardEvent) => {
    // Close the dropdown when 'Escape' is pressed
    if(e.key === 'Escape') {
      closeDropdown()
    }
    // Update the active dropdown option index when 'ArrowUp' or 'ArrowDown' is pressed
    if(setActiveDropdownOptionIndex) {
      if(e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveDropdownOptionIndex(Math.max(0, activeDropdownOptionIndex - 1))
      }
      if(e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveDropdownOptionIndex(Math.min(dropdownOptions.length - 1, activeDropdownOptionIndex + 1))
      }
    }
    // Select the active dropdown option when 'Enter' or 'Tab' is pressed
    if(selectDropdownOption && ([ 'Enter', 'Tab' ].includes(e.key))) {
      selectDropdownOption()
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
export interface IDropdownWithOptions {
  activeDropdownOptionIndex?: number
  className?: string
  containerRef: RefObject<HTMLElement>
  children?: any
  closeDropdown(): void
  dropdownOptions: any[]
  isDropdownVisible: boolean
  selectDropdownOption?(): void 
  setActiveDropdownOptionIndex?(nextActiveDropdownOptionIndex: number): void
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
  width: 100%;
  max-height: 50vh;
  background-color: white;
  box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.25);
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

export default DropdownWithOptions