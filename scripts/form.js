
$(document).ready(function(){

    // show label
        let inputs= [...$('.form__input input')];
          for(let input of inputs){
            if(input.value.length>0){
              $(input).parents('.form__item').find('.form__label').addClass('show-label');
            }
         }
        let placeholder;
        $(document).on('focus','.form__input input,.form__textarea textarea',function(e){
          
            let label=$(this).parents('.form__item').find('.form__label');
            let attrData= $(this).attr('data-noanimation')
            label.addClass('show-label');
            labelText= label.text();
          
           if (typeof attrData !== typeof undefined && attrData !== false) {
            return true
          }else{
            placeholder=  $(this).attr('placeholder');
            $(this).attr('placeholder','');
          }
 
        })

        // prevent label
        $(document).on('click','.form__label',function(e){
          e.stopPropagation()
          
        })
    
        $(document).on('blur','.form__input input',function(e){
            if($(this).val().length === 0){
                $(this).parents('.form__item').find('.form__label').removeClass('show-label');
            }
    
           
        })
    
        // show and hide password
        $(document).on('click','.form__icon svg',function(e){
            e.stopPropagation()
            $(this).find('.eye-bare').toggleClass('eye-close')
            let input= $(this).parents('.form__item ').find('.form__input input');
           if($(this).hasClass('form__icon--edit') || $(this).hasClass('no-hide')){
         
            return true
            
           }else{
         if(  $(this).find('.eye-bare').hasClass('eye-close')){
                $(input).attr('type','text')
            }else{
                $(input).attr('type','password')
            }
           }
    
           
        })
    
    
        // heandler icon edit
        // add edit icon
        $(document).on('mouseenter','.form__input input',function(e){
            e.stopPropagation();
            
            let formIcon= $(this).parents('.form__item').find('.form__icon');
          if($(formIcon).hasClass('form__icon--edit')){
            $(formIcon).addClass('visible')
          }
           
        })
    
        // remove edit icon 
        $(document).on('mouseleave','.form__input input',function(e){
            e.stopPropagation();
            
            let formIcon= $(this).parents('.form__item').find('.form__icon');
          if($(formIcon).hasClass('form__icon--edit')){
            $(formIcon).removeClass('visible')
          }
           
        })
    
    
    
        let editIcons= document.querySelectorAll('.form__icon--edit');
             editIcons.forEach(editIcon=>{
            editIcon.addEventListener('click',function(e){
                e.stopPropagation()
                let input= this.previousElementSibling
                let end = input.value.length;
                input.setSelectionRange(end, end);
                input.focus()
            
            })
        })
    
        // handler buttton Сохранить изменения after editing input
    
        $(document).on('input','.form__input input',function(e){
            $('.btn-save').each(function(i,el){
                $(el).addClass('show')
            })
        })

        //handler Режим работы точки страници redaction-point2.html

        // 1- handler пол Рабочий день
        $(document).on('click','.fleche-top',function(e){
          let input = $(this).parents('.form__input').find('input');
          if(input.attr('data-options')!== undefined){
           if(input.val().length !==0){
              let options= $(input).attr('data-options').split(',');
              let limit= options.length;
              let activeValue= input.val();
              let indexActiveValue= options.indexOf(activeValue)
              if((indexActiveValue + 2)<= limit){
                input.val(options[indexActiveValue + 1])
              }
           }
          }
        })
        $(document).on('click','.fleche-bottom',function(e){
          let input = $(this).parents('.form__input').find('input');
          if(input.attr('data-options')!== undefined){
            let options= $(input).attr('data-options').split(',');
            let limit= options.length;
            let activeValue= input.val();
            let indexActiveValue= options.indexOf(activeValue)
          
             if((indexActiveValue - 1) >=0){
              input.val(options[indexActiveValue - 1])
             }
          }
 
        })

        // 2- handler пол time
        $(document).on('click','.form__icon--nav svg',function(e){
         $(this).parents('.form__item').find('.options-input').fadeToggle(300)
          
        })

        // set time
        $(document).on('click','.options-input__link',function(e){
            let label =$(this).parents('.form__item').find('.form__label')
            let input = $(this).parents('.form__item').find('.form__input input')
            let newValue= $(this).text()
            $(this).parent().find('a').removeClass('options-input__link--active')
            $(this).addClass('options-input__link--active')
            $(this).parents('.form__item').find('.options-input').fadeOut(300)
          
            //set new time
            input.val(newValue)
            if($(input).val().length !==0 && !$(label).hasClass('show-label')){
              $(label).addClass('show-label');
            }
            

         })

         $(window).click(function(e){

       
           $('.options-input').each(function(index,el){
           if($(el).css('display') == 'block'){
               let all = [...$(this).parents('.form__item--select').find('*')];
              if(!all.includes(e.target)){
                $(el).fadeOut(300)
              }
           }
           })
         })

         


        
     

        
    
    
})







