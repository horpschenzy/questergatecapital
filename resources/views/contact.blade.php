<html class="bg-gray-200">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link href="/questergatecapital/public/css/main.css" rel="stylesheet" id="main_css">
  <link href="/questergatecapital/public/css/primer-tooltips.css" rel="stylesheet">
  <link href="/questergatecapital/public/css/page.css" rel="stylesheet">
  <link rel="stylesheet" href="/questergatecapital/public/css/scrolltop.css">
  <link rel="icon" href="/questergatecapital/public/img/favicon.png" type="image/png" sizes="16x16">
  <title>Contact Us | QuesterGate Limited</title>
  <style type="text/css">
    .alert-flash {
      right: 25px;
      top: 25px;
    }
    .view-more:hover{
        text-decoration: underline;
    }
  </style>
  <style type="text/css">
    .apexcharts-canvas {
      position: relative;
      user-select: none;
      /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */
    }


    /* scrollbar is not visible by default for legend, hence forcing the visibility */
    .apexcharts-canvas ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 6px;
    }

    .apexcharts-canvas ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(0, 0, 0, .5);
      box-shadow: 0 0 1px rgba(255, 255, 255, .5);
      -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    }


    .apexcharts-inner {
      position: relative;
    }

    .apexcharts-text tspan {
      font-family: inherit;
    }

    .legend-mouseover-inactive {
      transition: 0.15s ease all;
      opacity: 0.20;
    }

    .apexcharts-series-collapsed {
      opacity: 0;
    }

    .apexcharts-tooltip {
      border-radius: 5px;
      box-shadow: 2px 2px 6px -4px #999;
      cursor: default;
      font-size: 14px;
      left: 62px;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      white-space: nowrap;
      z-index: 12;
      transition: 0.15s ease all;
    }

    .apexcharts-tooltip.apexcharts-active {
      opacity: 1;
      transition: 0.15s ease all;
    }

    .apexcharts-tooltip.apexcharts-theme-light {
      border: 1px solid #e3e3e3;
      background: rgba(255, 255, 255, 0.96);
    }

    .apexcharts-tooltip.apexcharts-theme-dark {
      color: #fff;
      background: rgba(30, 30, 30, 0.8);
    }

    .apexcharts-tooltip * {
      font-family: inherit;
    }


    .apexcharts-tooltip-title {
      padding: 6px;
      font-size: 15px;
      margin-bottom: 4px;
    }

    .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
      background: #ECEFF1;
      border-bottom: 1px solid #ddd;
    }

    .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
      background: rgba(0, 0, 0, 0.7);
      border-bottom: 1px solid #333;
    }

    .apexcharts-tooltip-text-value,
    .apexcharts-tooltip-text-z-value {
      display: inline-block;
      font-weight: 600;
      margin-left: 5px;
    }

    .apexcharts-tooltip-text-z-label:empty,
    .apexcharts-tooltip-text-z-value:empty {
      display: none;
    }

    .apexcharts-tooltip-text-value,
    .apexcharts-tooltip-text-z-value {
      font-weight: 600;
    }

    .apexcharts-tooltip-marker {
      width: 12px;
      height: 12px;
      position: relative;
      top: 0px;
      margin-right: 10px;
      border-radius: 50%;
    }

    .apexcharts-tooltip-series-group {
      padding: 0 10px;
      display: none;
      text-align: left;
      justify-content: left;
      align-items: center;
    }

    .apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
      opacity: 1;
    }

    .apexcharts-tooltip-series-group.apexcharts-active,
    .apexcharts-tooltip-series-group:last-child {
      padding-bottom: 4px;
    }

    .apexcharts-tooltip-series-group-hidden {
      opacity: 0;
      height: 0;
      line-height: 0;
      padding: 0 !important;
    }

    .apexcharts-tooltip-y-group {
      padding: 6px 0 5px;
    }

    .apexcharts-tooltip-box,
    .apexcharts-custom-tooltip {
      padding: 4px 8px;
    }

    .apexcharts-tooltip-boxPlot {
      display: flex;
      flex-direction: column-reverse;
    }

    .apexcharts-tooltip-box>div {
      margin: 4px 0;
    }

    .apexcharts-tooltip-box span.value {
      font-weight: bold;
    }

    .apexcharts-tooltip-rangebar {
      padding: 5px 8px;
    }

    .apexcharts-tooltip-rangebar .category {
      font-weight: 600;
      color: #777;
    }

    .apexcharts-tooltip-rangebar .series-name {
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
    }

    .apexcharts-xaxistooltip {
      opacity: 0;
      padding: 9px 10px;
      pointer-events: none;
      color: #373d3f;
      font-size: 13px;
      text-align: center;
      border-radius: 2px;
      position: absolute;
      z-index: 10;
      background: #ECEFF1;
      border: 1px solid #90A4AE;
      transition: 0.15s ease all;
    }

    .apexcharts-xaxistooltip.apexcharts-theme-dark {
      background: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(0, 0, 0, 0.5);
      color: #fff;
    }

    .apexcharts-xaxistooltip:after,
    .apexcharts-xaxistooltip:before {
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    .apexcharts-xaxistooltip:after {
      border-color: rgba(236, 239, 241, 0);
      border-width: 6px;
      margin-left: -6px;
    }

    .apexcharts-xaxistooltip:before {
      border-color: rgba(144, 164, 174, 0);
      border-width: 7px;
      margin-left: -7px;
    }

    .apexcharts-xaxistooltip-bottom:after,
    .apexcharts-xaxistooltip-bottom:before {
      bottom: 100%;
    }

    .apexcharts-xaxistooltip-top:after,
    .apexcharts-xaxistooltip-top:before {
      top: 100%;
    }

    .apexcharts-xaxistooltip-bottom:after {
      border-bottom-color: #ECEFF1;
    }

    .apexcharts-xaxistooltip-bottom:before {
      border-bottom-color: #90A4AE;
    }

    .apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {
      border-bottom-color: rgba(0, 0, 0, 0.5);
    }

    .apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
      border-bottom-color: rgba(0, 0, 0, 0.5);
    }

    .apexcharts-xaxistooltip-top:after {
      border-top-color: #ECEFF1
    }

    .apexcharts-xaxistooltip-top:before {
      border-top-color: #90A4AE;
    }

    .apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {
      border-top-color: rgba(0, 0, 0, 0.5);
    }

    .apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
      border-top-color: rgba(0, 0, 0, 0.5);
    }

    .apexcharts-xaxistooltip.apexcharts-active {
      opacity: 1;
      transition: 0.15s ease all;
    }

    .apexcharts-yaxistooltip {
      opacity: 0;
      padding: 4px 10px;
      pointer-events: none;
      color: #373d3f;
      font-size: 13px;
      text-align: center;
      border-radius: 2px;
      position: absolute;
      z-index: 10;
      background: #ECEFF1;
      border: 1px solid #90A4AE;
    }

    .apexcharts-yaxistooltip.apexcharts-theme-dark {
      background: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(0, 0, 0, 0.5);
      color: #fff;
    }

    .apexcharts-yaxistooltip:after,
    .apexcharts-yaxistooltip:before {
      top: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    .apexcharts-yaxistooltip:after {
      border-color: rgba(236, 239, 241, 0);
      border-width: 6px;
      margin-top: -6px;
    }

    .apexcharts-yaxistooltip:before {
      border-color: rgba(144, 164, 174, 0);
      border-width: 7px;
      margin-top: -7px;
    }

    .apexcharts-yaxistooltip-left:after,
    .apexcharts-yaxistooltip-left:before {
      left: 100%;
    }

    .apexcharts-yaxistooltip-right:after,
    .apexcharts-yaxistooltip-right:before {
      right: 100%;
    }

    .apexcharts-yaxistooltip-left:after {
      border-left-color: #ECEFF1;
    }

    .apexcharts-yaxistooltip-left:before {
      border-left-color: #90A4AE;
    }

    .apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {
      border-left-color: rgba(0, 0, 0, 0.5);
    }

    .apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
      border-left-color: rgba(0, 0, 0, 0.5);
    }

    .apexcharts-yaxistooltip-right:after {
      border-right-color: #ECEFF1;
    }

    .apexcharts-yaxistooltip-right:before {
      border-right-color: #90A4AE;
    }

    .apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {
      border-right-color: rgba(0, 0, 0, 0.5);
    }

    .apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
      border-right-color: rgba(0, 0, 0, 0.5);
    }

    .apexcharts-yaxistooltip.apexcharts-active {
      opacity: 1;
    }

    .apexcharts-yaxistooltip-hidden {
      display: none;
    }

    .apexcharts-xcrosshairs,
    .apexcharts-ycrosshairs {
      pointer-events: none;
      opacity: 0;
      transition: 0.15s ease all;
    }

    .apexcharts-xcrosshairs.apexcharts-active,
    .apexcharts-ycrosshairs.apexcharts-active {
      opacity: 1;
      transition: 0.15s ease all;
    }

    .apexcharts-ycrosshairs-hidden {
      opacity: 0;
    }

    .apexcharts-selection-rect {
      cursor: move;
    }

    .svg_select_boundingRect,
    .svg_select_points_rot {
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
    }

    .apexcharts-selection-rect+g .svg_select_boundingRect,
    .apexcharts-selection-rect+g .svg_select_points_rot {
      opacity: 0;
      visibility: hidden;
    }

    .apexcharts-selection-rect+g .svg_select_points_l,
    .apexcharts-selection-rect+g .svg_select_points_r {
      cursor: ew-resize;
      opacity: 1;
      visibility: visible;
    }

    .svg_select_points {
      fill: #efefef;
      stroke: #333;
      rx: 2;
    }

    .apexcharts-svg.apexcharts-zoomable.hovering-zoom {
      cursor: crosshair
    }

    .apexcharts-svg.apexcharts-zoomable.hovering-pan {
      cursor: move
    }

    .apexcharts-zoom-icon,
    .apexcharts-zoomin-icon,
    .apexcharts-zoomout-icon,
    .apexcharts-reset-icon,
    .apexcharts-pan-icon,
    .apexcharts-selection-icon,
    .apexcharts-menu-icon,
    .apexcharts-toolbar-custom-icon {
      cursor: pointer;
      width: 20px;
      height: 20px;
      line-height: 24px;
      color: #6E8192;
      text-align: center;
    }

    .apexcharts-zoom-icon svg,
    .apexcharts-zoomin-icon svg,
    .apexcharts-zoomout-icon svg,
    .apexcharts-reset-icon svg,
    .apexcharts-menu-icon svg {
      fill: #6E8192;
    }

    .apexcharts-selection-icon svg {
      fill: #444;
      transform: scale(0.76)
    }

    .apexcharts-theme-dark .apexcharts-zoom-icon svg,
    .apexcharts-theme-dark .apexcharts-zoomin-icon svg,
    .apexcharts-theme-dark .apexcharts-zoomout-icon svg,
    .apexcharts-theme-dark .apexcharts-reset-icon svg,
    .apexcharts-theme-dark .apexcharts-pan-icon svg,
    .apexcharts-theme-dark .apexcharts-selection-icon svg,
    .apexcharts-theme-dark .apexcharts-menu-icon svg,
    .apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {
      fill: #f3f4f5;
    }

    .apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,
    .apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
    .apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {
      fill: #008FFB;
    }

    .apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
    .apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
    .apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
    .apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,
    .apexcharts-theme-light .apexcharts-reset-icon:hover svg,
    .apexcharts-theme-light .apexcharts-menu-icon:hover svg {
      fill: #333;
    }

    .apexcharts-selection-icon,
    .apexcharts-menu-icon {
      position: relative;
    }

    .apexcharts-reset-icon {
      margin-left: 5px;
    }

    .apexcharts-zoom-icon,
    .apexcharts-reset-icon,
    .apexcharts-menu-icon {
      transform: scale(0.85);
    }

    .apexcharts-zoomin-icon,
    .apexcharts-zoomout-icon {
      transform: scale(0.7)
    }

    .apexcharts-zoomout-icon {
      margin-right: 3px;
    }

    .apexcharts-pan-icon {
      transform: scale(0.62);
      position: relative;
      left: 1px;
      top: 0px;
    }

    .apexcharts-pan-icon svg {
      fill: #fff;
      stroke: #6E8192;
      stroke-width: 2;
    }

    .apexcharts-pan-icon.apexcharts-selected svg {
      stroke: #008FFB;
    }

    .apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
      stroke: #333;
    }

    .apexcharts-toolbar {
      position: absolute;
      z-index: 11;
      max-width: 176px;
      text-align: right;
      border-radius: 3px;
      padding: 0px 6px 2px 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .apexcharts-menu {
      background: #fff;
      position: absolute;
      top: 100%;
      border: 1px solid #ddd;
      border-radius: 3px;
      padding: 3px;
      right: 10px;
      opacity: 0;
      min-width: 110px;
      transition: 0.15s ease all;
      pointer-events: none;
    }

    .apexcharts-menu.apexcharts-menu-open {
      opacity: 1;
      pointer-events: all;
      transition: 0.15s ease all;
    }

    .apexcharts-menu-item {
      padding: 6px 7px;
      font-size: 12px;
      cursor: pointer;
    }

    .apexcharts-theme-light .apexcharts-menu-item:hover {
      background: #eee;
    }

    .apexcharts-theme-dark .apexcharts-menu {
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
    }

    @media screen and (min-width: 768px) {
      .apexcharts-canvas:hover .apexcharts-toolbar {
        opacity: 1;
      }
    }

    .apexcharts-datalabel.apexcharts-element-hidden {
      opacity: 0;
    }

    .apexcharts-pie-label,
    .apexcharts-datalabels,
    .apexcharts-datalabel,
    .apexcharts-datalabel-label,
    .apexcharts-datalabel-value {
      cursor: default;
      pointer-events: none;
    }

    .apexcharts-pie-label-delay {
      opacity: 0;
      animation-name: opaque;
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
      animation-timing-function: ease;
    }

    .apexcharts-canvas .apexcharts-element-hidden {
      opacity: 0;
    }

    .apexcharts-hide .apexcharts-series-points {
      opacity: 0;
    }

    .apexcharts-gridline,
    .apexcharts-annotation-rect,
    .apexcharts-tooltip .apexcharts-marker,
    .apexcharts-area-series .apexcharts-area,
    .apexcharts-line,
    .apexcharts-zoom-rect,
    .apexcharts-toolbar svg,
    .apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
    .apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
    .apexcharts-radar-series path,
    .apexcharts-radar-series polygon {
      pointer-events: none;
    }


    /* markers */

    .apexcharts-marker {
      transition: 0.15s ease all;
    }

    @keyframes opaque {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }


    /* Resize generated styles */

    @keyframes resizeanim {
      from {
        opacity: 0;
      }

      to {
        opacity: 0;
      }
    }

    .resize-triggers {
      animation: 1ms resizeanim;
      visibility: hidden;
      opacity: 0;
    }

    .resize-triggers,
    .resize-triggers>div,
    .contract-trigger:before {
      content: " ";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }

    .resize-triggers>div {
      background: #eee;
      overflow: auto;
    }

    .contract-trigger:before {
      width: 200%;
      height: 200%;
    }
  </style>

<script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
</head>

<body class="font-sans antialiased text-gray-900 leading-normal">
<a id="scroll-top-btn"></a>
  <div class="bg-indigo-600">
    <div class="flex md:min-h-screen flex-col md:flex-row">
      <div class="w-full md:w-2/5 h-96 md:h-auto md:min-h-screen relative">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url(&quot;/questergatecapital/public/img/africa-family.jpg&quot;);"></div>
      </div>
      <div class="w-full md:w-3/5 bg-white md:min-h-screen">
        <div class="flex items-center justify-center h-full p-12">
          <div class=" w-full max-w-sm">

            <a href="/" class="logo flex justify-center mb-12">
              <img src="/questergatecapital/public/img/qgc-logo.png" alt="Logo" class="h-12 w-auto">
            </a>


            <div class="flex items-center justify-between">
              <h2 class="font-semibold text-gray-900 text-lg uppercase leading-tight border-b-2 border-gray-200 pb-1">Contact Us</h2>
            </div>

            <form method="POST" class="w-full contact-form">
              

              <div class="mt-2">
                <!-- <h2><strong>Address</strong></h2>
                <p>BLOCK 3, FLAT 9, NIGERIAN AIRWAYS QUATERS, 401 ROAD, GOWON ESTATE, LAGOS, LAGOS STATE, </p> -->
                <p class="mb-1"><strong>Email: </strong>contact@questergate.com</p>
                <p class="mb-1"><strong>Phone: </strong> +234 814 447 7866</p>
                <p class="mb-3 flex">
                  <strong>WhatsApp: </strong> 
                  <img class="ml-3 mr-2" src="/questergatecapital/public/img/whatsapp.svg" style="width: 20px;">
                  <a class="text-blue-500 view-more" href="https://wa.link/68pals" target="_blank">https://wa.link/68pals</a>
                </p>

                <p class="mb-1"><strong>Connect with us on social media</strong></p>

                <div class="mb-1">
                  <a href="https://web.facebook.com/questergate" class="view-more text-blue-700">
                    <span class="mr-3 text-md"><i class="fab fa-facebook"></i> Facebook</span>
                  </a>

                  <a href="https://instagram.com/questergateng" class="view-more text-red-700">
                    <span class="mr-3 text-md"><i class="fab fa-instagram"></i> Instagram</span>
                  </a>

                  <a href="#" class="view-more text-blue-400">
                    <span class="text-md"><i class="fab fa-twitter"></i> Twitter</span>
                  </a>
                </div>

                <div class="mb-3">
                  <a href="https://linkedin.com/company/questergate" class="view-more text-blue-800">
                    <span class="text-md"><i class="fab fa-linkedin"></i> LinkedIn</span>
                  </a>
                </div>

                <div class="mb-3">
                  <p class="mb-1"><strong>Our open hours:</strong></p>
                  <div class="">Monday - Friday:</div>
                  <div class="">9:00am - 5:00pm</div>
                </div>

                <div>
                <p class="alert-success-alt p-3 rounded text-sm my-2 display-success" style="display: none;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" style="display: inline-block">
                    <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" class=""></path>
                  </svg> <span style="vertical-align: middle;">Message sent successfully. We will get back to you shortly.</span>
                </p>

                <p class="alert-danger-alt p-3 rounded text-sm my-2 display-error" style="display: none;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" style="display: inline-block">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" class=""></path>
                  </svg>

                  <span style="vertical-align: middle;" id="alert-danger-text"></span>
                </p>

              </div>


                <p class="mb-0"><strong>How can we help? </strong></p>
                <div aria-required="true" aria-invalid="false">
                  <input id="fullname" name="fullname" type="text" placeholder="Full Name" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400">
                  <!---->
                </div>

                <div aria-required="true" aria-invalid="false">
                  <div class="relative mt-3">
                    <input id="email" name="email" type="text" placeholder="Email" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white border-gray-400">
                  </div>
                  <!---->
                </div>

                <div aria-required="true" aria-invalid="false">
                  <div class="relative mt-3">
                    <input id="phone" name="phone" type="text" placeholder="Phone" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white border-gray-400">
                  </div>
                  <!---->
                </div>
                
                <div aria-required="true" aria-invalid="false">
                  <div class="relative mt-3">                   

                    <textarea class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white border-gray-400" name="usermsg"></textarea>                    

                  </div>
                  <p class="text-red-500 text-xs italic my-2" id="password-err"></p>
                  <!---->
                </div>
                
              </div>

              <div>
                <div>
                  <button type="button" class="focus:outline-none focus:shadow-outline bg-indigo-500 hover:bg-indigo-600 px-4 py-3 text-white w-full md:flex-1 rounded border-b-2 border-indigo-600 font-semibold opacity-75" onclick="sendMessage(this);">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>

    <div role="alert" class="alert alert-flash rounded p-5 fixed max-w-xs font-medium flex items-center justify-between transition transition-property-opacity z-50 alert-success" style="display: none;">
      <div class="icon">
        <div class="text-white mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        </div>
        <!---->
        <!---->
      </div>

      <div class="body"></div>
    </div>
  </div>



  <svg id="SvgjsSvg1001" width="2" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" style="overflow: hidden; top: -100%; left: -100%; position: absolute; opacity: 0;">
    <defs id="SvgjsDefs1002"></defs>
    <polyline id="SvgjsPolyline1003" points="0,0"></polyline>
    <path id="SvgjsPath1004" d="M0 0 "></path>
  </svg>

  <script src="/questergatecapital/public/js/jquery.js"></script>
  <script src="/questergatecapital/public/js/script.js?v=16"></script>
</body>

</html>