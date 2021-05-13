import dynamic from 'next/dynamic';
const Page = dynamic(() => import('containers/city/index'));
export default Page;
