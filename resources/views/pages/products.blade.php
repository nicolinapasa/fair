@extends('layouts.app')

@section('content')

@section('title')
    FAIR - Products
@endsection

<section class="products-slider">
    <div class="slider">
        <div class="slides">
            <img src="{{url('assets/img/slider1.svg')}}">
            <img src="{{url('assets/img/slider2.svg')}}">
            <img src="{{url('assets/img/slider3.svg')}}">
            <img src="{{url('assets/img/slider4.svg')}}">
            <img src="{{url('assets/img/slider5.svg')}}">
        </div>
        <div class="dots"></div>
    </div>
</section>

<section class="products-container">
    <p>PRODUCTS</p>
    <div class="select-box">
        <select name="" id="page-nmb">
            <option value="0" selected>Show All Products</option>
            <option value="3">Show 3 products</option>
            <option value="6">Show 6 products</option>
            <option value="9">Show 9 products</option>
            <option value="12">Show 12 products</option>
        </select>
    </div>

    <div class="prod-box"></div>
    <div class="pages"></div>
</section>

@endsection
