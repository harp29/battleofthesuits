import $ from 'jquery';
import gsap from 'greensock';

/*
    Objective: Place multiple h1 captions into 'intro'
    Variables needed: .intro, .intro__heading = DONE
    1. generate array of captions = DONE
    2. place all array indexes into 'intro__heading' - done
    3. all indexes will be set to opacity 0 and auto-alpha 0. - done
    4. dyanmically fade in one caption at a time and fade out:
        
*/

class CaptionEffect{
    constructor(){
        
        //variables
        let $intro         = $('.intro'),
            $introHeadings = $('.intro__headings');

        //declare introCaption - will be used to store values into h1(.intro__heading)

              
       this.masterTimeline($intro, $introHeadings);
    };

    generateArray(intro, introHeadings){
        
        //variables:
        let introCaption,
            captionsList =
            [
                "Battle of The Suits IV",
                "We're taking White-Collar Boxing to The Next Level",
                "Join us on April 18th, 2018"
            ],
            domH1s = [];

        for (let i = 0; i < captionsList.length; i++) {
            
            //introHeading: each loop - create a new h1 tag and give it a class 'intro__heading'
             //introHeading: add each value of captions index into introHeading
             introCaption = $('<h1></h1>').addClass('intro__caption').attr('id','caption'+(i+1));
            
             //  this.introHeading.after($('.cta'));
             introCaption.text(captionsList[i]);

             //captions: push each introCaption into the array
             domH1s.push(introCaption);

             //intro: place introCaptions into introHeadings
            introCaption.appendTo(introHeadings);

            //introHeadings: place before '.intro__cta' and into '.intro'
            introHeadings.prependTo(intro);

            // introCaption: set to opacity: 0 and autoAlpha: 0
            TweenLite.set(introCaption, {opacity: 0, autoAlpha: 0});
            
          }

          //return array so can be used for dynamic dom element traversal
            return domH1s;
       };  
       
       captionsTimeline(intro, introHeadings){
           let domH1s = this.generateArray(intro, introHeadings);
           let captions = [];
           for(let i=0;i<domH1s.length;i++){
                captions.push(domH1s[i]);
           }
           const tlCaptions = new TimelineLite();

           for(let i =0;i<captions.length;i++){
            tlCaptions
            .to(captions[i], 2, {opacity: 1, autoAlpha: 1});
            //check to see if we are on the last index:
            //i === captions.length-1 -> length = 3 -1 = 2. 
            //i works: 0, 1 ,2 so i(2) === captions.length-1
            if(i+1 === captions.length){
                tlCaptions.to(captions[i], 1, {opacity: 1, autoAlpha: 1})
            }else{
                tlCaptions.to(captions[i], 1, {opacity: 0, autoAlpha: 0});
            }
           };
           
           return tlCaptions;     

       }
        masterTimeline(intro, introHeadings){

        this.captionsTimeline(intro, introHeadings);

       };

};

export default CaptionEffect;