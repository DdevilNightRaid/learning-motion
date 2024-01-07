"use client"
import React, { useEffect, useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { cn } from '@/lib/utils';
const ViewBasedAnimations = () => {
    const nref = useRef(null);
    const isInView = useInView(nref, { once: true });

    useEffect(() => {
        // alert('is in view: ', isInView)
        // some code 
    }, [isInView])
    return (
        <div className='w-full border border-border h-full p-4 flex flex-col items-center gap-7'>
            <div className='w-full text-left'>
                <h2 className='text-3xl font-bold'>ViewBasedAnimations</h2>
            </div>
            <div className='w-full'>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className='bg-foreground w-full h-screen'
                >
                </motion.div>
                <div
                    ref={nref}
                    className={cn("h-screen bg-destructive transition-colors duration-1000",
                        isInView && "bg-foreground"
                    )}
                >

                </div>
            </div>
        </div>
    )
}

export default ViewBasedAnimations