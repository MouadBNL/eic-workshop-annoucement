<template>


  <!-- Workshop card -->
  <div class="flex items-center" style="width: 800px;">

    <!-- Icon -->
    <div class="relative flex items-center justify-center" style="height: 262px; width: 290px">
      <svg class="absolute inset-0" width="290" height="290" viewBox="0 0 290 262" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bd_313_545)">
          <path
            d="M25.8537 133.941C23.3821 129.646 23.3821 124.354 25.8537 120.059L79.4357 26.9412C81.9072 22.646 86.4749 20 91.418 20L198.582 20C203.525 20 208.093 22.646 210.564 26.9412L264.146 120.059C266.618 124.354 266.618 129.646 264.146 133.941L210.564 227.059C208.093 231.354 203.525 234 198.582 234H91.418C86.4749 234 81.9072 231.354 79.4357 227.059L25.8537 133.941Z"
            fill="url(#paint0_linear_313_545)" fill-opacity="0.5" shape-rendering="crispEdges" />
          <path
            d="M26.7204 120.558L80.3024 27.4399C82.5961 23.4538 86.8338 21 91.418 21L198.582 21C203.166 21 207.404 23.4538 209.698 27.4399L263.28 120.558C265.573 124.544 265.573 129.456 263.28 133.442L209.698 226.56C207.404 230.546 203.166 233 198.582 233H91.418C86.8338 233 82.5961 230.546 80.3024 226.56L26.7204 133.442C24.4265 129.456 24.4265 124.544 26.7204 120.558Z"
            stroke="url(#paint1_linear_313_545)" stroke-width="2" shape-rendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_bd_313_545" x="0" y="0" width="290" height="262" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_313_545" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_313_545" result="effect2_dropShadow_313_545" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_313_545" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_313_545" x1="69.5191" y1="13.672" x2="220.159" y2="226.749"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.4" />
            <stop offset="1" stop-color="white" stop-opacity="0.1" />
          </linearGradient>
          <linearGradient id="paint1_linear_313_545" x1="77.0095" y1="47.0376" x2="247.832" y2="239.449"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#CFBEFF" stop-opacity="0" />
            <stop offset="1" stop-color="#7652DD" />
          </linearGradient>
        </defs>
      </svg>

      <div class="">
        <svg width="110" height="91" viewBox="0 0 110 91" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M56.9966 50.6701C57.2012 47.0056 58.9846 43.7676 61.6866 41.4797C64.3308 39.2306 67.8821 37.854 71.7808 37.854C75.6602 37.854 79.2115 39.2287 81.8557 41.4797C84.5578 43.7676 86.3334 47.0056 86.5457 50.6701C86.7503 54.4316 85.2429 57.941 82.6084 60.5391C79.9063 63.176 76.0848 64.8435 71.7808 64.8435C67.4768 64.8435 63.636 63.1876 60.9532 60.5391C58.3091 57.941 56.8036 54.451 57.0159 50.6895L56.9966 50.6701Z"
            fill="white" />
          <path
            d="M33.8356 58.4259C33.8607 59.8607 34.3162 62.6527 34.9994 64.8243C36.4354 69.4389 38.8788 73.7045 42.2564 77.4466C45.7305 81.305 50.0152 84.4072 54.9561 86.6176C60.148 88.9249 65.7837 90.1076 71.6318 90.1076C77.4798 90.0998 83.1156 88.8977 88.3074 86.5594C93.2483 84.3297 97.5331 81.2274 101.007 77.3496C104.404 73.5688 106.836 69.3032 108.264 64.6886C108.988 62.3619 109.445 59.9964 109.629 57.631C109.808 55.3043 109.733 52.9583 109.403 50.6122C108.758 46.0558 107.183 41.7708 104.771 37.893C102.57 34.306 99.714 31.1844 96.3171 28.5475L96.3249 28.5417L62.1629 2.17264C62.1321 2.14937 62.107 2.12414 62.0742 2.10281C59.8353 0.373316 56.0524 0.379142 53.6012 2.11252C51.1115 3.86528 50.822 6.76587 53.0415 8.58844L53.0319 8.59814L67.2949 20.2509L23.8688 20.2975H23.8109C20.221 20.3013 16.7662 22.663 16.0907 25.6682C15.3882 28.7123 17.8277 31.2522 21.572 31.2522L21.5663 31.2658L43.5688 31.2232L4.19581 61.47C4.14562 61.5069 4.09158 61.5456 4.04526 61.5825C0.339559 64.4326 -0.857077 69.183 1.47829 72.1689C3.85225 75.213 8.88968 75.2323 12.634 72.1863L34.0576 54.5423C34.0576 54.5423 33.7449 56.9272 33.77 58.3426L33.8356 58.4259ZM89.0351 66.3948C84.6152 70.9124 78.4198 73.4912 71.7418 73.4912C65.0445 73.5028 58.849 70.9707 54.4292 66.453C52.2676 64.2427 50.6849 61.7221 49.7006 59.027C48.7414 56.3707 48.3689 53.5593 48.6159 50.7285C48.8495 47.9559 49.6717 45.2996 50.9899 42.9147C52.2792 40.5687 54.0587 38.4359 56.2396 36.6327C60.5436 33.1233 66.0057 31.2038 71.7186 31.2038C77.4509 31.196 82.9129 33.0826 87.2169 36.5939C89.3979 38.3855 91.1735 40.5105 92.4667 42.8566C93.7849 45.2414 94.609 47.8783 94.8406 50.6703C95.0838 53.5011 94.7113 56.3125 93.7521 58.9688C92.7716 61.6833 91.1851 64.2039 89.0235 66.4142L89.0351 66.3948Z"
            fill="white" />
        </svg>

      </div>

    </div>
    <!-- Details -->
    <div class="flex-auto" style="width: 510px;">
      <h3 class="text-3xl font-medium text-primary">Lundi - 14/11/2022 - 13h</h3>
      <h2 class="text-5xl font-semibold text-white">Modélisation 3d Avec Blender</h2>
    </div>
  </div>
</template>