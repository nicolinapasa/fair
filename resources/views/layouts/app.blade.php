<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400&family=Patrick+Hand+SC&family=Poppins:wght@400;500;600;700;800;900&family=Rufina:wght@400;700&family=Zilla+Slab:wght@300;400;500;600&display=swap"
        rel="stylesheet">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ url('assets/css/style.css') }}">
    <link rel="icon" href="{{url('assets/img/diamond.png')}}">
</head>

<body>
    @include('layouts.header')

    @yield('content')

    @include('layouts.footer')

    <div id="big-shopping-cart">
        <div>
            <p>Bag</p>
            <button id="cart-close-button">+</button>
        </div>
        <div id="shopping-cart">There is nothing in your bag yet.</div>
    </div>
    <div id="overlay"></div>

    <div id="favourites">
        <div>
            <p>Favourite items</p>
            <button id="fav-close-button">+</button>
        </div>
        <div id="fav">There is nothing in your favourites yet.</div>
    </div>

    <script src="{{ url('assets/js/script.js') }}"></script>
    <script src="{{url('assets/js/slider.js')}}"></script>
    <script>
        localStorage.setItem('ok', '0');
    </script>
</body>

</html>
