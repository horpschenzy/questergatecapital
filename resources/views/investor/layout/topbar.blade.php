<div class="flex-shrink-0 border-b-2 shadow-md">
    <header class="px-6">
        <div class="flex justify-between items-center py-3">
            <div class="flex-1 flex items-center">
                <button class="block text-gray-600 hover:text-gray-700 lg:hidden" onclick="toggleMobileSidebar('open')">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                        <path d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h7a1 1 0 100-2H4z"></path>
                    </svg>
                </button> 
                <div class="ml-5">
                    <span class="block text-xs uppercase text-gray-600 font-semibold tracking-wide">QG-Wallet</span> 
                    <span class="text-xl text-gray-800 font-medium">₦ {{$tqgwallet}}</span>
                </div>
            </div> 
            <div class="flex items-center">
                <div class="ml-5 relative">
                    <button class="relative flex items-center focus:outline-none" onclick="toggleUserMenu(this)">
                        <span class="fullname-initial">{{$fInitial}} </span>
                        <span class="hidden xl:block ml-2 font-medium text-sm">{{$user->firstname}} ({{$user->user_id}})</span> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-1 h-5 w-5 fill-current text-gray-700">
                            <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</div>