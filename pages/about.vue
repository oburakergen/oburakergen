<script setup lang="ts">
</script>

<template>
  <div class="relative w-full h-auto flex flex-col gap-8 py-16 font-['Montserrat'] text-gray-500">
    <div class="me_title mb-8">
      <h1 class="font-bold text-3xl text-primary subpixel-antialiased">About Me</h1>
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
    <div class="me_experience pt-8">
      <div class="title">Experience</div>
      <div class="relative">
        <ul class="life">
          <li>
            <div>2014-2018</div>
            <div class="flex flex-col">
              <h3>Burak</h3>
              <h3>MAster Degree</h3>
            </div>
          </li>

          <li>
            <div>2014-2018</div>
            <div class="flex flex-col">
              <h3>Burak</h3>
              <h3>MAster Degree</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
