const hamburgerButton=document.querySelector('#header_hamburger');
const toggleSection=document.querySelector('#toggleSection');
const closeButton=document.querySelector('#header_close');
const mainLogo=document.querySelector('#mainLogo');

hamburgerButton.addEventListener('click',function(){
    toggleSection.style.display='block';
    toggleSection.classList.add('overlay');
    hamburgerButton.style.opacity='0';
    mainLogo.style.opacity='0';
})

closeButton.addEventListener('click',function(){
    toggleSection.classList.remove('overlay');
    toggleSection.style.display='none';
    hamburgerButton.style.opacity='1';
    mainLogo.style.opacity='1';
})

//slider

const speedySearchTag=document.getElementById('speedySearchTag');
const speedySearch=document.getElementById('speedySearch');
const bookMarkingTag=document.getElementById('bookMarkingTag');
const bookMarking=document.getElementById('bookMarking');
const easySharingTag=document.getElementById('easySharingTag');
const easySharing=document.getElementById('easySharing');

const subTopicHeading=document.getElementById('subTopicHeading');
const subTopicPara=document.getElementById('subTopicPara');
const feature_image=document.querySelector('.feature_image');


speedySearchTag.addEventListener('click',function(){
    bookMarking.classList.remove('slide_bar');
    easySharing.classList.remove('slide_bar');
    speedySearch.classList.add('slide_bar');
    
    speedySearchTag.style.fontWeight='600';
    easySharingTag.style.fontWeight='100';
    bookMarkingTag.style.fontWeight='400';
    
    subTopicHeading.innerText='Intelligent search';
    subTopicPara.innerHTML=`Our powerful search feature will help you find saved sites in no time at all. 
    No need to trawl through all of your bookmarks.`
    feature_image.style.backgroundImage="url('../images/illustration-features-tab-2.svg')";

})

bookMarkingTag.addEventListener('click',function(){
    bookMarking.classList.add('slide_bar');
    easySharing.classList.remove('slide_bar');
    speedySearch.classList.remove('slide_bar');

    bookMarkingTag.style.fontWeight='600';
    speedySearchTag.style.fontWeight='100';
    easySharingTag.style.fontWeight='100';

    subTopicHeading.innerText='Bookmark in one click';
    subTopicPara.innerHTML=`Organize your bookmarks however you like. Our simple drag-and-drop interface 
    gives you complete control over how you manage your favourite sites.`
    feature_image.style.backgroundImage="url('../images/illustration-features-tab-1.svg')";

})

easySharingTag.addEventListener('click',function(){
    bookMarking.classList.remove('slide_bar');
    easySharing.classList.add('slide_bar');
    speedySearch.classList.remove('slide_bar');

    easySharingTag.style.fontWeight='600';
    speedySearchTag.style.fontWeight='100';
    bookMarkingTag.style.fontWeight='100';

    subTopicHeading.innerText='Share your bookmarks';
    subTopicPara.innerHTML=`Easily share your bookmarks and collections with others. Create a shareable 
    link that you can send at the click of a button.`
    feature_image.style.backgroundImage="url('../images/illustration-features-tab-3.svg')";

})