import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#3CB054"/><path fill="#FFF" d="M9 7.5c12.093.447 16.756 7.706 14.415 14.183-.663 1.803-1.368 2.79-2.85 3.817.06-.26.122-.52.17-.787.876-5.053-.785-11.134-8.912-14.493 6.466 3.848 9.075 10.695 6.06 15.115C12.75 26.142 9 21.759 9 16.709V7.5z"/></g>
  </>
)

export const CryptoPpc = withStyle(InnerSvg, 32, 32, 'CryptoPpc', true)