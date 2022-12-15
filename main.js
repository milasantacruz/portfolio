document.addEventListener('DOMContentLoaded', function(){


      //skills
    const dataSoft = {
        labels: [
          'Adaptabilidad',
          'Constancia',
          'Curiosidad',
          'Dinamismo',
          'Planificacion',
          'Comunicacion'
        ],
        datasets: [{
          label: 'Soft Skills',
          data: [85, 82, 90, 84, 72, 78],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: '#D91E0D',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      };

      const config = {
        type: 'radar',
        data: dataSoft,
        options: {
          elements: {
            line: {
              borderWidth: 2
            }
          }
        },
      };

      var cans = new Chart(document.getElementById('soft'), config)
      cans.canvas.parentNode.style.width = '500px';
      cans.canvas.parentNode.style.height = '500px';
      console.log(cans.canvas.parentNode.style.width)

      const dataHard = {
        labels: [
          'HTML5',
          'Css',
          'Js',
          'React',
          'Angular',
          'DevOps',
        ],
        datasets: [{
          label: 'Hard Skills',
          data: [90, 87, 70, 68, 60, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: '#D91E0D',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      };

      const config2 = {
        type: 'radar',
        data: dataHard,
        options: {
          elements: {
            line: {
              borderWidth: 2
            }
          }
        },
      };

      var canh = new Chart(document.getElementById('hard'), config2)
      canh.canvas.parentNode.style.width = '500px'
      canh.canvas.parentNode.style.height = '500px'
      console.log(canh.canvas.parentNode.style.width)

   /* const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      const config = {
        type: 'doughnut',
        data: data,
      };

      new Chart(document.getElementById('soft1'), config)*/

   //MODALS
   
   var myInputs = document.getElementsByClassName('myInputs')
   inArr = [...myInputs]
   var currentMod=[];
   console.log(inArr)
   for(var i = 0; i < myInputs.length; i++){
    currentMod.push(new bootstrap.Modal(document.getElementById(`myModal_${i}`)))
   }

   inArr.forEach((elem, i)=>{
    console.log(elem)
    elem.addEventListener('click',function(e){
    
      currentMod[i].show();
    })
   })


   var lottie_desk = $(".lottie");
   var lottie_mob = $(".lottie_mobile")
   var duration;
  if(window.matchMedia("(min-width: 576px)").matches){
    lottie_mob.css({"display":"none"})
    duration = "1000";
  }else{
    console.log("less")
    lottie_desk.css({"display":"none"})
    duration = "-1";
  }


   //GSAP
    //PERSONA

    var persona = $(".persona");
    var laboral = $(".laboral");
    var edu = $(".edu");
    var skills = $(".skills")
    var proyes = $(".proyes");

    var tlPersona = gsap.timeline();
    tlPersona.from(".personaImg, .personaText",{opacity:0,y:"1200px"})
    var controller_1 = new $.ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement:persona,
      duration:"20%",
      triggerHook:0.0,

    }).on("enter", function(e){
      //tlPersona.reverse()
    }).on("leave", function(e){
    // tlPersona.play()
    }).addTo(controller_1)

    //LABORAL

    var laboralText = $(".laboralText");
    var laboralItem = $(".laboralItem")
    var tlLaboralIn = gsap.timeline();
    tlLaboralIn.from(laboralText, {opacity:0,x:-200})
              .from(laboralItem, {opacity:0,y:"200px", stagger:0.1})
    var controller_1 = new $.ScrollMagic.Controller();
    tlLaboralIn.pause()
    new ScrollMagic.Scene({
      triggerElement:laboral,
      duration:duration,
      triggerHook:0.5,

    }).on("enter", function(e){
      tlLaboralIn.play()
    }).on("leave", function(e){
      tlLaboralIn.reverse()
    }).addTo(controller_1)

    //EDU

    var eduText = $(".eduText");
    var eduItem = $(".eduItem")
    var tleduIn = gsap.timeline();
    tleduIn.from(eduText, {opacity:0,x:-200})
              .from(eduItem, {opacity:0,y:"200px", stagger:0.1})
    var controller_1 = new $.ScrollMagic.Controller();
    tleduIn.pause()
    new ScrollMagic.Scene({
      triggerElement:edu,
      duration:duration,
      triggerHook:0.5,

    }).on("enter", function(e){
      tleduIn.play()
    }).on("leave", function(e){
      tleduIn.reverse()
    }).addTo(controller_1)

    //Skills

    var skillsText = $(".skillsText");
    var skillsItem = $(".skillsItem")
    var tlskillsIn = gsap.timeline();
    tlskillsIn.from(skillsText, {opacity:0,x:-200})
              .from(skillsItem, {opacity:0,y:"200px", stagger:0.1})
    var controller_1 = new $.ScrollMagic.Controller();
    tlskillsIn.pause()
    new ScrollMagic.Scene({
      triggerElement:skills,
      duration:duration,
      triggerHook:0.5,

    }).on("enter", function(e){
      tlskillsIn.play()
    }).on("leave", function(e){
      tlskillsIn.reverse()
    }).addTo(controller_1)

    //Proyes

    var proyesText = $(".proyesText");
    var proyesItem = $(".proyesItem")
    var tlproyesIn = gsap.timeline();
    tlproyesIn.from(proyesText, {opacity:0,x:-200})
              .from(proyesItem, {opacity:0,y:"200px", stagger:0.1})
    var controller_1 = new $.ScrollMagic.Controller();
    tlproyesIn.pause()
    new ScrollMagic.Scene({
      triggerElement:proyes,
      duration:duration,
      triggerHook:0.5,

    }).on("enter", function(e){
      tlproyesIn.play()
    }).on("leave", function(e){
      tlproyesIn.reverse()
    }).addTo(controller_1)




})