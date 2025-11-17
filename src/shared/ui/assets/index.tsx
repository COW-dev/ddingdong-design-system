import Add from './add.svg';
import ArrowDown from './arrow-down.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import ArrowUp from './arrow-up.svg';
import Camera from './camera.svg';
import Chart from './chart.svg';
import Check from './check.svg';
import Close from './close.svg';
import Dots from './dots.svg';
import DownLoad from './download.svg';
import Dustpan from './dustpan.svg';
import Etc from './etc.svg';
import File from './file.svg';
import List from './list.svg';
import Loading from './loading.svg';
import Locate from './locate.svg';
import NavbarArrow from './navbar-arrow.svg';
import New from './new.svg';
import Peoples from './peoples.svg';
import Pin from './pin.svg';
import PlusMinus from './plusminus.svg';
import Refresh from './refresh.svg';
import Report from './report.svg';
import Search from './search.svg';
import ShortReport from './shortReport.svg';
import Trash from './trash.svg';
import Upload from './upload.svg';
import Write from './write.svg';

export const Icons = {
  add: Add,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  close: Close,
  camera: Camera,
  chart: Chart,
  download: DownLoad,
  dots: Dots,
  dustpan: Dustpan,
  peoples: Peoples,
  plusMinus: PlusMinus,
  report: Report,
  shortReport: ShortReport,
  etc: Etc,
  file: File,
  list: List,
  navbarArrow: NavbarArrow,
  new: New,
  pin: Pin,
  locate: Locate,
  search: Search,
  trash: Trash,
  write: Write,
  loading: Loading,
  refresh: Refresh,
  upload: Upload,
};

export type IconName = keyof typeof Icons;
export const iconNames = Object.keys(Icons) as IconName[];
