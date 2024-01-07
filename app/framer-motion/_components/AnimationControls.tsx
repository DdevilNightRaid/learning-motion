"use client"
import React, { useState } from 'react'
import { motion, useAnimationControls, AnimatePresence } from "framer-motion"
import { Button } from '@/components/ui/button'
const AnimationControls = () => {
    const [visible, setVisible] = useState(true);
    const controls = useAnimationControls();
    const handleClick = () => {
        controls.start("flip")
        // setVisible(!visible)
    }
    return (
        <div className='w-full border border-border p-4 flex flex-col items-center gap-7'>
            <div className='w-full text-left'>
                <h2 className='text-3xl font-bold'>AnimationControls</h2>
            </div>
            <div className='flex flex-col gap-7 items-center'>
                <motion.div>
                    <Button
                        onClick={handleClick}
                    >
                        Animate
                    </Button>
                </motion.div>
                <div>
                    <AnimatePresence>
                        {
                            visible && (
                                <motion.div
                                    variants={{
                                        initial: {
                                            rotate: '0deg',
                                            scale: 0,
                                            y: 0,
                                        },
                                        flip: {
                                            rotate: '180deg',
                                            scale: 1,
                                            y: [0, 150, -150, -150, 0],
                                        },
                                        vanish: {
                                            rotate: '0deg',
                                            scale: 0,
                                            y: 0,
                                        }
                                    }}
                                    initial="initial"
                                    animate={controls}
                                    exit="vanish"
                                    transition={{
                                        duration: 1,
                                        ease: 'backInOut',
                                        times: [0, 0.25, 0.5, 0.85, 1]
                                    }}
                                    className='h-40 w-40 bg-primary'
                                >
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default AnimationControls