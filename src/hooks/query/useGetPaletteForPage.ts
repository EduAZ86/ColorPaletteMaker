import { fetchData } from "@/lib/axios/axios.instance";
import { IColorPallete } from "@/types/dataApi";
import { useInfiniteQuery } from "@tanstack/react-query";

const getDataPalettesForPage = async ({ pageParam }: { pageParam: number }) => {
    const lengthPage = 10;
    try {
        const response = await fetchData.get(`/paletteColors?lengthPage=${lengthPage}&offset=${pageParam * lengthPage}`);
        return {
            data: response.data.data.response as  IColorPallete[],
            nextPage: pageParam + 1,
            isLastPage: response.data.data.response.length < lengthPage
        };
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
};
export const useGetPaletteForPage = () => {
    return useInfiniteQuery({
        queryKey: ['palettes'],
        queryFn: getDataPalettesForPage,
        getNextPageParam: (lastPage) => (lastPage.isLastPage ? undefined : lastPage.nextPage),
        initialPageParam: 0 
    });
};