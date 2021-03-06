<header id="header" class="header header-box-shadow-on-scroll header-abs-top header-bg-transparent header-show-hide"  data-hs-header-options='{
            "fixMoment": 1000,
            "fixEffect": "slide"
          }'>
  <div class="header-section">
    <div id="logoAndNav" class="container">
      <nav class="js-mega-menu navbar navbar-expand-lg">
          <a class="navbar-brand" href="/" aria-label="Front">
            <img src="/questergatecapital/public/img/qgc-logo.png" alt="Logo" style="width: 200px">
          </a>
          <button type="button" class="navbar-toggler btn btn-icon btn-sm rounded-circle"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  aria-controls="navBar"
                  data-toggle="collapse"
                  data-target="#navBar">
            <span class="navbar-toggler-default">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
              </svg>
            </span>
            <span class="navbar-toggler-toggled">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
              </svg>
            </span>
          </button>

        <!-- Navigation -->
        <div id="navBar" class="collapse navbar-collapse">
          <div class="navbar-body header-abs-top-inner">
          <ul class="navbar-nav" style="font-size: 0.8rem;">

<li class="header-nav-item">
  <a class="nav-link header-nav-link" href="/investment-plan">
    Our Investment Plans
  </a>
</li>

<li class="header-nav-item">
  <a class="nav-link header-nav-link" href="faq">
    FAQs
  </a>
</li>

<li class="header-nav-item">
  <a class="nav-link header-nav-link" href="about">
    About Us
  </a>
</li>

<li class="header-nav-item">
  <a class="nav-link header-nav-link" href="contact">
    Contact
  </a>
</li>

<li class="header-nav-item">
  <a class="nav-link header-nav-link" href="blog" target="_blank">
    Blog
  </a>
</li>
<li class="header-nav-item">
  <a class="nav-link header-nav-link" href="resource">
    Resources
  </a>
</li>

@if(!Auth::check())
<li class="header-nav-item">
  <a class="nav-link header-nav-link " href="login">
    <strong>Log In</strong>
  </a>
</li>
@else
<li class="header-nav-item">
  <a class="nav-link header-nav-link " href="{{url('logout')}}">
    <strong>Sign Out</strong>
  </a>
</li>
@endif

<!-- Button -->
<li class="header-nav-last-item ml-lg-2">
  @if(Auth::check())
  <a class="btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" href="investor/dashboard">
    My Dashboard
  </a>
  @else
  <a class="btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" href="register">
    Register
  </a>
  @endif
</li>

</ul>
          </div>
        </div>
        <!-- End Navigation -->
      </nav>
      <!-- End Nav -->
    </div>
  </div>
</header>