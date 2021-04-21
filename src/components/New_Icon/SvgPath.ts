import { FunctionComponent } from 'react';
import Close from './svg/Close.svg';
import Search from './svg/Search.svg';
import EyeClose from './svg/EyeClose.svg';
import EyeOpen from './svg/EyeOpen.svg';
import LockClose from './svg/LockClose.svg';
import LockOpen from './svg/LockOpen.svg';
import ListView from './svg/ListView.svg';
import IconView from './svg/IconView.svg';
import Plus from './svg/Plus.svg';
import CameraReset from './svg/CameraReset.svg';
import Model from './svg/Model.svg';
import Folder from './svg/Folder.svg';
import Motion from './svg/Motion.svg';
import FilledArrow from './svg/FilledArrow.svg';
import ChevronLeft from './svg/ChevronLeft.svg';
import BreadcrumbMore from './svg/BreadcrumbMore.svg';
import Layer from './svg/Layer.svg';
import Camera from './svg/Camera.svg';
import Dopesheet from './svg/Dopesheet.svg';
import PlayArrow from './svg/PlayArrow.svg';
import RewindArrow from './svg/RewindArrow.svg';
import Pause from './svg/Pause.svg';
import Export from './svg/Export.svg';
import PlayBar from './svg/PlayBar.svg';
import LineLeftTriangle from './svg/LineLeftTriangle.svg';
import CaretDown from './svg/CaretDown.svg';
import Check from './svg/Check.svg';
import Error from './svg/Error.svg';
import Refresh from './svg/Refresh.svg';
import Alert from './svg/Alert.svg';
import Reset from './svg/Reset.svg';

type Icon =
  | 'Close'
  | 'Search'
  | 'EyeClose'
  | 'EyeOpen'
  | 'LockClose'
  | 'LockOpen'
  | 'ListView'
  | 'IconView'
  | 'Plus'
  | 'CameraReset'
  | 'Model'
  | 'Folder'
  | 'Motion'
  | 'FilledArrow'
  | 'ChevronLeft'
  | 'BreadcrumbMore'
  | 'Layer'
  | 'Camera'
  | 'Dopesheet'
  | 'PlayArrow'
  | 'RewindArrow'
  | 'Pause'
  | 'Export'
  | 'PlayBar'
  | 'LineLeftTriangle'
  | 'CaretDown'
  | 'Check'
  | 'Error'
  | 'Refresh'
  | 'Alert'
  | 'Reset';

type Images = {
  [key in Icon]: FunctionComponent;
};

const images: Images = {
  Close,
  Search,
  EyeClose,
  EyeOpen,
  LockClose,
  LockOpen,
  ListView,
  IconView,
  Plus,
  CameraReset,
  Model,
  Folder,
  Motion,
  FilledArrow,
  ChevronLeft,
  BreadcrumbMore,
  Layer,
  Camera,
  Dopesheet,
  PlayArrow,
  RewindArrow,
  Pause,
  Export,
  PlayBar,
  LineLeftTriangle,
  CaretDown,
  Check,
  Error,
  Refresh,
  Alert,
  Reset,
};

export default images;
