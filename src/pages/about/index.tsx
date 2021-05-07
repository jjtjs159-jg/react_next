import dynamic from 'next/dynamic';
const Page = dynamic(() => import('containers/about/index'));
export default Page;
