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
                    <div class="mobile-header-items">
                        <div>
                            <router-link v-for="item in navItems" :key="item.name" :to="item.href"
                            :class="item.current ? 'item-selected' : 'item-not-selected'" :aria-current="item.current ? 'page' : undefined">
                                {{ item.name }}
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
                                    <router-link :to="item.href" :target="item.target" :class="active ? 'profile-active' : 'profile-inactive'">
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

        <DisclosurePanel class="pc-header-items">
            <div>
                <DisclosureButton v-for="item in navItems" :key="item.name" as="router-link" :to="item.href" 
                :class="item.current ? 'item-selected' : 'item-not-selected'" :aria-current="item.current ? 'page' : undefined">
                    {{ item.name }}
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup lang="ts">
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
    import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
    
    import { INavigation, IProfileMenuItems } from '../../utils/interface/main';

    defineProps<{
        navItems: Array<INavigation>,
        profItems: Array<IProfileMenuItems>;
    }>();
</script>