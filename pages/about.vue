<script setup lang="ts"></script>

<template>
  <div class="w-full h-auto flex flex-col gap-8">
    <div class="me_title">
      <h1 class="text-4xl font-bold">About Me</h1>
    </div>
    <div class="me_photo">
      <img src="https://avatars.githubusercontent.com/u/72213815?v=4" alt="me" class="rounded-full h-40 w-40" />
    </div>
    <div class="me">
      <h2>Osman Burak ERGEN</h2>
      <span>Javascript Developer</span>
    </div>
    <div class="me_about">
      <p>
        In the field of computer engineering, I have extensive experience in leading and successfully completing complex
        software projects. In every project I develop, I strategically utilize design patterns, thereby enhancing the
        efficiency and effectiveness of the products. My broad range of skills across both frontend and backend ensures
        that the solutions I provide are both sustainable and scalable. Innovation and continuous improvement are key
        values I have embraced throughout my career, and this equips me to handle the most challenging projects in the
        industry.
      </p>
    </div>
    <div class="me_detail flex justify-between flex-wrap w-3/4 gap-4">
      <div class="w-full grid grid-cols-2 gap-4">
        <span class="">Birthday:</span>
        <span>1994</span>
        <span>Website:</span>
        <span>https://burakergen.vercel.app/</span>
        <span>Phone:</span>
        <span>+90 544 934 20 52</span>
        <span>City:</span>
        <span>Ankara, Turkey</span>
      </div>
      <div class="w-full grid grid-cols-2 gap-4">
        <span>Nationality:</span>
        <span>Turkish</span>
        <span>Study:</span>
        <span>Kırıkkale University</span>
        <span>Degree:</span>
        <span>Master</span>
        <span>Department:</span>
        <span>Computer Engineering</span>
      </div>
    </div>
    <div class="me_cv">
      <Button variant="default">Download Cv</Button>
    </div>
    <div class="me_known grid grid-cols-2 gap-4">
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
    <div class="me_experience">
      <div class="title">Experience</div>
      <div class="relative">
        <ul class="relative before:absolute before:w-1 before:h-full before:top-0 before:left-0">
          <li class="before:absolute before:h-[18px] before:w-[18px] before:rounded-full before:border flex">
            <div>2014-2018</div>
            <div class="flex flex-col">
              <h3>Burak</h3>
              <h3>MAster Degree</h3>
            </div>
          </li>

          <li class="before:absolute before:h-[18px] before:w-[18px] before:rounded-full before:border flex">
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
