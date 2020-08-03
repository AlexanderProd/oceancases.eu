import React from 'react'

import { LogoWrapepr } from './styles'

const Logo = ({ color, height = 32, onClick }) => (
  <LogoWrapepr onClick={onClick}>
    <svg height={height} viewBox="0 0 500 500" style={{ color }}>
      <path
        fill="currentColor"
        d="M495,250.3c0-15.4-1.1-23.7-3.3-37.5c0,0,0,0,0-0.6c0-0.6-0.6-1.1-0.6-1.7s-0.6-1.1-0.6-1.1
		c-0.6-0.6-0.6-0.6-1.1-1.1c-0.6-0.6-0.6-0.6-1.1-1.1c-0.6,0-1.1-0.6-1.1-0.6c-0.6,0-1.1-0.6-1.7-0.6c0,0,0,0-0.6,0s-0.6,0-1.1,0
		s-0.6,0-1.1,0c0,0,0,0-0.6,0s-1.1,0.6-1.7,0.6c-0.6,0-1.1,0.6-1.1,0.6c-0.6,0.6-0.6,0.6-1.1,1.1c-0.6,0.6-0.6,0.6-1.1,1.1
		c0,0.6-0.6,1.1-0.6,1.1c0,0.6-0.6,1.1-0.6,1.7c0,0,0,0,0,0.6c-2.2,19.8-18.2,47.9-41.3,72.7l0,0c-10.5,9.9-21.5,19.8-33.1,27.6
		c-20.9,14.9-44.6,24.8-72.7,24.8c-16.5,0-34.2-3.3-52.4-10.5c-40.2-14.9-44.6-56.8-44.6-73.8c-1.1-30.9,12.1-58.4,24.2-63.9
		c0.6-0.6,1.7-0.6,2.2-1.1c0,0,0,0,0.6,0l0,0c19.3-3.9,38-1.1,45.7,7.7c3.3,3.9,4.4,8.8,2.2,14.9c-6.1,16.5-1.7,35.3,11,45.7
		c12.7,10.5,29.8,10.5,45.7,0.6c18.7-11,29.2-29.2,29.2-49.6c0-10.5-2.8-20.4-8.3-29.8c14.3,3.3,29.2,2.8,39.7-7.7
		c10.5-10.5,13.2-26.5,6.6-41.9c-7.7-18.2-30.3-39.1-70.5-39.1c-13.8,0-24.8,0.6-34.7,1.1c-16,1.1-28.7,1.7-45.7-1.1
		c-13.8-2.2-19.8-7.2-20.9-11c-0.6-2.2,0.6-4.4,1.7-5.5c3.3-3.3,11-6.1,22-2.8c17.6,5.5,28.7-1.7,33.6-6.1c8.3-8.3,11.6-20.9,8.8-32
		c-2.8-10.5-10.5-18.2-21.5-20.4l0,0l0,0c-17.6-3.9-35.8-6.1-54.6-6.1C114.7,5.1,4.5,115.3,4.5,250.3
		c0,111.3,74.4,205.5,176.3,235.3c0.6,0,1.1,0.6,1.7,0.6h0.6c1.7,0.6,3.3,1.1,5,1.1c15.4,4.4,32,6.6,48.5,7.2c2.2,0,3.9,0,6.1,0
		c1.7,0,3.3,0,4.4,0c0.6,0,1.1,0,1.1,0s0,0,0.6,0c0.6,0,0.6,0,1.1,0c1.1,0,2.2,0,3.3,0c0.6,0,1.7,0,2.2,0
		C388.6,491.7,495,383.1,495,250.3z M220,363.3c-1.1,0-2.8,0-4.4-0.6c-13.2-2.8-13.2-14.3-13.8-22.6c-0.6-8.8-1.1-12.1-5.5-19.3
		c-2.2-3.3,0.6-6.6,3.9-6.6c0.6,0,1.1,0,2.2,0.6c14.3,7.2,34.2,19.3,33.6,32.5C236,347.8,233.8,363.3,220,363.3z M249.8,21.6
		c17.1,0,34.2,1.7,50.7,5.5l0,0c6.1,1.7,8.3,5.5,9.4,8.8c1.7,5.5,0,12.1-4.4,16c-3.9,3.9-9.9,4.4-17.1,2.2
		c-14.9-4.4-29.8-2.2-38.6,6.6c-6.1,6.1-8.3,14.3-5.5,22c2.2,6.6,9.4,17.6,33.6,22c18.7,3.3,32.5,2.2,49.6,1.1
		c9.4-0.6,20.4-1.1,33.6-1.1c32,0,49.6,16,55.1,29.2c3.9,9.4,2.8,18.2-3.3,24.2c-12.1,12.1-43-2.2-57.3-10.5
		c-1.7-1.1-2.8-1.7-4.4-2.8c-3.9-2.2-8.8-1.1-11,2.8c-2.2,3.9-1.1,8.8,2.2,11c0.6,0.6,2.2,1.7,4.4,2.8
		c18.7,12.1,29.2,28.7,29.2,45.7c0,14.3-7.7,27-20.9,35.3c-10.5,6.1-19.8,6.6-27,0.6c-7.2-6.1-9.9-17.1-6.1-27.6
		c3.9-11.6,2.2-22.6-5-30.9c-11.6-13.2-35.8-18.2-61.7-13.2c-1.7,0.6-3.3,0.6-4.4,1.1c-9.4,2.8-27.6,9.9-41.3,22
		c-5-16.5-22-27-35.8-34.7c-8.3-5-19.3-11.6-19.3-15.4c0-5,6.1-12.7,12.7-14.3c6.1-1.7,11.6,2.2,16.5,10.5c7.7,13.8,22,23.1,34.7,22
		c10.5-0.6,19.3-6.6,24.2-17.6c3.9-8.3,3.9-18.7,0.6-27.6c-2.8-7.2-9.4-16.5-24.8-22.6c-4.4-1.7-8.8,0.6-10.5,4.4
		c-1.7,4.4,0.6,8.8,4.4,10.5c8.3,3.3,13.2,7.7,15.4,13.2c2.2,5.5,1.1,11,0,14.3c-2.2,5.5-5.5,8.3-9.9,8.3
		c-6.6,0.6-15.4-5.5-19.8-13.8c-12.1-21.5-28.7-19.8-34.7-18.2c-13.8,3.3-25.3,17.1-25.3,30.3c0,13.2,13.2,20.9,27,29.2
		c20.4,12.1,33.1,20.9,28.1,36.9c-0.6,1.7-1.7,2.8-3.9,3.9c-3.9,1.7-9.4,1.7-13.2,0c-6.1-2.8-11.6-7.2-16-11
		c-7.2-6.1-13.8-11.6-22-9.9c-5.5,0.6-9.9,3.9-13.8,9.9c-1.7,2.8-2.8,6.1-1.7,9.4c2.2,7.7,10.5,12.1,23.7,19.3
		c22.6,12.1,41.3,23.1,41.3,39.7c0,0.6,0,1.1,0,2.2c0,0.6,0,1.1,0,2.2c0,1.1-0.6,1.7-0.6,2.8c0,0.6-0.6,1.1-0.6,1.7
		s-0.6,1.1-0.6,1.7c-0.6,1.1-1.1,1.7-2.2,2.8c-0.6,0.6-1.1,1.1-1.7,1.7c-4.4,3.3-10.5,5-16,5l0,0c-7.7,0-17.6-3.3-19.3-13.2
		c-2.8-14.3-25.9-31.4-46.3-33.1c-9.9-1.1-18.7,1.7-24.8,7.7l-2.2,2.8c-0.6,0.6-1.1,1.7-1.7,2.2c-0.6,1.1-1.1,1.7-1.7,2.8
		c0,0.6-0.6,0.6-0.6,1.1c-0.6,0.6-0.6,1.1-1.1,2.2c-0.6,0-0.6,0.6-0.6,1.1l0,0c-0.6,0.6-0.6,1.7-0.6,2.2
		c-2.8,12.1,12.7,21.5,33.1,34.2c33.6,20.4,60.1,39.1,50.1,62.3c-2.2,5-6.6,9.9-12.1,13.2s-12.1,5-18.2,5
		c-12.7,0-23.1-7.7-29.2-21.5C85,346.2,77.8,339,69.6,339c-6.1,0-11.6,3.3-15.4,9.9c-1.7,3.9-3.3,8.3-3.3,13.2
		c-18.7-33.1-29.8-71.6-29.8-111.9C21.1,124.1,123.6,21.6,249.8,21.6z"
      />
      <path
        fill="currentColor"
        d="M418.9,191.9c-6.6,0-12.1,3.3-16,8.8c-3.3,5.5-3.9,12.1-1.1,17.6c0,0.6,0,0.6,0.6,0.6c0,0.6,0,0.6,0,1.7v0.6
		c-0.6,3.3-0.6,7.7,0.6,12.7c2.2,7.7,7.7,13.8,15.4,16.5c2.8,1.1,6.1,1.7,8.8,1.7c12.7,0,20.9-9.4,24.2-18.7c0-0.6,0.6-1.1,0.6-2.2
		c2.2-12.7-5.5-24.8-22-35.8C426.1,193,422.8,191.9,418.9,191.9z M427.2,236c-1.1,0-2.2,0-3.3-0.6c-6.6-2.2-6.1-8.3-5.5-12.7
		c0.6-5,0.6-6.6-1.7-10.5c-0.6-1.7,0.6-3.3,2.2-3.3c0.6,0,1.1,0,1.1,0.6c6.6,5,16.5,12.7,15.4,19.8C435.5,228.8,433.3,236,427.2,236
		z"
      />
      <path
        fill="currentColor"
        d="M354.5,62.4l0.6,0.6c0,0,0.6,0.6,0.6,1.1v0.6c1.1,2.8,2.8,6.6,6.1,9.9c5,5.5,11.6,8.3,18.7,8.3
		c1.1,0,2.2,0,3.3,0c7.2-1.1,13.8-4.4,17.6-9.9c6.1-8.3,5-17.6,4.4-19.8c0-0.6-0.6-1.7-0.6-2.2c-6.1-17.6-29.8-20.4-37.5-21.5
		c-0.6,0-1.7,0-2.2,0c-8.3,0-15.4,5-17.6,12.7C345.6,49.7,348.4,58,354.5,62.4z M366,45.3L366,45.3c8.8,1.1,22,3.9,24.2,10.5
		c0,0,1.7,9.4-8.3,10.5c-0.6,0-1.1,0-1.7,0c-6.1,0-8.3-5-9.9-8.8c-1.7-3.9-2.8-5.5-6.6-8.3C362.7,48.1,363.8,45.3,366,45.3z"
      />
    </svg>
  </LogoWrapepr>
)

export default Logo