<div class="fixed z-30 inset-y-0 left-0 w-64 px-8 py-4 bg-gray-200 border-r overflow-y-auto lg:inset-auto lg:static lg:translate-x-0 -translate-x-full ease-in transition-medium mobile-sidebar">
    <div class="-mx-3 mt-5 pl-3 flex items-center justify-between">
        <a href="{{url('/')}}"><img src="/questergatecapital/public/img/qgc-logo.png" class="h-8 w-auto"></a>
        <button class="block text-gray-600 hover:text-gray-800 lg:hidden" onclick="toggleMobileSidebar('close');">
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path>
            </svg>
        </button>
    </div> 

    <nav>
        <!-- SIDEBAR NAV-->
        <div class="mt-12">
            <a aria-selected="0" href="{{url('investor/dashboard')}}" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg {{Request::is('investor/dashboard') ? 'bg-gray-300 menu-link-active' : 'hover:bg-gray-300 menu-link'}}">
                <span class="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 transition-all ease-out transition-medium">
                        <path d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" class="ic-pri"></path>
                        <path d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z" class="ic-sec"></path>
                    </svg> 
                    <span class="ml-2 {{Request::is('investor/dashboard') ? 'font-semibold mn-active' : 'text-gray-700'}}">Home</span>
                </span>
            </a>

            <a aria-selected="1" href="{{url('investor/deposit')}}" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg {{Request::is('investor/deposit') ? 'bg-gray-300 menu-link-active' : 'hover:bg-gray-300 menu-link'}}">
                <span class="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" class="h-6 w-6 transition-all ease-out transition-medium">
                        <g fill="none">
                            <path d="M560 224h-29.51a159.88 159.88 0 0 0-37.38-52.46L512 96h-32c-29.4 0-55.39 13.5-73 34.32-7.57-1.1-15.12-2.32-23-2.32H256c-94.82 0-160 78.88-160 160a159.75 159.75 0 0 0 64 128v80a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-48h128v48a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-80.72A160.37 160.37 0 0 0 511.28 384H560a16 16 0 0 0 16-16V240a16 16 0 0 0-16-16zm-128 64a16 16 0 1 1 16-16 16 16 0 0 1-16 16z" class="ic-pri"></path>
                            <path d="M51.26 255.52a24 24 0 0 1-18.74-28.3C34.74 215.82 45.4 208 57 208h1a6 6 0 0 0 6-6v-20a6 6 0 0 0-6-6C29.5 176 4.1 196.4.47 224.62a54.64 54.64 0 0 0-.47 7.23A56.08 56.08 0 0 0 56 288h40a155.05 155.05 0 0 1 3.37-32H56a23.63 23.63 0 0 1-4.74-.48zM432 256a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM306.5 0a96 96 0 0 0-88.81 132.51A162.64 162.64 0 0 1 256 128h128a104.31 104.31 0 0 1 12.71.88A96.06 96.06 0 0 0 306.5 0z" class="ic-sec"></path>
                        </g>
                    </svg>
                    <span class="ml-2 {{Request::is('investor/deposit') ? 'font-semibold mn-active' : 'text-gray-700'}}">Deposits</span>
                </span>
            </a>

            <a aria-selected="0" href="{{url('investor/withdrawal')}}" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg {{Request::is('investor/withdrawal') ? 'bg-gray-300 menu-link-active' : 'hover:bg-gray-300 menu-link'}}">
                <span class="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 17" class="h-6 w-6 transition-all ease-out transition-medium">
                        <g fill="none">
                            <path d="M11.1 10.002A2.1 2.1 0 1 0 6.9 10H1c-.552 0-1-.413-1-.923V2.923C0 2.413.448 2 1 2h12.002c.553 0 1 .413 1 .923v7.08zM7.006 4A2.003 2.003 0 1 0 7 8.006 2.003 2.003 0 0 0 7.006 4z" class="ic-sec"></path>
                            <path d="M15 14H3c-.552 0-1-.413-1-.923V6.923C2 6.413 2.448 6 3 6h12c.552 0 1 .413 1 .923v6.154c0 .51-.448.923-1 .923zM9.006 8A2.003 2.003 0 1 0 9 12.006 2.003 2.003 0 0 0 9.006 8z" class="ic-pri"></path>
                        </g>
                    </svg> 

                    <span class="ml-2 {{Request::is('investor/withdrawal') ? 'font-semibold mn-active' : 'text-gray-700'}}">Withdrawals</span>
                </span>
            </a>

            <a aria-selected="0" href="{{url('investor/plan')}}" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg {{Request::is('investor/plan') ? 'bg-gray-300 menu-link-active' : 'hover:bg-gray-300 menu-link'}}">
                <span class="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 transition-all ease-out transition-medium"><path d="M10 14.92V16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.08c2.83-.24 5.53-.96 8-2.1V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.18a23.85 23.85 0 0 0 8 2.1z" class="ic-pri"></path> <path d="M14 12.92V12a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.92a23.85 23.85 0 0 1-8-2.1V8c0-1.1.9-2 2-2h3V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h3a2 2 0 0 1 2 2v2.82a23.85 23.85 0 0 1-8 2.1zM15 6V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6z" class="ic-sec"></path> </svg> 

                    <span class="ml-2 {{Request::is('investor/plan') ? 'font-semibold mn-active' : 'text-gray-700'}}">My Investments</span>
                </span>
            </a>

            <a aria-selected="0" href="{{url('/investor/calculator')}}" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg {{Request::is('/investor/calculator') ? 'bg-gray-300 menu-link-active' : 'hover:bg-gray-300 menu-link'}}">
                <span class="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 transition-all ease-out transition-medium"><path d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm2 11a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H8z" class="ic-pri"></path> <polygon points="14 2 20 8 14 8" class="ic-sec"></polygon></svg> 

                    <span class="ml-2 {{Request::is('/investor/calculator') ? 'font-semibold mn-active' : 'text-gray-700'}}">Investment Calculator</span>
                </span>
            </a>

            <a aria-selected="0" href="{{url('investor/setting')}}" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg {{Request::is('investor/setting') ? 'bg-gray-300 menu-link-active' : 'hover:bg-gray-300 menu-link'}}">
                <span class="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 transition-all ease-out transition-medium">
                        <path d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" class="ic-pri"></path>
                        <circle cx="12" cy="12" r="2" class="ic-sec"></circle> 
                    </svg> 
                    <span class="ml-2 {{Request::is('investor/setting') ? 'font-semibold mn-active' : 'text-gray-700'}}">Settings</span>
                </span>
            </a>

            <a aria-selected="0" href="{{url('investor/referral')}}" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg {{Request::is('investor/referral') ? 'bg-gray-300 menu-link-active' : 'hover:bg-gray-300 menu-link'}}">
                <span class="inline-flex items-center">                    
                    <svg viewBox="0 0 19 19" class="h-6 w-6 transition-all ease-out transition-medium" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M13.445 13.861C12.413 12.885 10.362 12.22 8 12.22s-4.413.665-5.445 1.641a8 8 0 1110.89 0zM8 9.231a3.077 3.077 0 100-6.154 3.077 3.077 0 000 6.154z" fill="#4f566b"  class="ic-pri"></path><path d="M13.944 13.354A7.98 7.98 0 018 16a7.98 7.98 0 01-5.944-2.646C2.76 12.043 5.154 11.077 8 11.077s5.24.966 5.944 2.277z" fill="#4f566b"  class="ic-sec"></path></g></svg>

                    <span class="ml-2 {{Request::is('investor/referral') ? 'font-semibold mn-active' : 'text-gray-700'}}">Referrals</span>
                </span>
            </a>
        </div>
        <!-- end -->
    </nav>

    <div class="mt-8 pt-6 border-t sm:hidden" style="margin-top: auto;">
        <div class="flex items-center">
            <span class="fullname-initial">{{$fInitial}}</span>
            <span class="ml-4 mr-2 text-sm font-medium text-gray-800">{{$user->firstname}}</span>
        </div> 
        <div class="mt-4">
            <a href="{{url('logout')}}" class="mt-4 block text-sm font-medium text-gray-700">Sign out</a>
        </div>
    </div>

   
</div> 