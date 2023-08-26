<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <span class="text-gray-500">
            ◾️ Doctoral Student at Waseda University(Molecular Evolution / Biophysical Engineering), <br />
            ◾️ Systems Engineer, Product Manager, Chief Technology Officer@IATD.Co.,Ltd.
        </span>

        <h3 class="mt-2 text-base text-gray-500">
            After working part-time as a programmer and server operator at a game company for about 3 years, she became an independent sole proprietor and gained experience in infrastructure back-end design and development, mainly in the security area, and more recently in research and development projects.<br />
            Currently, she is working as an engineer utilizing her experience in information security management, and is also the CTO of LITE Inc. In graduate school, she majored in molecular evolution and biophysics engineering, and was also involved in biological experiments. In the future, she aims to work in the fusion of bioengineering and information engineering fields.<br />
            
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

            <b>## Infrastructure backend design and development</b><br />
            ・She has been involved in the design of in-house infrastructure, DB design, prototype development, and operation. He has also led a company-wide system replacement at a 150-employee company by scaling up to a 20-person team through team design.<br />
            ・Designed and developed APIs (REST API, gRPC) for handling large amounts of data for machine learning at high speed.<br />
            ・Implemented an authentication infrastructure for smartphone applications<br />
            ・Creation and improvement of automatic in-game fraud detection programs<br />
            etc.<br />
            <br />
            <b>## Security</b><br />
            ・Research and development of quasi-homomorphic cryptography library<br />
            ・Information security checks of websites and infrastructure<br />
            <br />
            <b>## Research and Development</b><br />
            ・Algorithm reconstruction using a pseudo-quantum computer(published paper)<br />
            ・Design and development of a communication standard for production factory lines for lighter communication<br />
            ・Research and development of high-speed image identification machine learning models specialized for specific production lines<br />
            <br />
            <b>## Management</b><br />
            ・Experienced as tech lead, product manager, etc. in a team of 5~30 people<br />
            ・Experienced engineer on site with ~150 people<br />
            ・Mentored new graduates and inexperienced engineers to reduce turnover rate.<br />
            <br />
            <br />
            <b>Main technologies used:</b> Docker, k8s, GCP, AWS, Golang, C++, Python, TypeScript, PostgreSQL, MySQL, Linux, Vim, Ealang
        </h3>

    </TabPanel>
</template>

<script setup lang="ts">
    import { TabPanel } from '@headlessui/vue'
    import { urls } from '../../../store/urls';
</script>