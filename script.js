// dom elements
const $categories = $('.categories')
const $CardsContainer = $('.cards-container')
let myCategories = []
var request = new XMLHttpRequest();
let meals = [];





function displayDataMealsCategories(data){
 data && data.meals.map((categ)=>{
  $categories.append(`
  <div class="categorie">
  <svg width="52" height="52" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_304_14569)">
          <path d="M58.2413 42.421H55.5378C56.0779 41.4894 56.4121 40.4238 56.473 39.2862C57.0104 39.2464 57.6215 39.0615 58.2986 38.6426C59.1147 38.1381 59.665 37.3435 59.8893 36.3446C60.4043 34.0517 59.0232 30.7315 57.7799 28.3585H58.2413C59.2123 28.3585 59.9992 27.5716 59.9992 26.6011C59.9992 14.0007 49.6958 3.75 37.0313 3.75H22.9688C10.3043 3.75 0.000937866 14.0007 0.000937866 26.6011C0.000937866 27.5716 0.787834 28.3585 1.75875 28.3585H2.22018C0.976891 30.7315 -0.404641 34.0517 0.110801 36.3446C0.335106 37.3435 0.885338 38.1381 1.70153 38.6426C2.37856 39.0615 2.98968 39.2459 3.52709 39.2858C3.58798 40.4233 3.92214 41.489 4.46231 42.421H1.75875C0.787834 42.421 0.000937866 43.2079 0.000937866 44.1788C0.000937866 50.9633 5.52066 56.483 12.3052 56.483H47.6949C54.4794 56.483 59.9992 50.9633 59.9992 44.1788C59.9992 43.2079 59.2123 42.421 58.2413 42.421ZM22.9688 7.26563H37.0313C47.1616 7.26563 55.508 15.0018 56.4039 24.8433H3.59622C4.49206 15.0018 12.8385 7.26563 22.9688 7.26563ZM4.13546 34.9741C3.98806 35.1998 3.78573 35.5106 3.63192 35.7006C3.61178 35.6896 3.58981 35.6767 3.56646 35.6626C3.44149 35.4085 3.39251 34.157 4.6596 31.3893C5.21075 30.185 5.83651 29.0717 6.25857 28.3585H53.742C54.1595 29.0634 54.7761 30.1602 55.3258 31.3573C56.6076 34.146 56.5595 35.4071 56.4336 35.6626C56.4103 35.6767 56.3883 35.6896 56.3682 35.7006C56.2144 35.5106 56.0116 35.1998 55.8646 34.9741C55.1084 33.8146 53.8427 31.8741 51.2105 31.8741C48.7244 31.8741 47.4111 33.1879 46.4521 34.1469C45.5901 35.0089 45.1676 35.3897 44.1793 35.3897C43.1772 35.3897 42.7089 34.9796 41.8278 34.1268C40.8454 33.176 39.5 31.8741 37.0313 31.8741C34.5452 31.8741 33.2319 33.1879 32.2728 34.1469C31.4109 35.0089 30.9884 35.3897 30 35.3897C29.0117 35.3897 28.5892 35.0089 27.7272 34.1469C26.7682 33.1879 25.4549 31.8741 22.9688 31.8741C20.5001 31.8741 19.1547 33.176 18.1723 34.1268C17.2911 34.9796 16.8228 35.3897 15.8208 35.3897C14.8325 35.3897 14.41 35.0089 13.548 34.1469C12.589 33.1879 11.2757 31.8741 8.78955 31.8741C6.15741 31.8746 4.89169 33.815 4.13546 34.9741ZM52.9684 38.9054C52.9684 40.844 51.3909 42.421 49.4527 42.421H10.5474C8.60919 42.421 7.03174 40.844 7.03174 38.9054C7.03174 37.3046 8.09787 35.9294 9.61032 35.5156C10.0997 35.6905 10.4814 36.0521 11.0623 36.6326C12.0214 37.5916 13.3347 38.9054 15.8208 38.9054C18.29 38.9054 19.6349 37.6035 20.6173 36.6527C21.4985 35.7999 21.9667 35.3897 22.9688 35.3897C23.9571 35.3897 24.3796 35.771 25.2416 36.6326C26.2006 37.5916 27.5144 38.9054 30 38.9054C32.4857 38.9054 33.7995 37.5916 34.7585 36.6326C35.6205 35.771 36.043 35.3897 37.0313 35.3897C38.0333 35.3897 38.5012 35.7999 39.3828 36.6527C40.3652 37.6035 41.7101 38.9054 44.1793 38.9054C46.6654 38.9054 47.9787 37.5916 48.9377 36.6326C49.5186 36.0521 49.9004 35.6905 50.3898 35.5156C51.9022 35.9294 52.9684 37.3046 52.9684 38.9054ZM12.3052 52.9674C8.06079 52.9674 4.50946 49.943 3.6928 45.9366H22.3829L31.7579 52.9674H12.3052ZM28.2422 45.9366H45.9019L37.0354 52.5312L28.2422 45.9366ZM47.6949 52.9674H42.3395L51.7924 45.9128H56.3073C55.4906 49.9196 51.9393 52.9674 47.6949 52.9674Z"></path>
          <path d="M24.7261 12.5391C24.7261 13.5095 23.9392 14.2969 22.9683 14.2969C21.9978 14.2969 21.2109 13.5095 21.2109 12.5391C21.2109 11.5681 21.9978 10.7812 22.9683 10.7812C23.9392 10.7812 24.7261 11.5681 24.7261 12.5391Z"></path>
          <path d="M42.4219 16.0542C42.4219 17.0251 41.635 17.812 40.6641 17.812C39.6936 17.812 38.9062 17.0251 38.9062 16.0542C38.9062 15.0838 39.6936 14.2969 40.6641 14.2969C41.635 14.2969 42.4219 15.0838 42.4219 16.0542Z"></path>
          <path d="M17.5781 16.0542C17.5781 17.0251 16.7912 17.812 15.8203 17.812C14.8494 17.812 14.0625 17.0251 14.0625 16.0542C14.0625 15.0838 14.8494 14.2969 15.8203 14.2969C16.7912 14.2969 17.5781 15.0838 17.5781 16.0542Z"></path>
          <path d="M35.2734 12.5391C35.2734 13.5095 34.4861 14.2969 33.5156 14.2969C32.5447 14.2969 31.7578 13.5095 31.7578 12.5391C31.7578 11.5681 32.5447 10.7812 33.5156 10.7812C34.4861 10.7812 35.2734 11.5681 35.2734 12.5391Z"></path>
          <path d="M31.7578 19.5703C31.7578 20.5412 30.9709 21.3281 30 21.3281C29.0291 21.3281 28.2422 20.5412 28.2422 19.5703C28.2422 18.5999 29.0291 17.8125 30 17.8125C30.9709 17.8125 31.7578 18.5999 31.7578 19.5703Z"></path>
      </g>
  </svg>      
  <div class="categ-details">
      <h3>${categ.strCategory}</h3>
      <h4>25 items</h4>
  </div>
</div>
  
  `)
 })

}

