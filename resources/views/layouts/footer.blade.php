<footer>
    <ul class="menu">
        <li><a href={{ route('products') }}>PRODUCTS</a></li>
        <li><a href={{ route('about') }}>ABOUT US</a></li>
        {{-- <li><a href="personalize-en.html">PERSONALIZE</a></li> --}}
        <li><a href={{ route('contacts') }}>CONTACTS</a></li>
    </ul>
    <p>Contact us by email with your request and we will work with you privately to source what you are looking for!
        You can set up an appointment at our office or an interactive appointment through FaceTime. It would be our
        pleasure to help you find the jewelry of your dreams.</p>
    <label for="email">
        <input type="text" id="email-box" placeholder="Enter your email">
        <img src="{{ url('assets/img/email.png') }}" alt="submit" id="email-submit">
    </label>
    <p class="copyrights">&#169 2023 Fair Jewelry Store. All rights reserved.</p>
</footer>
