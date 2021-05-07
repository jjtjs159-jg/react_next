import dynamic from 'next/dynamic';
const Page = dynamic(() => import('containers/index'));
export default Page;
