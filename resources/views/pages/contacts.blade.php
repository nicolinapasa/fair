@extends('layouts.app')
@section('content')

@section('title')
    FAIR - Contacts
@endsection

<section class="contacts-container">
    <div>
        <p>FAIR at your service</p>
        <p>Have a question or concern? Our team is standing by to assist you.</p>
        <p>Contact us by email with your request and we will work with you privately to source what you are looking for! You can set up an appointment at our office or an interactive appointment through FaceTime. It would be our pleasure to help you find the jewelry of your dreams.</p>
        <label for="email">
            <input type="text" id="email-box" placeholder="Enter your email">
            <img src="{{url('assets/img/email-black.svg')}}" alt="submit" id="email-submit">
        </label>
    </div>
    <div>
        <p>Text us</p>
        <p>Text us! This is an US based number. Charges may apply. </p>
        <div>
            <img src="{{url('assets/img/phone.svg')}}" alt="">
            <p>+1 (111) 111-1111</p>
        </div>
    </div>
    <div>
        <p>Follow us</p>
        <p>Learn more about our values, causes and jewelry by following us on social media.</p>
        <div>
            <a href="https://www.instagram.com/" target="_blank"><img src="{{url('assets/img/Instagram.svg')}}" alt=""></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="{{url('assets/img/Facebook.svg')}}" alt=""></a>
            <a href="https://www.twitter.com/" target="_blank"><img src="{{url('assets/img/Twitter.svg')}}" alt=""></a>
            <a href="https://www.pinterest.com/" target="_blank"><img src="{{url('assets/img/Pinterest.svg')}}" alt=""></a>
        </div>
    </div>
</section>

@endsection
