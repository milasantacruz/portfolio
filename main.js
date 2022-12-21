document.addEventListener('DOMContentLoaded', function(){
  console.log(document.location)
  //GET PROYECTOS
  var apiProyectos = 'http://localhost:5000/proyectos'
  var getProyectos = async () =>{
   var laborContainer = $("#laboral");
  try{
    var response = await fetch(apiProyectos,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      },
      //body:JSON.stringify(newProyecto)
    });
    if(response.ok){
      var jsonRes = await response.json();
      console.log(jsonRes)
      for(var i of jsonRes){
        
        console.log(i.id)
        laborContainer.append(` <div class="laboralItem row trabajo m-md-4 m-0 p-md-4 pt-4 pb-4">
        <div class="col-md-3 col-12 pb-4">
            <img id="imagen-${i.id}" src=${i.imagen} alt="" class="img-thumbnail ">
        </div>
        <div class="col-12 col-md-9 p-0">
            <div class="container-fluid row empresa p-0">
                <div class="p-0 col-6 d-flex justify-content-center strong">Empresa:</div>
                <div id="empresa-${i.id}" class="p-0 col-6">${i.empresa}</div>
            </div>
            <div class="container-fluid row titulo p-0">
                <div class="p-0 col-6 d-flex justify-content-center strong">Puesto:</div>
                <div id="puesto-${i.id}" class="p-0 col-6">${i.puesto}</div>
            </div>
            <div class="container-fluid row titulo p-0">
                <div class="p-0 col-6 d-flex justify-content-center strong">Periodo:</div>
                <div id="periodo-${i.id}" class="p-0 col-6">${i.periodo}</div>
            </div>
            <div class="container-fluid row titulo p-0">
                <div class="p-0 col-6 d-flex justify-content-center strong">Descripcion:</div>
                <div id="descripcion-${i.id}" class="p-0 col-6">${i.descripcion}</div>
            </div>
        </div>
        <div class="editarTrabajo my-pe p-4" id="editarTrabajo-${i.id}">
              <i class="bi bi-pencil-square fa-4x"></i>
        </div>

        <form  id="formProyecto-${i.id}" class=" formProyecto formProyecto-${i.id} border border-danger rounded bg-color-rose p-2 m-2">
        <div class="form-group row">
            <div class="col-sm-10">
                 <input type="text" id="empresaI-${i.id}"  placeholder="Empresa" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
                <input type="text" id="puestoI-${i.id}"  placeholder="Puesto" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
                <input type="text" id="periodoI-${i.id}"  placeholder="periodo" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
                <input type="text" id="descripcionI-${i.id}"  placeholder="descripcion" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">
                <input type="file" id="imagenI-${i.id}"  placeholder="Search" class="form-control">
            </div>
        </div>
        <img src="" id="imgPrev-${i.id}" class="pt-4 img-thumbnail imgPrev" />
        <div class="container" >
        <button id="cancelarProyecto-${i.id}" class="btn bg-color-red m-2">cancelar</button>
        <button id="confirmarProyecto-${i.id}" class="btn bg-color-red m-2">confirmar</button></div>

    </form>
    </div>`)

         
      }
    }
  }
  catch(err){
    console.log(err)
  }
  finally{
    laboral()
    for(var i of jsonRes){
      editarProyecto(i.id) 
      console.log(i.id)
    }
  }
 }

 getProyectos()

 //GET EDUCACION

 var apiEducacion = 'http://localhost:5000/educacion'
 var getEducacion = async () =>{
  var educContainer = $("#educacion");
 try{
   var response = await fetch(apiEducacion,{
     method:'GET',
     headers:{
       'Content-Type': 'application/json'
     },
     //body:JSON.stringify(newProyecto)
   });
   if(response.ok){
     var jsonRes = await response.json();
     console.log(jsonRes)
     for(var i of jsonRes){
       
       console.log(i.id)
       educContainer.append(` <div class="eduItem  container-md educacion mt-4 pt-4 pb-4">
       <div id="editarEdu-${i.id}" class="editarEdu row my-pe">
           <i class="col-2 bi bi-pencil-square fa-4x"></i>
       </div>
       <div class="row">
           <div class="col-3">
               <img id="eduImagen-${i.id}" src=${i.imagen} alt="" class="img-thumbnail ">
           </div>
           <div class="col-9 ">
               <div class="container-fluid row instituto">
                   <div class="col-6 d-flex justify-content-center strong">Instituto:</div>
                   <div id="instituto-${i.id}" class="col-6">${i.instituto}</div>
               </div>
               <div class="container-fluid row titulo">
                   <div class="col-6 d-flex justify-content-center strong">Titulo:</div>
                   <div id="eduTitulo-${i.id}" class="col-6">${i.titulo}r</div>
               </div>
               <div class="container-fluid row titulo">
                   <div class="col-6 d-flex justify-content-center strong">Periodo:</div>
                   <div id="eduPeriodo-${i.id}" class="col-6">${i.periodo}</div>
               </div>
               <div class="container-fluid row titulo">
                   <div class="col-6 d-flex justify-content-center strong">Descripcion:</div>
                   <div id="eduDescripcion-${i.id}" class="col-6">${i.descripcion}</div>
               </div>
           </div>
       </div>

       <form  id="formEducacion" class=" formEducacion formEducacion-${i.id} border border-danger rounded bg-color-rose p-2 m-2">
           <div class="form-group row">
               <div class="col-sm-10">
                    <input type="text" id="institutoI-${i.id}"  placeholder="Institulo" class="form-control">
               </div>
           </div>
           <div class="form-group row">
               <div class="col-sm-10">
                   <input type="text" id="tituloI-${i.id}"  placeholder="Titulo" class="form-control">
               </div>
           </div>
           <div class="form-group row">
               <div class="col-sm-10">
                   <input type="text" id="periodoEduI-${i.id}"  placeholder="Periodo" class="form-control">
               </div>
           </div>
           <div class="form-group row">
               <div class="col-sm-10">
                   <input type="text" id="desEduI-${i.id}"  placeholder="Descripcion" class="form-control">
               </div>
           </div>
           <div class="form-group row">
               <div class="col-sm-10">
                   <input type="file" id="imagenEduI-${i.id}"  placeholder="Search" class="form-control">
               </div>
           </div>
           <img src="" id="eduImgPrev-${i.id}" class="pt-4 img-thumbnail imgPrev" />
           <div class="container" >
           <button id="cancelarNewEdu-${i.id}" class="btn bg-color-red m-2">cancelar</button>
           <button id="confirmarNewEdu-${i.id}" class="btn bg-color-red m-2">confirmar</button></div>
   
       </form>
       
   </div>`)

        
     }
   }
 }
 catch(err){
   console.log(err)
 }
 finally{
  educ()
    console.log(jsonRes)
    for(var i of jsonRes){
      editarEduc(i.id) 
      console.log(i.id)
    }
 }
}

