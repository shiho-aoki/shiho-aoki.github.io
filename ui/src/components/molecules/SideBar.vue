<template>
    <div class="sidebar">
        <div class="sidebar_">
            <div class="sidebar__">
                <div class="sidebar-items">
                <!-- Replace with your content -->
                    <div class="sidebar-content">
                        <div class="sidebar-content_" aria-hidden="true">
                            <ul v-for="item in h1Items">
                                <li class="item-h2-class">
                                    <a :href="item.itemurl">{{item.name}}</a>
                                </li>
                                <li class="item-note-class" v-for="subitem in item.subitems">
                                    <li>
                                        <router-link :to="subitem.itemurl">{{subitem.name}}</router-link>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                <!-- /End replace -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import outline from '../../../../db/notes/meta/outline';
import { INoteMetaData } from '../../utils/interface/db';

const h1Items: INoteMetaData["h1"] = outline.h1;

</script>