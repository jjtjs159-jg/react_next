import dynamic from 'next/dynamic';
const Page = dynamic(() => import('containers/error/NotFound'));
export default Page;
