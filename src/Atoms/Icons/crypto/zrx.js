import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#302C2C" fill-rule="nonzero"/><path fill="#FFF" d="M15.496 27c-.27-.028-.54-.053-.81-.085a10.88 10.88 0 0 1-4.122-1.364c-.019-.01-.036-.025-.073-.05 2.206-1.65 4.402-3.29 6.61-4.94l.665.647c.37.362.742.72 1.105 1.087.09.09.155.089.26.035a7.149 7.149 0 0 0 2.728-2.39l.107-.158c.031.036.06.065.084.097.767 1.022 1.533 2.044 2.303 3.063.067.088.059.14-.012.22-1.783 2.026-3.999 3.274-6.67 3.701-.336.054-.677.074-1.016.111-.045.005-.09.017-.134.026h-1.025zm.97-22c.186.019.373.039.56.056 1.576.15 3.05.617 4.423 1.4.02.012.037.026.07.05l-6.718 4.819c-.089-.084-.175-.164-.26-.247-.472-.46-.946-.919-1.415-1.383-.075-.074-.132-.082-.226-.035a7.147 7.147 0 0 0-2.77 2.424l-.1.15-2.468-3.288c.249-.264.479-.527.728-.77 1.623-1.583 3.55-2.59 5.783-2.995.43-.078.869-.104 1.304-.155.049-.005.098-.017.146-.026h.942zM6.458 10.534l4.995 6.548-1.008 1.034c-.251.257-.5.517-.756.77-.072.072-.075.127-.031.215a7.134 7.134 0 0 0 2.423 2.77c.035.022.07.045.103.07.006.004.009.014.027.048L8.95 24.435C7 22.756 5.735 20.687 5.227 18.178c-.544-2.686-.103-5.224 1.232-7.644zm14.175 4.37l.918-.953c.256-.266.508-.535.77-.794.082-.081.081-.142.033-.238a7.137 7.137 0 0 0-2.45-2.798c-.037-.025-.073-.052-.136-.097l3.279-2.46c1.857 1.59 3.09 3.55 3.656 5.915.707 2.952.077 5.872-1.147 7.928l-4.923-6.503z"/></g>
  </>
)

export const CryptoZrx = withStyle(InnerSvg, 32, 32, 'CryptoZrx', true)