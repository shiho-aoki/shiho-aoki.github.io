<template>
   <Disclosure as="nav" class="nav-main navigation" v-slot="{ open }">
        <div class="header-items">
            <div class="items">
                <!--[start] Mobile menu button-->
                <div class="mobile-menu">
                    <DisclosureButton>
                        <span class="sr-only">Open main menu</span>
                        <MenuIcon v-if="!open" aria-hidden="true" />
                        <XIcon v-else aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <!--[end]  Mobile menu button-->
                <div class="main-menu">
                    <div class="header-img">
                        <img class="mobile-img" src="../../assets/logos/logo-no-title.png" alt="as-pml" />
                        <img class="pc-img" src="../../assets/logos/logo-with-title-gray.png" alt="as-pml" />
                    </div>
                    <div class="pc-header-items">
                        <div>
                            <router-link v-for="item in navItems" :key="item.name" :to="item.href"
                            v-on:click="headerActiveChecker(item.href)"
                            :aria-current="item.current ? 'page' : undefined">
                                <span :class="item.current ? 'item-selected' : 'item-not-selected'">
                                    {{ item.name }}
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="nav-right-sub-items">
                    <button type="button" class="notification">
                        <span class="sr-only">View notifications</span>
                        <BellIcon aria-hidden="true" />
                    </button>

                    <!--[start] Profile dropdown -->
                    <Menu as="div" class="profile">
                        <MenuButton class="profile-menu-button">
                            <span class="sr-only">Open user menu</span>
                            <img src="../../assets/me.jpeg" alt="" />
                        </MenuButton>
                        <transition enter-active-class="transition ease-out duration-100" 
                                    enter-from-class="transform opacity-0 scale-95" 
                                    enter-to-class="transform opacity-100 scale-100" 
                                    leave-active-class="transition ease-in duration-75" 
                                    leave-from-class="transform opacity-100 scale-100" 
                                    leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="profile-menu-items">
                                <MenuItem v-slot="{ active }" v-for="item in profItems" :key="item.name">
                                    <router-link :to="item.href" :target="item.target" :class="active ? 'profile-active' : 'profile-inactive'"
                                                 v-on:click="headerActiveChecker(item.href)">
                                        {{item.name}}
                                    </router-link>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                    <!--[end]   Profile dropdown -->
                </div>
            </div>
        </div>

        <DisclosurePanel class="mobile-header-items">
            <div>
                <DisclosureButton v-for="item in navItems" :key="item.name" as="router-link" :to="item.href" :aria-current="item.current ? 'page' : undefined">
                    <span :class="item.current ? 'item-selected' : 'item-not-selected'">
                        {{ item.name }}
                    </span>
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup lang="ts">
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
    import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
</script>

<script lang="ts">

    import { navItems, profItems } from '../../utils/items/header';
    import { INavigation } from '../../utils/interface/main';

    // const checkMountedUrl = (navItems: Array<INavigation>, routePath: string) =>{
    //     let nowNavItems: Array<INavigation> = navItems;
    //     navItems.map((navItem: INavigation, index: number)=>{
    //         if(navItem.href=routePath){
    //             nowNavItems[index].current = true;
    //         }else{
    //             nowNavItems[index].current = false;
    //         }
    //     })
    //     return nowNavItems;
    // }

    export default {
        name: 'Header',
        data(){
            return{
                navItems: navItems, 
                profItems: profItems
            }
        },
        methods: {
            headerActiveChecker: function(itemHref: string){
                const newNavItems: Array<INavigation> = this.$data.navItems
                this.$data.navItems.map((navItem: INavigation, index: number)=>{
                    if(navItem.href == itemHref) {
                        newNavItems[index].current = true;
                    }else{
                        newNavItems[index].current = false;
                    }
                })
                this.$data.navItems = newNavItems;
            }
        },
    }
</script>