getEducacion();
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
    duration = "-1";
  }else{
    console.log("less")
    lottie_desk.css({"display":"none"})
    duration = "-1";
  }


   //GSAP
    //PERSONA

    var persona = $(".persona");
   
    var edu = $(".educacion");
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
    
    function laboral(){
      var laboral = $(".laboral");
      var laboralText = $(".laboralText");
      var laboralItem = $(".laboralItem")
      if(laboralText&&laboralItem){
        console.log("labExist")
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
      }
    
    }
    //EDU

    function educ(){
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
      }).addTo(controller_1).addIndicators()
    }

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


    // EDIT MODE
    //PERSONA
    var editPersona = $("#editarPersona")
    var formPersona = $("#formPersona")
    var personaNombre = $("#nombre")
    var personaTitulo = $("#titulo")
    var confirmPersona = $("#confirmarPersona")
    editPersona.on("click",function(){
      formPersona.css('display', "block")
      var currN ="";
      var currT = "";
      $("#nombreInput").on("input", function(){
        currN = $(this).val();
      })
      $("#tituloInput").on("input", function(){
        currT = $(this).val();
      })
      confirmPersona.on("click",function(e){
        e.preventDefault();
        personaNombre[0].innerText = currN
        personaTitulo[0].innerText = currT
        console.log(personaNombre[0].innerText)
        console.log(personaTitulo[0].innerText)
        formPersona.css('display', "none")
        
      })
    })      
      
      //EDITAR PROYECTO
      function editarProyecto(f){
        console.log("#editarTrabajo-"+f)
        var editProyecto = $("#editarTrabajo-"+f)
        var formProyecto= $(".formProyecto-"+f)
        var proyectoEmpresa = $("#empresa-"+f)
        var proyectoPuesto = $("#puesto-"+f)
        var proyectoPeriodo = $("#periodo-"+f)
        var proyectoDescripcion = $("#descripcion-"+f)
        var proyectoImagen = $("#imagen-"+f)
        var confirmProyecto = $("#confirmarProyecto-"+f)
        var cancelarProyecto = $("#cancelarProyecto-"+f)
        var imgPrev = $("#imgPrev-"+f)

       
        var currEm ="";
        var currPu = "";
        var currPe ="";
        var currDe = "";
        var currIm = "";

        editProyecto.on("click",function(){
          console.log("click o n "+f)
          formProyecto.css('display', "block")
    
          
          $("#empresaI-"+f).on("input", function(){
            currEm = $(this).val();
          })
          $("#puestoI-"+f).on("input", function(){
            currPu = $(this).val();
          })
          $("#periodoI-"+f).on("input", function(){
            currPe = $(this).val();
          })
          $("#descripcionI-"+f).on("input", function(){
            currDe = $(this).val();
          })

          var reader = new FileReader();
          $("#imagenI-"+f).on("change", function(){
            currIm = $(this)[0].files[0];
            console.log($(this))
            reader.addEventListener("load", function(){
              //convert to image to base 64 string
              imgPrev[0].src= reader.result;
            },false)
            
            if(currIm){
              reader.readAsDataURL(currIm)
            }

          })
          
        })    

        var editedPro ={};
   
        confirmProyecto.on("click",function(e){
          e.preventDefault();
          proyectoEmpresa[0].innerText = currEm
          proyectoPuesto[0].innerText = currPu
          proyectoPeriodo[0].innerText = currPe
          proyectoDescripcion[0].innerText = currDe
          proyectoImagen[0].src = imgPrev[0].src
          formProyecto.css('display', "none")
          formProyecto[0].reset();

          
        editedPro = {
          "id": f,
          "empresa": currEm,
          "puesto": currPu,
          "periodo": currPe,
          "descripcion": currDe,
          "imagen": imgPrev[0].src
        }
             

          putData();
          
        })

        cancelarProyecto.on("click", function(e){
          e.preventDefault();
          console.log("cancel")
          formProyecto[0].reset();
          formProyecto.css('display', "none")
        })

        var putData = async () =>{
          try{
            var response = await fetch(apiProyectos+"/"+f,{
              method:'PUT',
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(editedPro)
            });
            if(response.ok){
              var jsonRes = await response.json();
            }
          }
          catch(err){
            console.log(err)
          }
         }

      }

      //EDITAR EDUCACION

      function editarEduc(g){
        console.log(g)
        var editEdu = $("#editarEdu-"+g)
        var formEdu= $(".formEducacion-"+g)
        var EduInstituto = $("#instituto-"+g)
        var EduTitulo = $("#eduTitulo-"+g)
        var EduPeriodo = $("#eduPeriodo-"+g)
        var EduDescripcion = $("#eduDescripcion-"+g)
        var EduImagen = $("#eduImagen-"+g)
        var confirmEdu = $("#confirmarNewEdu-"+g)
        var cancelarEdu = $("#cancelarNewEdu-"+g)
        var eduImgPrev = $("#eduImgPrev-"+g)
        console.log(eduImgPrev)
        var currIns ="";
        var currTit = "";
        var currPe ="";
        var currDe = "";
        var currIm = "";

        editEdu.on("click",function(e){
          e.preventDefault();
          console.log("editeduu")
          formEdu.css('display', "block")
              
          $("#institutoI-"+g).on("input", function(){
            currIns = $(this).val();
          })
          $("#tituloI-"+g).on("input", function(){
            currTit = $(this).val();
          })
          $("#periodoI-"+g).on("input", function(){
            currPe = $(this).val();
          })
          $("#descripcionI-"+g).on("input", function(){
            currDe = $(this).val();
          })

          var reader = new FileReader();
          $("#imagenEduI-"+g).on("change", function(){
            currIm = $(this)[0].files[0];
            console.log($(this))
            reader.addEventListener("load", function(){
              //convert to image to base 64 string
              eduImgPrev[0].src= reader.result;
            },false)
            
            if(currIm){
              reader.readAsDataURL(currIm)
            }

          })
          
        })   

        var editedEdu ={};
   
        confirmEdu.on("click",function(e){
          e.preventDefault();
          EduInstituto[0].innerText = currIns
          EduTitulo[0].innerText = currTit
          EduPeriodo[0].innerText = currPe
          EduDescripcion[0].innerText = currDe
          EduImagen[0].src = eduImgPrev[0].src
          formEdu.css('display', "none")
          formEdu[0].reset();

          
        editedEdu = {
          "id": g,
          "instituto": currIns,
          "titulo": currTit,
          "periodo": currPe,
          "descripcion": currDe,
          "imagen": eduImgPrev[0].src
        }

        putData()

        })

        var putData = async () =>{
          try{
            var response = await fetch(apiEducacion+"/"+g,{
              method:'PUT',
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(editedEdu)
            });
            if(response.ok){
              var jsonRes = await response.json();
              console.log(jsonRes)
            }
          }
          catch(err){
            console.log(err)
          }
         }

         cancelarEdu.on("click", function(e){
          e.preventDefault();
          console.log("cancel")
          formEdu[0].reset();
          formEdu.css('display', "none")
        })



      }

      //NUEVA EDUCACION
      var addEducacion = $("#addEducacion")
      var newFormEdu= $(".addformEducacion")
      var newEduInstituto = $("#addinstitutoI")
      var newEduTitulo = $("#addtituloI")
      var newEduPeriodo = $("#addperiodoEduI")
      var newEduDescripcion = $("#adddesEduI")
      var newEduImagen = $("#addimagenEduI")
      var newConfirmEdu = $("#confirmarAddEdu")
      var newCancelarEdu = $("#cancelarAddEdu")
      var eduNewImgPrev = $("#eduNewImgPrev")
      var newEduc = {}
      console.log(eduNewImgPrev)
      var newInsEdu ="";
      var newTitEdu = "";
      var newPeEdu ="";
      var newDeEdu = "";
      var newImEdu = "";

      addEducacion.on("click",function(e){
        e.preventDefault();
        console.log("eddd")
        newFormEdu.css("display", "block")
        
        newEduInstituto.on("input", function(){
          newInsEdu = $(this).val();
        })
        newEduTitulo.on("input", function(){
          newTitEdu = $(this).val();
        })
        newEduPeriodo.on("input", function(){
          newPeEdu = $(this).val();
        })
        newEduDescripcion.on("input", function(){
          newDeEdu = $(this).val();
        })

        var reader = new FileReader();
        newEduImagen.on("change", function(){
          newImEdu = $(this)[0].files[0];
          console.log($(this))
          reader.addEventListener("load", function(){
            //convert to image to base 64 string
            eduNewImgPrev[0].src= reader.result;
          },false)
          
          if(newImEdu){
            reader.readAsDataURL(newImEdu)
          }

        })

        newConfirmEdu.on("click",function(e){
          e.preventDefault();
          console.log("newwwaded")
  
          newEduc={
            "instituto": newInsEdu,
            "titulo": newTitEdu,
            "periodo": newPeEdu,
            "descripcion": newDeEdu,
            "imagen": eduNewImgPrev[0].src
          }
  
          postData();
          newFormEdu[0].reset();
          newFormEdu.css("display", "none")
  
        })

        var postData = async () =>{
          try{
            var response = await fetch(apiEducacion,{
              method:'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(newEduc)
            });
            if(response.ok){
              var jsonRes = await response.json();
              console.log(jsonRes)
            }
          }
          catch(err){
            console.log(err)
          }
         }

         newCancelarEdu.on("click", function(e){
          e.preventDefault();
          console.log("cancel")
          newFormEdu[0].reset();
          newFormEdu.css('display', "none")
        })

      })

      //NUEVO PROYECTO
      var addProyecto = $("#addProyecto");
      var formNewPro = $("#formNewPro");
      var confirmarNew =$("#confirmarNewProyecto")
      var cancelarNew =$("#cancelarNewProyecto")
      var newImgPrev = $("#newImgPrev")
      var newProyecto = {}
      var newEm ="";
      var newPu = "";
      var newPe ="";
      var newDe = "";
      var newIm = "";
      
      addProyecto.on("click",function(e){
        e.preventDefault();
        formNewPro.css("display", "block")
        
        $("#empresaNew").on("input", function(){
          newEm = $(this).val();
        })
        $("#puestoNew").on("input", function(){
          newPu = $(this).val();
        })
        $("#periodoNew").on("input", function(){
          newPe = $(this).val();
        })
        $("#descripcionNew").on("input", function(){
          newDe = $(this).val();
        })

        var reader = new FileReader();
        $("#imagenNew").on("change", function(){
          newIm = $(this)[0].files[0];
          console.log($(this))
          reader.addEventListener("load", function(){
            //convert to image to base 64 string
            newImgPrev[0].src= reader.result;
          },false)
          
          if(newIm){
            reader.readAsDataURL(newIm)
          }

        })

      })

      confirmarNew.on("click",function(e){
        e.preventDefault();
        console.log("newwwaded")

        newProyecto={
          "empresa": newEm,
          "puesto": newPu,
          "periodo": newPe,
          "descripcion": newDe,
          "imagen": newImgPrev[0].src
        }

        postData();
        formNewPro[0].reset();
        formNewPro.css("display", "none")

      })

      cancelarNew.on("click", function(e){
        e.preventDefault()
        formNewPro[0].reset();
        formNewPro.css("display", "none")
      })

     
      var postData = async () =>{
        try{
          var response = await fetch(apiProyectos,{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(newProyecto)
          });
          if(response.ok){
            var jsonRes = await response.json();
           // console.log(jsonRes)
          
          }
        }
        catch(err){
          console.log(err)
        }
       }
      

  // NEW EDUCACION


})

