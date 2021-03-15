import Close from './Close.svg';

type Icon = 'Close';

type Images = {
    [key in Icon]: React.FunctionComponent;
};

const images: Images = {
    Close,
};

export default images;
