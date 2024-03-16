@extends('layouts.app')
@section('content')

@section('title')
    FAIR - Home
@endsection

<section class="banner">
    <div>
        <p class="dancing-script">Celebrate your life with</p>
        <p class="rufina">FAIR JEWELRY</p>
        <button class="btn"><a href={{ route('products') }}>SHOP NOW</a></button>
    </div>
</section>

<section class="whats-new">
    <h3 class="rufina">WHAT'S NEW</h3>
    <div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="front-card">
                    <p>NEW PRODUCTS</p>
                    <p>Explore our new rings</p>
                    <p>Hover this for a surprise</p>
                </div>
                <div class="back-card">
                    <p>Use the promocode FAIR20 for a 20% off of the first purchase!</p>
                </div>
            </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="front-card">
                    <p>
                        FOR YOU
                    </p>
                    <p>
                        With love.
                    </p>
                    <p>Hover this for a surprise</p>
                </div>
                <div class="back-card">
                    <p>Use the promocode FAIR20 for a 20% off of the first purchase!</p>
                </div>
            </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="front-card">
                    <p>POPULAR</p>
                    <p>Shop now.</p>
                    <p>Hover this for a surprise</p>
                </div>
                <div class="back-card">
                    <p>Use the promocode FAIR20 for a 20% off of the first purchase!</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="home-page-container">
    <h3 class="rufina">CATEGORIES</h3>
    <div class="box">
        <div class="image"></div>
        <div class="description">
            <p class="inter">Find the perfect wedding ring here.</p>
            <button class="btn"><a href={{ route('products') }}>SHOP RINGS</a></button>
        </div>
    </div>
    <div class="box">
        <div class="image"></div>
        <div class="description">
            <p class="inter">A necklace for various ocasions.</p>
            <button class="btn"><a href={{ route('products') }}>SHOP NECKLACES</a></button>
        </div>
    </div>
    <div class="box">
        <div class="image"></div>
        <div class="description">
            <p class="inter">What’s better than a cute bracelet?</p>
            <button class="btn"><a href={{ route('products') }}>SHOP BRACELETS</a></button>
        </div>
    </div>
    <div class="box">
        <div class="image"></div>
        <div class="description">
            <p class="inter">Earrings of all types.</p>
            <button class="btn"><a href={{ route('products') }}>SHOP EARRINGS</a></button>
        </div>
    </div>
</section>
@endsection
