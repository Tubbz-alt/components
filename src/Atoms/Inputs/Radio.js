// @flow strict
import * as React from 'react'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
import { fontSize, theme } from '../../Tools/interpolation'
import type { PropsType } from './Input'

const toId = (value?: string | number) =>
  `${value != null ? value : '' || ''}-checkbox`

const Wrapper = styled.div`
  display: flex;
`

const RadioButton = styled.span`
  margin-right: 0.5rem;
  background: ${theme('inputBackgroundColor')};
  border: 2px solid ${theme('inputBorderColor')};
  box-sizing: border-box;
  border-radius: 50%;
  height: 16px;
  width: 16px;
`

const Input = styled.input.attrs(injectE2E)`
  position: absolute;
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  visibility: visible;
  white-space: nowrap;
  width: 1px;
  user-select: none;

  &:focus ~ label ${RadioButton} {
    box-shadow: 0 0 0 2px ${theme('inputActiveColor')};
    outline: 1px solid transparent;
  }

  &:checked ~ label ${RadioButton} {
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: ${theme('inputCheckedColor')};

    &::before {
      border-radius: 51%;
      content: '';
      display: inline-block;
      height: 8px;
      width: 8px;
      position: relative;
      background: ${theme('inputCheckedColor')};
    }
  }
`

export const RadioLabel = styled.label`
  position: relative;
  left: 1px;
  display: flex;
  align-items: center;
  min-height: 1rem;
  cursor: pointer;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('md')};
`

const Radio = ({ className, forwardRef: ref, input, ...rest }: PropsType) => {
  const value = input ? input.value : rest.value
  return (
    <Wrapper className={className}>
      <Input {...input} {...rest} id={toId(value)} ref={ref} type="radio" />
      <RadioLabel htmlFor={toId(value)}>
        <RadioButton />
        {rest.label}
      </RadioLabel>
    </Wrapper>
  )
}

type RefPropsType = { ...PropsType }

const RadioWithRef = (props, ref) => <Radio {...props} forwardRef={ref} />

export default React.forwardRef<RefPropsType, _>(RadioWithRef)
