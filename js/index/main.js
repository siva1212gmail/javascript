function call(){

    const load=document.querySelector(".new")
    const load2=document.querySelector(".innernext")
  
  load.style.height='430px'
  load2.style.border='2px solid rgb(0, 0, 0)'
  
  load.style.border='2px solid rgb(255, 255, 255)'
  load2.style.height='430px'
  
  const user=document.getElementsByClassName("user2")[0]
 
  setTimeout(function(){
    user.style.opacity="1"
   
   user.src="images/sivaav.png"
   user.style.visibility="visible"

  },2000)
  
  }

  //-----------mobile

  function mobile(){

    const load=document.querySelector(".new")
    const load2=document.querySelector(".innernext")
  load.classList.add("active")
 
  load2.style.border='2px solid rgb(0, 0, 0)'
  load.style.setProperty('height', '240.7px', 'important');  

  load.style.border='2px solid rgb(360, 255, 255)'
 
  load2.style.setProperty('height', '230px', 'important');  

  load2.style.setProperty('border-left', '2px solid rgb(0, 0, 0)', 'important');  
  
  const user=document.getElementsByClassName("user2")[0]
 
  setTimeout(function(){
    user.style.opacity="1"
   
   user.src="images/sivaav.png"
   user.style.visibility="visible"

  },2000)
  
  }

    window.onload = function() {
     const hide = document.querySelector(".hide")
     const small = document.querySelector(".small")
      console.log("hide")
 
    const ismobile= window.matchMedia("(max-width: 600px)").matches

  if (ismobile){

  small.style.transform="translatey(-100%)"
  setTimeout(function(){

    mobile()
  },500)
 

  }
  else{

    hide.style.transform="translateX(-100%)"
    setTimeout(function(){

        call()
        
      },500)
  }


     
    };

