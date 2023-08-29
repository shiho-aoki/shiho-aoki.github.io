<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <span class="text-gray-500">
            * Doctoral Student at Waseda University(Molecular Evolution / Biophysical Engineering), <br />
            * Systems Engineer, Product Manager, Chief Technology Officer@IATD.Co.,Ltd.
        </span>

        <h3 class="mt-2 text-base text-gray-500">
            Having started my career as a part-time programmer and server operator at a game company for approximately 3 years, I transitioned into an independent sole proprietorship role. In this capacity, I've gained extensive experience in infrastructure back-end design and development, predominantly focusing on security. More recently, I've ventured into research and development projects.
            <br />
            At present, I serve as an engineer, leveraging my expertise in information security management. Additionally, I hold the position of CTO at LITE Inc. During my time in graduate school, I specialized in molecular evolution and biophysics engineering, where I actively participated in biological experiments. Moving forward, I aspire to work at the intersection of bioengineering and information engineering.
            
            <div class="py-8 flex lg:mt-0 lg:flex-shrink-0 content-center">
                <div class="inline-flex rounded-md shadow">
                    <a :href="urls.profile.academic" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-500 hover:bg-blue-50">
                        >> View more profiles as an researcher
                    </a>
                </div>
                <div class="ml-3 inline-flex rounded-md shadow">
                    <a :href="urls.profile.business" class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-600">
                        >> View more profiles as an engineer
                    </a>
                </div>
            </div>

            <b>## Infrastructure Backend Design and Development</b><br />
            ・Played a pivotal role in designing in-house infrastructure, DB design, prototype development, and operation.<br />
            ・Spearheaded a company-wide system overhaul at a company with 150 employees, scaling and leading a 20-person team.<br />
            ・Designed and developed APIs (REST API, gRPC) tailored for efficient handling of vast datasets for high-speed machine learning.<br />
            ・Developed an authentication infrastructure tailored for smartphone applications.<br />
            ・Devised and enhanced automated in-game fraud detection systems.<br />
            ... and more.<br />
            <br />
            <b>## Security</b><br />
            ・Conducted R&D on a quasi-homomorphic cryptography library.<br />
            ・Oversaw information security assessments for websites and infrastructure.<br />

            <br />
            <b>## Research and Development</b><br />
            ・Reconstructed algorithms using pseudo-quantum computers (published paper).<br />
            ・Designed and established a communication protocol for production factory lines to optimize for lightweight communication.<br />
            ・Pursued R&D on high-speed image recognition machine learning models, specifically tailored for certain production lines.<br />
            <br />
            <b>## Management</b><br />
            ・Served in leadership roles such as tech lead and product manager in teams ranging from 5 to 30 members.<br />
            ・Engaged as an on-site engineer in environments with up to 150 personnel.<br />
            ・Mentored recent graduates and less experienced engineers, significantly reducing turnover rates.<br />
            <br />
            <br />
            <b>Technologies Proficient In:</b> <br />
            Docker, k8s, GCP, AWS, Golang, C++, Python, TypeScript, PostgreSQL, MySQL, Linux, Vim, Erlang
            
            <div class="flex lg:mt-0 lg:flex-shrink-0 content-center">
                <div class="inline-flex rounded-md shadow">
                    <a :href="urls.profile.skills" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-500 hover:bg-blue-50">
                        <p class="float-left mr-3">>> View more my skilles </p>
                        <LinkIcon class="h-6 w-6 flex-shrink-0 text-blue-500" aria-hidden="true" />
                    </a>
                </div>
            </div>

        </h3>

    </TabPanel>
</template>

<script setup lang="ts">
    import { TabPanel } from '@headlessui/vue'
    import { urls } from '../../../store/urls';
    import { LinkIcon } from '@heroicons/vue/24/outline';
</script>