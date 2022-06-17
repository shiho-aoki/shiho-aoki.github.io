import { INavigation, IProfileMenuItems } from '../interface/main';
import { url } from '../url';

export const navItems: Array<INavigation> = [
    { name: 'Latest Activity', href: url.LatestActivity, current: true },
    { name: 'Tech Note', href: url.TechNotes, current: false },
    { name: 'Timeline', href: url.ParsonalActivity, current: false },
    { name: 'Profile', href: url.Profile, current: false },
]
export const profItems: Array<IProfileMenuItems> = [
    { name: 'Profile', href: url.Academic, target: ''},
    { name: 'Zenn', href: 'https://zenn.dev/as_pml', target: '_blank'},
    { name: 'GitHub', href: 'https://github.com/shiho-aoki', target: '_blank' },
]

export const test: string = "test string message!"