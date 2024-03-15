<script setup lang="ts">
import { Separator } from "@/components/ui/separator/index";
import { Badge } from "~/components/ui/badge";

const appConfig = useAppConfig();
const about = {
  title: "about.title",
  me: "about.me",
  avatar: "/profile.jpeg",
  author: "author",
  job: "job",
  detail: "about.detail",
  special: [
    [
      ["about.birthday", 1994],
      ["about.website", "https://burak-ergen.com/"],
      ["about.phone", "+90 544 934 20 52"],
      ["about.city", "about.city"],
    ],
    [
      ["about.nationality", "about.nationality"],
      ["about.website", "https://burakergen.com/"],
      ["about.study", "about.study"],
      ["about.department", "about.department"],
    ],
  ],
  cv: "about.cv",
  known: "about.known",
  technologies: ["React", "Vue", "Nuxt", "Next", "Mysql", "MongoDb", "ElasticSearch", "Docker"],
  experiences: [
    {
      date: "2018-2019",
      company: "Laraplay",
      position: "Software Specialist",
    },
    {
      date: "2019-2021",
      company: "Vairosoft",
      position: "Software Specialist",
    },
    {
      date: "2022-2022",
      company: "Icecube",
      position: "Software Specialist",
    },
    {
      date: "2022-2023",
      company: "Arma Group Holding",
      position: "Computer Engineering",
    },
  ],
};
</script>

<template>
  <div class="relative w-full h-auto flex flex-col gap-8 py-16 font-['Montserrat'] text-gray-500">
    <div class="subpixel-antialiased">
      <Badge variant="secondary" class="text-base mb-2 uppercase font-light shadow-sm">{{ $t(about.title) }}</Badge>
      <h2 class="font-bold text-3xl text-primary">{{ $t(about.me) }}</h2>
    </div>
    <NuxtPicture
      :img-attrs="appConfig.ui.imgAttrs"
      format="avif,webp"
      loading="lazy"
      legacy-format="jpeg"
      :src="about.avatar"
      preset="avatar"
      :alt="$t('author')"
    />
    <div class="me mt-8">
      <h2 class="font-bold text-xl text-primary" v-text="$t('author')" />
      <span class="text-gray-500" v-text="$t('job')" />
    </div>
    <Separator orientation="horizontal" decorative />
    <div class="me_about mb-8 pb-8">
      <p class="antialiased" v-text="$t('about.detail')" />
    </div>
    <Separator orientation="horizontal" decorative />
    <div class="me_detail w-full flex justify-between flex-wrap gap-4 mb-8 py-8">
      <div class="w-full grid grid-cols-2 gap-4">
        <span class="font-bold text-primary" v-text="$t('about.birthday')" />
        <span v-text="1994" />
        <span class="font-bold text-primary" v-text="$t('about.website')" />
        <span v-text="'https://burak-ergen.com/'" />
        <span class="font-bold text-primary" v-text="$t('about.phone')" />
        <span>+90 544 934 20 52</span>
        <span class="font-bold text-primary">City:</span>
        <span>Ankara, Turkey</span>
      </div>
      <div class="w-full grid grid-cols-2 gap-4">
        <span class="font-bold text-primary">Nationality:</span>
        <span>Turkish</span>
        <span class="font-bold text-primary">Study:</span>
        <span>Kırıkkale University</span>
        <span class="font-bold text-primary">Degree:</span>
        <span>Master</span>
        <span class="font-bold">Department:</span>
        <span>Computer Engineering</span>
      </div>
    </div>
    <Separator orientation="horizontal" decorative />
    <div class="me_cv">
      <Button variant="default">Download Cv</Button>
    </div>
    <Separator orientation="horizontal" decorative />
    <div class="me_known grid grid-cols-2 gap-4 mb-8">
      <div class="title col-span-full">
        <h2>Known Technologies</h2>
      </div>
      <ul class="list-disc list-outside">
        <li>React</li>
        <li>Vue</li>
        <li>Nuxt</li>
        <li>Next</li>
      </ul>
      <ul class="list-disc list-outside">
        <li>Mysql</li>
        <li>MongoDb</li>
        <li>ElasticSearch</li>
        <li>Docker</li>
      </ul>
    </div>
    <Separator orientation="horizontal" decorative />

    <div class="bg-white py-6 flex flex-col justify-center sm:py-12">
      <div class="py-3 sm:max-w-xl xs:max-w-xl sm:mx-auto xs:mx-auto w-full px-2 sm:px-0">
        <div class="relative text-gray-700 antialiased text-sm font-semibold">
          <div
            class="hidden sm:block xs:block w-1 bg-primary absolute h-full left-1/2 transform -translate-x-1/2"
          ></div>
          <div class="mt-6 sm:mt-0 sm:mb-12">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex justify-start w-full mx-auto items-center">
                <div class="w-full sm:w-1/2 sm:pr-8">
                  <div class="p-4 bg-white rounded shadow">
                    <h1><small>2018-2019</small></h1>
                    <div>Laraplay</div>
                    <div><small>Software Specialist</small></div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
              ></div>
            </div>
          </div>

          <div class="mt-6 sm:mt-0 sm:mb-12">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex justify-end w-full mx-auto items-center">
                <div class="w-full sm:w-1/2 sm:pl-8">
                  <div class="p-4 bg-white rounded shadow">
                    <h1><small>2019-2021</small></h1>
                    <div>Vairosoft</div>
                    <div><small>Software Specialist</small></div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
              ></div>
            </div>
          </div>

          <div class="mt-6 sm:mt-0 sm:mb-12">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex justify-start w-full mx-auto items-center">
                <div class="w-full sm:w-1/2 sm:pr-8">
                  <div class="p-4 bg-white rounded shadow">
                    <h1><small>2022-2022</small></h1>
                    <div>Icecube</div>
                    <div><small>Software Specialist</small></div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
              ></div>
            </div>
          </div>

          <div class="mt-6 sm:mt-0">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex justify-end w-full mx-auto items-center">
                <div class="w-full sm:w-1/2 sm:pl-8">
                  <div class="p-4 bg-white rounded shadow">
                    <h1><small>2022-2023</small></h1>
                    <div>Arma Group Holding</div>
                    <div><small>Computer Engineering</small></div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
