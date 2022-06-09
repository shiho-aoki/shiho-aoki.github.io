<template>
    <Disclosure as='nav' class='header navigation' v-slot='{ open }' >
        <div class='headerSub'>
            <!--@start mobile menu-->
            <div class='mobileMenu'>
                <DisclosureButton class='disclosureButton'>
                    <MenuIcon v-if='!open' class='menuIcon' aria-hiddem='ture' />
                    <XIcon v-else class='menuIcon' aria-hidden='true' />
                </DisclosureButton>
            </div>
            <!--@end   mobile menu-->

            <!--@start header meue mian-->
            <div class='headerMenu'>
                <div class='headerLogImage'>
                    <img class='mobileLogo' :src='mobileLogoPath' alt='as-pml' />
                    <img class='nomalLogo' :src='nomalLogoPath' alt='as-pml' />
                </div>
                <div class='headerMeneItems'>
                    <div class='headerMenuItem'>
                        <router-link v-for='nav in navigation' :key='nav.name' :to='nav.href'
                                     @click='chengeCurrentItem(nav.name)'
                                     :class='nav.current ? "headerItemClicked" : "headerItemUnclick"' 
                                     :aria-current='nav.current ? "page": undefined '>
                            {{nav.name}}
                        </router-link>
                    </div>
                </div>
            </div>
            <!--@start [in header menu main] right side materials -->
            <div class='profileAndNoteification'>
                <button type='button' class='noteificationButton'>
                    <BellIcon aria-hidden='true' />
                </button>
                <Menu as='div' class='profileMenu'>
                    <MenuButton calss='profileMenuButton'>
                        <img class='profileImage' src='profileImagePath' alt='Me' />
                    </MenuButton>
                    <transition enter-active-class='transition ease-out duration-100' 
                                enter-from-class='transform opacity-0 scale-95'
                                enter-to-class='transform opacity-100 scale-100'
                                leave-active-class='transition ease-in duration-75'
                                leave-from-class='transform opacity-100 scale-100'
                                leave-to-class='transform opacity-0 scale-95'>
                        <MenuItems class='profileMenuItems'>
                            <MenuItem v-slot='{ active }' v-for='item in profileMenuItems' :key='item.name'>
                                <router-link :to="item.href" :target="item.target" 
                                            :class="[active ? 'itemActived' : 'itemDiactived']">
                                    {{item.name}}
                                </router-link>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
            <!--@end   [in header menu main] right side materials -->
            <!--@end   header menu main-->
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class='headerForMobilePanel'>
                <DisclosureButton v-for='nav in navigation' :key='nav.name'>
                    <router-link :to='nav.href' :aria-ciurrent='nav.current? "page": undefined'
                                 :class='nav.current ? "headerForMobilePanelActived" : "headerForMobilePanelDiactived"'>
                    {{nav.name}}
                    </router-link>
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script lang='ts'>
import { defineComponent, ref, Ref } from 'vue'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

import { iNavigation, iProfileMenuItems } from '../../utils/interface/main';
import { url } from '../../utils/url';

export default defineComponent({
    setup(){
        const mobileLogoPath: string = './assets/logos/logo-no-title.png';
        const nomalLogoPath: string = './assets/logos/logo-with-title-gray.png';
        const profileImagePath: string = './assets/me.jpeg';

        const open = true;

        const profileMenuItems: Array<iProfileMenuItems> = [
            {name: 'Academic', href: url.Academic, target: ''},
            {name: 'Business Experience', href: url.Work, target: ''},
            //TODO; fix dbReader and use DB information @ href
            {name: 'Zenn', href: 'https://zenn.dev/as_pml' , target: '_blank'},
            {name: 'Github', href:'https://github.com/shiho-aoki' , target: '_blank'},
        ]

        const navigation: Ref<Array<iNavigation>> = ref([
            { name: 'Latest Activity', href: url.LatestActivity, current: true },
            { name: 'Tech Note', href: url.TechNotes, current: false },
            { name: 'Events', href: url.ParsonalActivity, current: false },
            { name: 'Profile', href: url.Profile, current: false }
        ]);

        const chengeCurrentItem = (itemName: string) => {
            (navigation.value).map((value: iNavigation, index: number) =>{
                if(value.name == itemName){
                    navigation.value[index].current == true;
                }else{
                    navigation.value[index].current == false;
                };
            });
        };

        return{
            // header navigation items
            navigation,
            chengeCurrentItem,
            profileMenuItems,
            // header logo icon file path
            mobileLogoPath,
            nomalLogoPath,
            profileImagePath,
            // used modules
            Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, 
            BellIcon, MenuIcon, XIcon,
            open
        }
    }
})
</script>