// display 

   



function getAllMeals(){

  // get the meals categories
  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      // Data has been successfully fetched
      console.log(data.meals)
     
         meals = data && data.meals.slice(0,9)
         displayMeals()
       
    },
    error: function(error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  });

}

function displayMeals(){
  meals.map((meal)=>{


    $CardsContainer.append(`
    <div class="card-meal">
    <div class="img-thumb">
        <img src="./assets/img/meals/1.png"  alt="">
    </div>
    <div class="about-meal">
        <div class="meal-title">
            <h3>Strawberry Waffle</h3>
        </div>
        <div class="meal-info">
            <div class="info">
            <div class="read-time">
                <div class="read-time-img-counter">
                    <span class="material-symbols-outlined">
                        nest_clock_farsight_analog
                    </span>
                    <span>20</span>
                </div>
                <h5 class="info-title">Minutes</h5>
            </div>
            </div>
            <div class="info">
                <div class="ingredients">
                    <div class="ingredients-number">
                        <span class="material-symbols-outlined">
                            import_contacts
                            </span>                                    <span>20</span>
                    </div>
                    <h5 class="info-title">Ingredients</h5>
                </div>
            </div>
  
            <div class="info">
                <div class="serving">
                    <div class="serving-number">
                        <span class="material-symbols-outlined">
                            person
                        </span>                                    
                        <span>4-6</span>
                    </div>
                    <h5 class="info-title">Serving</h5>
                </div>
            </div>
        </div>
        <div class="meal-description">
            <p>${meal.strDescription}
            </p>
        </div>
        <div class="btn-view-meal">
            <button >View Meal</button>
        </div>
        
    </div>
  
  </div>
    
    `)
  
  })

}
   







$(document).ready(function() {

  getAllMeals()



  // get the meals categories
  $.ajax({
    url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      // Data has been successfully fetched

      displayDataMealsCategories(data)

      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })

    },
    error: function(error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  });

  // show meals 



    // animate the categories section
  $(".categories").waypoint(function(direction){
    if(direction === "down"){
      $( ".categories").removeClass("animate__animated animate__fadeOutLeft")
     $( ".categories").addClass("animate__animated animate__fadeInLeft")

     
    }else{
      console.log("up "+direction)
      $( ".categories").removeClass("animate__animated animate__fadeInLeft")
      $( ".categories").addClass("animate__animated animate__fadeOutLeft") 
    }
  
  },{ offset:"80%"})


  




});




// function checkifReachTop(){
//   var windowBottom = $(this).scrollTop() + $(this).innerHeight();

//     var categoryTop = $('.categories').offset().top;
//     console.log("cateogry top " +categoryTop)
//     console.log("inner heigt "+window.innerHeight)
//     console.log("ouerheight "+window.outerHeight)
//     $('#test').text("innerheight "+$(this).innerHeight()+" outerHeight"+$(this).outerHeight())
//     if (windowBottom > categoryTop && !$('.categories').hasClass('animate-categories') &&(categoryTop + $(this).scrollTop()-$(this).innerHeight()) > 0 ) {
//         $('.categories').addClass('animate-categories');
//         $('#test').text('class added')

//     }else if((categoryTop + $(this).scrollTop()-$(this).innerHeight()) <= 0 && $('.categories').hasClass('animate-categories')){

//       $('.categories').removeClass('animate-categories');
//       $('#test').text('class removed')

//     }
// }

