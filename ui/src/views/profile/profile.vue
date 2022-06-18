<template>
    <div class="about-profile">
        <div class="prof-summary">
            <div class="prof-meta">
                <h2>I want to be an indehacker</h2>
                <p class="meta-name">shiho-aoki @as.+?pml</p>
                <p class="meta-item">If I have seen further it is by standing on yᵉ sholders of Giants.</p>
                <p class="meta-summary">
                    Experienced Software Engineer with a demonstrated history of working in the higher education industry. 
                    Skilled in <b>Python, JavaScript/TypeScript (React, Next, Angular, Vue, Nuxt), Golang, Elang, C++ </b>,and <b>Google Cloud Platform, AWS </b>etc. 
                    Engineering professional with a Bachelor of Science - BS focused in Biomedical/Medical Engineering from Waseda University.
                </p>
            </div>

            <div class="prof-details">
                <dl class="panel-main">
                    <Panel v-for="profItem in ProfileChips" 
                            :name="profItem.name" :description="profItem.description" 
                            :iconComponent="profItem.icon" :url="profItem.url" :extract="profItem.extract" />
                </dl>
            </div>
        </div>
    </div>
    <MiddleTitles title="Skills" discription="My Tech Skill Sets" :component="skills" />
    <MiddleTitles title="Licenses and Certifications" discription="since 2017." :component="license" />
    <router-view />
</template>

<script setup lang="ts">
import { ProfileChips } from '../../utils/items/profile';
</script>

<script lang="ts">
import MiddleTitles from "../../components/molecules/MiddleTitles.vue";
import license from './about/license.vue';
import skills from "./about/skills.vue";
import Panel from '../../components/molecules/Panel.vue';

export default {
  name: "Profile",
  components:{ MiddleTitles, license, skills, Panel }
}
</script>