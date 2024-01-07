"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from '@/components/ui/button'

const MotionBasics = () => {
    const [visible, setVisible] = useState(true);
    return (
        <div className='w-full border border-border p-4 flex flex-col items-center gap-7'>
            <section>
                <h2 className='text-3xl font-bold'>MotionBasics</h2>
            </section>
            <section className='flex flex-col items-center justify-center gap-2 h-[20rem]'>
                <div>
                    <motion.div
                        layout
                    >
                        <Button
                            onClick={() => setVisible(!visible)}
                        >
                            Show / Hide
                        </Button>
                    </motion.div>
                </div>
                <div>
                    <AnimatePresence mode='popLayout'>
                        {
                            visible &&
                            <motion.div
                                initial={{
                                    rotate: '0deg',
                                    scale: 0,
                                    y: 0,
                                }}
                                animate={{
                                    rotate: '180deg',
                                    scale: 1,
                                    y: [0, 150, -150, -150, 0],
                                }}
                                exit={{
                                    rotate: '0deg',
                                    scale: 0,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: 'backInOut',
                                    times: [0, 0.25, 0.5, 0.85, 1]
                                }}
                                className='h-40 w-40 bg-primary'
                            />
                        }
                    </AnimatePresence>
                </div>
            </section>
        </div>
    )
}

export default MotionBasics