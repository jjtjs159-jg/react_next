import Counter from 'containers/counter/index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({
    adapter: new Adapter(),
});

describe('<Cointer />', () => {
    it('성공적으로 렌더링되어야 합니다.', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper.length).toBe(1);
    });
});
