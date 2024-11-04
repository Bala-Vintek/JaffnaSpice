(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

function showTab(tabId) {  
    // Hide all tab content  
    const tabs = document.querySelectorAll('.tab-content');  
    tabs.forEach(tab => tab.classList.remove('active'));  

    // Show the selected tab content  
    const activeTab = document.getElementById(tabId);  
    activeTab.classList.add('active');  
}

document.addEventListener("DOMContentLoaded", function() {  
    emailjs.init("YLGlYRoyHohU400Te"); // Your User ID  

    const form = document.getElementById("contact_form");  
    form.addEventListener("submit", function(event) {  
        event.preventDefault();  

        const formData = {  
            name: document.getElementById("name").value,  
            email: document.getElementById("email").value,  
            date: document.getElementById("date").value.split("T")[0],  
            time: document.getElementById("times").value,  
            people: document.getElementById("people").value,  
            message: document.getElementById("message").value  
        };  

        emailjs.send("service_2aem52r", "contact_form", formData)  
            .then(function(response) {  
                alert('Booking request sent successfully!'); 
                form.reset(); 
            }, function(error) {  
                console.error("Error sending email:", error);  
                alert('Error sending booking request.');  
            });  
    });  
});

document.addEventListener("DOMContentLoaded", function() {  
    emailjs.init("YLGlYRoyHohU400Te"); // Your User ID  

    const form = document.getElementById("contact");  
    form.addEventListener("submit", function(event) {  
        event.preventDefault();  

        const formData = {  
            name: document.getElementById("name").value,  
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value  
        };  

        emailjs.send("service_2aem52r", "template_kfxf684", formData)  
            .then(function(response) {  
                alert('Request sent successfully!'); 
                form.reset(); 
            }, function(error) {  
                console.error("Error sending email:", error);  
                alert('Error sending request.');  
            });  
    });  
});