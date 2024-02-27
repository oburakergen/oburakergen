<script setup lang="ts">
import { Separator } from "~/components/ui/separator";
</script>

<template>
  <div class="relative w-full h-auto flex flex-col gap-8 py-16 font-['Montserrat'] text-gray-500">
    <div class="me_title mb-8">
      <h2 class="font-bold text-3xl text-primary subpixel-antialiased">About Me</h2>
    </div>
    <div class="me_photo">
      <img src="https://avatars.githubusercontent.com/u/72213815?v=4" alt="me" class="rounded-full h-40 w-40" />
    </div>
    <div class="me mt-8">
      <h2 class="font-bold text-xl text-primary">Osman Burak ERGEN</h2>
      <span class="text-gray-500">Javascript Developer</span>
    </div>
    <Separator orientation="horizontal" decorative />
    <div class="me_about mb-8 pb-8">
      <p class="antialiased">
        In the field of computer engineering, I have extensive experience in leading and successfully completing complex
        software projects. In every project I develop, I strategically utilize design patterns, thereby enhancing the
        efficiency and effectiveness of the products. My broad range of skills across both frontend and backend ensures
        that the solutions I provide are both sustainable and scalable. Innovation and continuous improvement are key
        values I have embraced throughout my career, and this equips me to handle the most challenging projects in the
        industry.
      </p>
    </div>
    <Separator orientation="horizontal" decorative />
    <div class="me_detail w-full flex justify-between flex-wrap gap-4 mb-8 py-8">
      <div class="w-full grid grid-cols-2 gap-4">
        <span class="font-bold text-primary">Birthday:</span>
        <span>1994</span>
        <span class="font-bold text-primary">Website:</span>
        <span>https://burakergen.vercel.app/</span>
        <span class="font-bold text-primary">Phone:</span>
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
      <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
        <div class="relative text-gray-700 antialiased text-sm font-semibold">
          <div class="hidden sm:block w-1 bg-primary absolute h-full left-1/2 transform -translate-x-1/2"></div>
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
