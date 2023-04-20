import useThemeStore from 'stepin/es/theme-editor/store';
import { useSettingStore } from '@/store';

import GreenImg from '@/assets/theme/green.png';
import VscodeImg from '@/assets/theme/vscode.png';
import PinkImg from '@/assets/theme/pink.png';
import SideDarkImg from '@/assets/theme/side-dark.png';
import HeaderDarkImg from '@/assets/theme/header-dark.png';
import PurpleImg from '@/assets/theme/purple.png';
import ChinaRedImg from '@/assets/theme/china-red.png';
import OrangeImg from '@/assets/theme/orange.png';
import IdeaImg from '@/assets/theme/idea.png';
import LightImg from '@/assets/theme/light.png';

export function configTheme(key: string) {
  const { setBgSeriesColors } = useThemeStore();
  const { setNavigation } = useSettingStore();
  switch (key) {
    case 'night':
      setBgSeriesColors({ 'bg-base': '#1D1D1F' });
      break;
    case 'side-dark':
      setBgSeriesColors({ 'bg-base': '#fff', 'bg-side': '#001129' });
      setNavigation('side');
      break;
    case 'header-dark':
      setBgSeriesColors({ 'bg-base': '#fff', 'bg-header': '#001129' });
      setNavigation('head');
      break;
    case 'light':
      setBgSeriesColors({ 'bg-base': '#fff' });
      setNavigation('side');
      break;
    case 'vscode':
      setBgSeriesColors({ 'bg-base': '#23272E' });
      setNavigation('side');
      break;
    case 'idea':
      setBgSeriesColors({ 'bg-base': '#2B2B2B' });
      setNavigation('side');
      break;
    case 'green':
      setBgSeriesColors({ 'bg-base': '#013a54' });
      setNavigation('side');
      break;
    case 'pink':
      setBgSeriesColors({ 'bg-base': '#B6266D' });
      setNavigation('side');
      break;
    case 'purple':
      setBgSeriesColors({ 'bg-base': '#361F68' });
      setNavigation('side');
      break;
    case 'china':
      setBgSeriesColors({ 'bg-base': 'rgb(230, 0, 0)' });
      setNavigation('side');
      break;
    case 'orange':
      setBgSeriesColors({ 'bg-base': '#B1740D' });
      setNavigation('side');
      break;
  }
}

export const themeList = [
  { title: '亮色模式', key: 'light', imgUrl: LightImg },
  { title: '侧边暗色菜单', key: 'side-dark', imgUrl: SideDarkImg },
  { title: '顶部暗色菜单', key: 'header-dark', imgUrl: HeaderDarkImg },
  { title: 'VSCode风', key: 'vscode', imgUrl: VscodeImg },
  { title: 'IDEA风', key: 'idea', imgUrl: IdeaImg },
  { title: '墨绿风', key: 'green', imgUrl: GreenImg },
  { title: '芭比粉', key: 'pink', imgUrl: PinkImg },
  { title: '暗夜紫', key: 'purple', imgUrl: PurpleImg },
  { title: '中国红', key: 'china', imgUrl: ChinaRedImg },
  { title: '活力橙', key: 'orange', imgUrl: OrangeImg },
];
