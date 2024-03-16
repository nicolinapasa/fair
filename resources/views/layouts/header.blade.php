<header>
    <div class="pre-header">
        {{-- <div class="languages">
            <a href="../ro/index-ro.html">RO</a>
            <div class="vertical-line"></div>
            <a href="index-en.html">EN</a>
        </div> --}}
        <div class="log-sgnup">
            <a href="login-en.html">Login</a>
            <div class="vertical-line"></div>
            <a href="sign-up-en.html">Sign Up</a>
        </div>
    </div>
    <div class="header">
        <a href={{ route('home') }} class="logo">FAIR</a>
        <ul class="menu">
            <li><a href={{ route('products') }}>PRODUCTS</a></li>
            <li><a href={{ route('about') }}>ABOUT US</a></li>
            {{-- <li><a href="personalize-en.html">PERSONALIZE</a></li> --}}
            <li><a href={{ route('contacts') }}>CONTACTS</a></li>
        </ul>
        <div class="header-icons">
            <div class="icon" id="fav-button">
                <img src="{{ url('assets/img/heart.png') }}" alt="fav">
            </div>
            <div class="icon" id="cart-button">
                <img src="{{ url('assets/img/shopping-bag.png') }}" alt="cart">
            </div>
            <a href="profile-en.html" class="icon">
                <img src="{{ url('assets/img/user.png') }}" alt="profile">
            </a>
        </div>
    </div>
</header>
