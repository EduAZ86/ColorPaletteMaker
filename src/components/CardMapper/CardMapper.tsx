'use client'
import React, { useEffect, useState } from 'react';
import { PaletteColorCard } from '../PaletteColorCard';
import { useGetPaletteForPage } from '@/hooks/query/useGetPaletteForPage';
import { useInView } from 'react-intersection-observer';
import { useDataPaletteStore } from '@/lib/store/dataPaletteStore';
export const CardMapper: React.FC = () => {

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetPaletteForPage();
    const { ref, inView } = useInView({
        threshold: 0.5
    })
    const { paletteColor, addPalettes } = useDataPaletteStore();
    const [hasLoaded, setHasLoaded] = useState(false);
    useEffect(() => {
        if (data) {
            const allPalettes = data.pages.flatMap(page => page.data);
            addPalettes(allPalettes);
        }
    }, [data, addPalettes]);

    useEffect(() => {
        if (inView && hasNextPage && hasLoaded) {
            fetchNextPage();  
        }

    }, [inView, hasNextPage]);
    useEffect(() => {
        setHasLoaded(true);
    }, []);

    return (
        <div
            className='
            w-full h-full flex-col'
        >
            <div
                className={`
                flex flex-row flex-wrap gap-4 justify-center items-center
                pb-24 md:pb-4
            `}
            >
                {paletteColor.map((palette, index) => (
                    <PaletteColorCard
                        key={`${index}-${palette._id}`}
                        paletteColorProp={palette}
                    />
                ))}
                <div ref={ref} style={{ height: 1 }} />
                {isFetchingNextPage && <p style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>Loading more...</p>}
            </div>
        </div>
    )
}