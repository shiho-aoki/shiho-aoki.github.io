import { FunctionalComponent } from "vue";

export interface INavigation {
    name: string;
    href: string;
    current: boolean
}

export interface IProfileMenuItems{
    name: string;
    href: string;
    target: string;
}

export interface IProfileChip {
    name: string;
    description: string;
    icon: FunctionalComponent;
    url: string;
    extract: boolean
}

export interface ILicenses {
    name: string;
    discription: string;
}

export interface IBachelor {
    title: string;
    type: string;
    where: string;
    date: string;
    summary?: string;
}