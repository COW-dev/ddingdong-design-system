import Add from './add.svg';
import ArrowDown from './arrow-down.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import ArrowUp from './arrow-up.svg';
import Check from './check.svg';
import Close from './close.svg';
import DownLoad from './download.svg';
import Etc from './etc.svg';
import File from './file.svg';
import List from './list.svg';
import Loading from './loading.svg';
import NavbarArrow from './navbar-arrow.svg';
import New from './new.svg';
import Pin from './pin.svg';
import Search from './search.svg';
import Trash from './trash.svg';
import Write from './write.svg';

export const Icons = {
  add: Add,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  close: Close,
  download: DownLoad,
  etc: Etc,
  file: File,
  list: List,
  navbarArrow: NavbarArrow,
  new: New,
  pin: Pin,
  search: Search,
  trash: Trash,
  write: Write,
  loading: Loading,
};

export type IconName = keyof typeof Icons;
export const iconNames = Object.keys(Icons) as IconName[];
