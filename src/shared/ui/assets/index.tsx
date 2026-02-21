import ActivityReport from './activityReport.svg';
import Add from './add.svg';
import ArrowDown from './arrow-down.svg';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import ArrowUp from './arrow-up.svg';
import Camera from './camera.svg';
import Chart from './chart.svg';
import Check from './check.svg';
import Cleaning from './cleaning.svg';
import Close from './close.svg';
import Contacts from './contacts.svg';
import Cube from './cube.svg';
import Dots from './dots.svg';
import DownLoad from './download.svg';
import Drag from './drag.svg';
import Dustpan from './dustpan.svg';
import Etc from './etc.svg';
import Feed from './feed.svg';
import File from './file.svg';
import Heart from './heart.svg';
import Information from './information.svg';
import List from './list.svg';
import Loading from './loading.svg';
import Locate from './locate.svg';
import NavbarArrow from './navbar-arrow.svg';
import New from './new.svg';
import OpenBook from './openBook.svg';
import Peoples from './peoples.svg';
import Pin from './pin.svg';
import PlusMinus from './plusminus.svg';
import Questionmark from './questionmark.svg';
import Refresh from './refresh.svg';
import Repair from './repair.svg';
import Report from './report.svg';
import Score from './score.svg';
import Search from './search.svg';
import ShortReport from './shortReport.svg';
import Skip from './skip.svg';
import Star from './star.svg';
import Trash from './trash.svg';
import Upload from './upload.svg';
import Video from './video.svg';
import Write from './write.svg';

export const Icons = {
  activityReport: ActivityReport,
  add: Add,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  camera: Camera,
  chart: Chart,
  check: Check,
  cleaning: Cleaning,
  close: Close,
  contacts: Contacts,
  download: DownLoad,
  drag: Drag,
  dots: Dots,
  dustpan: Dustpan,
  etc: Etc,
  feed: Feed,
  file: File,
  heart: Heart,
  information: Information,
  list: List,
  loading: Loading,
  locate: Locate,
  cube: Cube,
  navbarArrow: NavbarArrow,
  new: New,
  openBook: OpenBook,
  peoples: Peoples,
  pin: Pin,
  plusMinus: PlusMinus,
  questionmark: Questionmark,
  refresh: Refresh,
  repair: Repair,
  report: Report,
  score: Score,
  search: Search,
  shortReport: ShortReport,
  skip: Skip,
  star: Star,
  trash: Trash,
  upload: Upload,
  video: Video,
  write: Write,
};

export type IconName = keyof typeof Icons;
export const iconNames = Object.keys(Icons) as IconName[];
