<script setup>
import NEWSLETTER from '@/components/NEWSLETTER.vue';
import ReadOur from '@/components/ReadOur.vue';
import OurProcess from '@/components/OurProcess.vue';
import OurExpertise from '@/components/OurExpertise.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <header>
    <div class="container">
      <div class="header-card">
        <div class="header__left">
          <div class="mini-card"></div>
          <h1>Transform Your Idea Into Reality with Finsweet</h1>
          <p>
            The entire Finsweet team knows what's good with Webflow and<br />
            you can too with 1 week and a good attitude.
          </p>
          <button>
            <span class="shapes">
              <img src="/public/header/svg/shapes.svg" alt="shapes" />
            </span>
            Request Quote
            <img src="/public/navbar/arrow.svg" alt="arrow" class="arrow" />
          </button>
        </div>
        <div class="header__right">
          <img src="/public/header/header-image.png" alt="header-image" />
        </div>
      </div>

      <div class="header-clients">
        <div class="clients-title">
          <span>Our Clients</span>
          <h5>We've Worked with</h5>
        </div>

        <div class="clients-logo">
          <div class="logo-img">

            <img src="/public/header/svg/logo-client.svg" alt="logo-client" />
          </div>
          <div class="logo-img">
            <img src="/public/header/svg/logo-client2.svg" alt="logo-client" />
          </div>
          <div class="logo-img">
            <img src="/public/header/svg/logo-client3.svg" alt="logo-client" />
          </div>
          <div class="logo-img">
            <img src="/public/header/svg/logo-client4.svg" alt="logo-client" />
          </div>
          <div class="logo-img">
            <img src="/public/header/svg/logo-client5.svg" alt="logo-client" />
          </div>
        </div>
      </div>
    </div>
  </header>


  <div class=" container ">
    <div class=" mt-24 mb-24 ">
      <div class=" flex  mt-14 mb-14   ">

        <dir class="w-full ">

          <h2 class=" text-5xl  w-full ">
            The company leads entire webdesign process from concept to delivery.
          </h2>
        </dir>

        <div class="w-11/12">
          <h3 class="text-3xl ">
            The Era Of Technology.
          </h3>
          <p class="text-lg">
            Through True Rich Attended does no end it his mother since real had half
            every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position
            concluded.
          </p>
        </div>


      </div>

      <div class=" flex w-1280 gap-5">

        <img src="/public/section/Image 1.png" alt="">

        <img src="/public/section/Image 2.png" alt="">
        <span class=" flex">
          <img src="/public/section/Image 3.png" alt="">

          <img src="/public/section/Group 1710.png" alt="">
        </span>
      </div>

      <div class=" flex gap-16 mt-10  ">

        <div>
          <span class="text-3xl"> 1560+</span>
          <img src="/public/section/Shapes.png" alt="" class="w-14">

          <p class="w-32 ">
            Project Delivered
          </p>
        </div>

        <div class=" ">
          <span class="text-3xl"> 100+</span>
          <img src="/public/section/Shapes.png" alt="" class="w-14">

          <p class="w-32 ">
            Project Delivered
          </p>
        </div>
        <div class=" ">
          <span class="text-3xl"> 950+</span>
          <img src="/public/section/Shapes.png" alt="" class="w-14">

          <p class="w-32 ">
            Project Delivered
          </p>
        </div>

        <div class=" ">
          <span class="text-3xl"> 10yrs</span>
          <img src="/public/section/Shapes.png" alt="" class="w-14">

          <p class="w-32 ">
            Project Delivered
          </p>
        </div>

        
        
        <div class=" flex justify-end items-center w-full mr-10 gap-3 " >
        <Button title="Read about us">
        </Button>
      </div>

      </div>

    </div>

  </div>

