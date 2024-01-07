import React from 'react'
import AnimationControls from './_components/AnimationControls'
import Gestures from './_components/Gestures'
import MotionBasics from './_components/MotionBasics'
import ScrollAnimations from './_components/ScrollAnimations'
import ViewBasedAnimations from './_components/ViewBasedAnimations'

const page = () => {
  return (
    <div className='py-14 flex flex-col gap-7'>
      <MotionBasics />
      <Gestures />
      <AnimationControls />
      <ViewBasedAnimations />
      <ScrollAnimations />
    </div>
  )
}

export default page