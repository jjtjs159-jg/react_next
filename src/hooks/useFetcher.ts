import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// 오직 가져오는 정보에 대해서만 사용이 가능하다.
const useFetcher = (url: string) => {
    const endpoint = process.env.NEXT_PUBLIC_API_URL + url;

    const { data, error } = useSWR(endpoint, fetcher);

    return { data, error };
};

export default useFetcher;
