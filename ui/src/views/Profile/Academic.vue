<template>
  <PageTitle title="Academic Background" />


  <div>
    <div class="flex -space-x-2 overflow-hidden">
      <img class="inline-block h-14 w-14 rounded-full ring-2 ring-white" 
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      <AcademicCapIcon class="relative top-6 right-5 m-1 pb-1.5 pt-0.5 h-9 w-9 text-gray-400 bg-white rounded-md" aria-hidden="true" />
    </div>

  <div class="mytimeline">
    <ul class="mytimeline-list">
        <li class="mytimeline-list-item">
            <div class="mydate">2015年12月</div>
            <div class="mycontent">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</div>
        </li>
        <li class="mytimeline-list-item">
            <div class="mydate">2015年12月</div>
            <div class="mycontent">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</div>
        </li>
        <li class="mytimeline-list-item">
            <div class="mydate">2015年12月</div>
            <div class="mycontent">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</div>
        </li>
        <li class="mytimeline-list-item">
            <div class="mydate">2015年12月</div>
            <div class="mycontent">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</div>
        </li>
        <li class="mytimeline-list-item">
            <div class="mydate">2015年12月</div>
            <div class="mycontent">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</div>
        </li>
        <li class="mytimeline-list-item">
            <div class="mydate">2015年12月</div>
            <div class="mycontent">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</div>
        </li>
        <li class="mytimeline-list-item">
            <div class="mydate">2015年12月</div>
            <div class="mycontent">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</div>
        </li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import PageTitle from "../../components/PageTitle.vue"
import { AcademicCapIcon } from '@heroicons/vue/solid'

export default {
  name: "Academic",
  components: { PageTitle, AcademicCapIcon }
}
</script>