<OurExpertise/>

  <div class=" bg-ourServices ">
    <div class="container ">

      <div class="pt-40">
        <h1 class="text-6xl w-3/5 ">We build software solutions that solve client's business challenges</h1>


        <button class="bg-blue-600 mt-10 flex justify-center items-center  ">

          <img src="/public/header/svg/shapes.svg" alt="shapes" class="transform -translate-y-2/3" />
          <span class="p-5">
            Request Quote
          </span>
          <img src="/public/section/arrow2.png" alt="arrow" class="arrow" />
        </button>
      </div>

      <div class="flex  gap-10 pt-20 pb-20 ">

        <div class="bg-white  p-16  ">
          <img src="/public/section/Icon Div (1).png" alt="" class=" mb-5">

          <b>Technical support</b>

          <p class="mb-5 mt-5">
            We aim to attain the greatest satisfaction for our
            clients and be one of the prominent names when it comes to world-class service
          </p>

          <Button title="Read more" />
        </div>
        <div class="bg-white   p-16   ">
          <img src="/public/section/Icon Div (2).png" alt="" class=" mb-5">

          <b>Technical support</b>

          <p class="mb-5 mt-5">
            We aim to attain the greatest satisfaction for our
            clients and be one of the prominent names when it comes to world-class service
          </p>

          <Button title="Read more" />
        </div>
        <div class="bg-white  p-16   ">
          <img src="/public/section/Icon Div (3).png" alt="" class=" mb-5">

          <b>Technical support</b>

          <p class="mb-5 mt-5">
            We aim to attain the greatest satisfaction for our
            clients and be one of the prominent names when it comes to world-class service
          </p>

          <Button title="Read more" />

        </div>


      </div>

    </div>
  </div>
  <OurProcess/>

  <div class="bg-ourCostomers pt-24 pb-24  ">
    <div class="container ">
      <div class="flex  ">

        <div class="w-3/6 p-5  ">
          <img src="/public/section/blueKvadrat.png" alt="">

          <h1 class=" text-5xl mt-5 mb-5 pr-20  "> Our costomers love what we do </h1>

          <h3><b> Transform your idea into reality with finsweet</b></h3>

          <p class="mt-5 mb-5 w-3/4 pr-5 ">
            It is a long established fact that a reader will be
            distracted by the readable content of a page when
            looking at its layout.
          </p>

          <div class="flex gap-5">
            <img src="/public/section/Image 3 (1).png" alt="">
            <img src="/public/section/Image 3 (1).png" alt="">
            <img src="/public/section/Image 3 (1).png" alt="">

          </div>

          <div class="mt-5 ">
            <b>30+</b> Costomer Reviews
          </div>

        </div>

        <div class="flex w-3/6 m-10 bg-white ">
          <img src="/public/section/Group 1710.png" alt="">

          <div class="   p-10  w-full ">
            <h1 class="text-2xl pt-5 pb-10 pr-24 ">
              Finsweet has been a wonderful partner to work with. I have been a customer now for the past
              few months now and I have had nothing but positive experiences!
            </h1>
            <div class="flex gap-5 pb-2 ">
              <img src="/public/section/Image 3 (1).png" alt="">
              <div class="">
                <b>Johnny Andro </b>
                <p>Director.Company </p>
              </div>

              <img src="/public/header/svg/logo-client2.svg" alt="" class="decoration-neutral-500">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

 <ReadOur/>

  <NEWSLETTER class="pt-24" />
  

</template>





<style scoped lang="scss">
header {
  background-color: #232536;
  height: 100vh;
}

.header-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-top: 96px;
}

.header__left {
  .mini-card {
    width: 24px;
    height: 24px;
    background-color: #ffffff10;
  }

  h1 {
    font-size: 56px;
    line-height: 56px;
    font-weight: 500;
    margin: 24px 0;
  }

  p {
    font-style: 16px;
    line-height: 24px;
    color: #ffffff88;
    margin-bottom: 32px;
  }

  button {
    padding: 20px 32px;
    background-color: #444cfc;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      background-color: #444dfcc6;
    }

    .shapes {
      position: relative;

      img {
        position: absolute;
        top: -20px;
        left: -32px;
      }
    }

    .arrow {
      margin-left: 16px;
    }
  }
}

.header-clients {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 23px;

  .clients-title {
    h5 {
      font-size: 14px;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #ffffff76;
    }
  }

  .clients-logo {
    display: flex;
    align-items: center;
    gap: 32px;

    .logo-img {
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
