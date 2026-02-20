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
import ClubFeed from './clubFeed.svg';
import ClubMember from './clubMember.svg';
import ClubScore from './clubScore.svg';
import Dots from './dots.svg';
import DoubleArrow from './doubleArrow.svg';
import DownLoad from './download.svg';
import Drag from './drag.svg';
import Dustpan from './dustpan.svg';
import Etc from './etc.svg';
import Faq from './faq.svg';
import File from './file.svg';
import HandleApply from './handleApply.svg';
import Information from './information.svg';
import JoinActivity from './joinActivity.svg';
import List from './list.svg';
import Loading from './loading.svg';
import Locate from './locate.svg';
import Manage from './manage.svg';
import NavbarArrow from './navbar-arrow.svg';
import New from './new.svg';
import Peoples from './peoples.svg';
import Pin from './pin.svg';
import PlusMinus from './plusminus.svg';
import Refresh from './refresh.svg';
import Repair from './repair.svg';
import Report from './report.svg';
import Score from './score.svg';
import ScoreAdjust from './scoreAdjust.svg';
import Search from './search.svg';
import ShortReport from './shortReport.svg';
import Trash from './trash.svg';
import Upload from './upload.svg';
import Video from './video.svg';
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
  drag: Drag,
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
  score: Score,
  video: Video,
  information: Information,
  faq: Faq,
  handleApply: HandleApply,
  joinActivity: JoinActivity,
  manage: Manage,
  activityReport: ActivityReport,
  clubFeed: ClubFeed,
  clubMember: ClubMember,
  clubScore: ClubScore,
  doubleArrow: DoubleArrow,
  repair: Repair,
  cleaning: Cleaning,
  ScoreAdjust: ScoreAdjust,
};

export type IconName = keyof typeof Icons;
export const iconNames = Object.keys(Icons) as IconName[];
