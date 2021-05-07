import dynamic from 'next/dynamic';
const Page = dynamic(() => import('containers/contact/index'));
export default Page;
