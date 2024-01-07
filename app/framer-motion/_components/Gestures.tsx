'use client'
import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { Button } from '@/components/ui/button'
const Gestures = () => {
    return (
        <div className='w-full border border-border p-4 flex flex-col items-center gap-7'>
            <div className='flex flex-col gap-10'>
                <MotionConfig
                    transition={{
                        duration: 0.124,
                        ease: "easeInOut"
                    }}
                >
                    <motion.div
                        whileHover={{
                            scale: 1.2
                        }}
                        whileTap={{
                            scale: 1,
                            rotate: "-5.5deg"
                        }}
                    >
                        <Button className='text-xl font-medium'>
                            Click
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.2
                        }}
                        whileTap={{
                            scale: 1,
                            rotate: "5.5deg"
                        }}
                    >
                        <Button
                            variant={'secondary'}
                            className='text-xl font-medium'
                        >
                            Click
                        </Button>
                    </motion.div>
                </MotionConfig>
            </div>
        </div>
    )
}

export default Gestures