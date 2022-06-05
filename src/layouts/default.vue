<template>
<div class="flex">
  <aside class="text-white pt-9 w-400 min-h-screen bg-darkGreen">
    <div class="ml-4">
      <span class="font-bold text-2xl">Growfit Headless CMS</span>
    </div>

    <div class="mt-10 ml-4 flex items-center">
      <span class="text-xs whitespace-nowrap">コンテンツ</span>
      <span class="block border-t border-dashed border-white ml-2 w-full h-0"></span>
    </div>

    <ul class="mt-5">
      <li class="">
        <!-- アクティブリンク :class="{'bg-lightGreen': $route.name === 'news'}" -->
        <NuxtLink class="rounded-lg p-4 flex items-center hover:opacity-80 duration-300" to="/news" :class="{'bg-lightGreen': $route.name === 'news'}">
          <span class="material-icons">article</span>
          <p class="ml-4">ニュース</p>
        </NuxtLink>
      </li>
      <li class="">
        <!-- アクティブリンク :class="{'bg-lightGreen': $route.name === 'sample'}" -->
        <NuxtLink class="rounded-lg p-4 flex items-center hover:opacity-80 duration-300" to="/sample" :class="{'bg-lightGreen': $route.name === 'sample'}">
          <span class="material-icons">face</span>
          <p class="ml-4">サンプル</p>
        </NuxtLink>
      </li>
    </ul>
  </aside>

  <Nuxt />

</div>
</template>
