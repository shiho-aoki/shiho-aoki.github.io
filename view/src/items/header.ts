import { INavigation, IProfileMenuItems } from '../../interface/header';
import { url } from './url';

export const navItems: Array<INavigation> = [
    { name: 'Latest Activity', href: url.LatestActivity, current: false },
    { name: 'Tech Note', href: url.TechNotes, current: false },
    { name: 'Timeline', href: url.ParsonalActivity, current: false },
    { name: 'Profile', href: url.Profile, current: true },
]
export const profItems: Array<IProfileMenuItems> = [
    { name: 'My Academic History', href: url.Academic, target: ''},
    { name: 'My Business Experience', href: url.Work, target: ''},
    { name: 'Zenn', href: 'https://zenn.dev/as_pml', target: '_blank'},
    { name: 'GitHub', href: 'https://github.com/shiho-aoki', target: '_blank' },
]