import $ from 'jquery';
import gsap from 'greensock';
import CaptionEffect from './CaptionEffect';

class Animations{
    constructor(){

        let captionEffect = new CaptionEffect();
        const $ctaLoad = $('#load-intro-cta');
        TweenLite.to($ctaLoad, 1.5, {opacity: 1, autoAlpha: 1, delay: 6, ease: Power4.easeOut});

        this.events($ctaLoad);


    }

    events(cta){
        //cta load click event
        cta.click(function(e){

            e.preventDefault();
            let tl = new TimelineLite();
            tl
                .to($('.loading-section'), 1.5, {opacity: 0, autoAlpha: 0, ease:Power4.easeOut})
                .to($('.loading-section'),1, {display:'none'})
        });

        //hamburger click event
        $('.hamburger-menu').on('click', function() {
            $('.bar').toggleClass('animate');
            if($('.bar').hasClass('animate')){
                TweenLite.to($('.menu'), 1.5, {opacity: 1, autoAlpha: 1, ease: Power4.easeOut});
                $('.cta').addClass('cta--red-bg');
            }else{
                TweenLite.to($('.menu'), 1.5, {opacity: 0, autoAlpha: 0, ease: Power4.easeOut});
                $('.cta').removeClass('cta--red-bg');
            }
        })
    }
};

export default Animations;


