import { Header } from 'components/headers';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({
    adapter: new Adapter(),
});

describe('<Header />', () => {
    it('성공적으로 렌더링되어야 합니다.', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.length).toBe(1);
    });
});
