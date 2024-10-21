'use client'
import React, { useEffect, useState } from 'react';
import { PaletteColorCard } from '../PaletteColorCard';
import { useGetPaletteForPage } from '@/hooks/query/useGetPaletteForPage';
import { useInView } from 'react-intersection-observer';
import { useDataPaletteStore } from '@/lib/store/dataPaletteStore';
import { Loader } from '../Loader/Loader';
export const CardMapper: React.FC = () => {

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetPaletteForPage();
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
            {isLoading
                ?
                <Loader />
                :
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
                    <div ref={ref} className='w-full h-1/2' />
                    {isFetchingNextPage &&
                        <Loader />}
                </div>
            }
        </div>
    )
}