<style lang='scss' scoped>
.header {
    @apply bg-gray-800;
    @apply max-w-7xl mx-auto px-2 sm:px-6 lg:px-8;
}
.headerSub {
    @apply max-w-7xl mx-auto px-2 sm:px-6 lg:px-8;
    @apply relative flex items-center justify-between h-16;
}
//@start for mobile menu
.mobileMenu{
    @apply absolute inset-y-0 left-0 flex items-center sm:hidden
}
.disclosureButton{
    @apply inline-flex items-center justify-center;
    @apply p-2 rounded-md;
    @apply text-gray-400 hover:text-white hover:bg-gray-700;
    @apply focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
}
.menuIcon{
    @apply block h-6 w-6
}
.mobileLogo{
    @apply block lg:hidden h-12 w-auto 
}
//@end for mobile menu

//@start header main
.headerMenu{
    @apply flex-1 flex items-center justify-center sm:items-stretch sm:justify-start
}
.headerLogImage{
    @apply flex-shrink-0 flex items-center
}
.normalLogo{
    @apply hidden lg:block h-8 w-auto
}
.headerMeneItems{
    @apply hidden sm:block sm:ml-6 
}
.headerMeneItem{
    @apply flex space-x-4
}

.headerItemUnclick{
    @apply px-3 py-2 rounded-md text-sm font-medium;
    @apply text-gray-300 hover:bg-gray-700 hover:text-white;
}
.headerItemClicked{
    @apply px-3 py-2 rounded-md text-sm font-medium;
    @apply bg-gray-900 text-white
}
//@end   heder main

//@start notification button
.noteificationButton{
    @apply bg-gray-800 p-1 rounded-full text-gray-400;
    @apply hover:text-white;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white;
}
.noteificationButton > BellIcon{
    @apply h-6 w-6
}
.profileMenu{
    @apply ml-3 relative;
    & .profileMenuButton{
        @apply bg-gray-800 flex text-sm rounded-full;
        @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white;
        & .profileImage{
            @apply h-8 w-8 rounded-full
        }
    }
}
.profileMenuItems{
    @apply origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1;
    @apply bg-white ring-1 ring-black ring-opacity-5 focus:outline-none;
}
.profileMenuItems > MenuItem{
    @apply origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white;
    @apply ring-1 ring-black ring-opacity-5 focus:outline-none;
    & .itemActived {
        @apply bg-gray-100;
        @apply block px-4 py-2 text-sm text-gray-700;
    };
    & .itemDiactived {
        @apply block px-4 py-2 text-sm text-gray-700;
    };
    }
//@end   notification button

//@start header on mobile panel
.headerForMobilePanel{
    @apply px-2 pt-2 pb-3 space-y-1;
    & .headerForMobilePanelActived{
        @apply bg-gray-900 text-white;
        @apply block px-3 py-2 rounded-md text-base font-medium;
    };
    & .headerForMobilePanelDiactived{
        @apply text-gray-300 hover:bg-gray-700 hover:text-white;
        @apply block px-3 py-2 rounded-md text-base font-medium;
    };
}
</style>
