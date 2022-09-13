// let inputs= [...document.querySelectorAll('input')]
// let iconEyes=[...document.querySelectorAll('.form__icon svg')];
// let radioInputs= [...document.querySelectorAll('.form__radio-input')];


// // show label
// let inputContainer;
// let formItem
// let label;

// let placeholder;
// inputs.forEach(input => {
//     input.addEventListener('focus',function(e){
//         if(!this.hasAttribute('data-noAnimation')){
//           inputContainer= this.parentNode;
//             formItem= inputContainer.parentNode
//             label=formItem.lastElementChild
//             label.classList.add('show-label')
//             placeholder=this.placeholder;
//             this.placeholder='';
//         }
       
//     })
//     input.addEventListener('blur',function(e){
      
      
//         if(this.value.length ===0){
//             if(label != null){
//                 label.classList.remove('show-label')
//                 // this.placeholder=placeholder
              
//             }
           
//         }
//         // this.placeholder=placeholder
       
//     })
// });

// // show and hide password
// // console.log(iconEye.querySelector('.eye-bare'))

// iconEyes.forEach(iconEye=>{
//     iconEye.addEventListener('click',function(e){
//         let iconContainer= this.parentNode;
//         let input= iconContainer.previousElementSibling;
       
//        let bare= this.querySelector('.eye-bare');
//        bare.classList.toggle('eye-close')
      

//        if(bare.classList.contains('eye-close')){
//         input.setAttribute('type','text')
//        }else{
//         input.setAttribute('type','password')
//        }

       
//     })
// })

// radioInputs.forEach(radioInput =>[
//     radioInput.addEventListener('change',function(e){
       
//     })
// ])

// // heandler icon edit
// inputs.forEach(input=>{
//     let formIcon;
//     input.addEventListener('mouseenter',function(e){
//         e.stopPropagation()
//     formIcon= this.nextElementSibling;

//     if(formIcon != null){
//         if(formIcon.classList.contains('form__icon--edit')){
//             formIcon.classList.add('visible')
//         }
//     }
//     })
//     input.addEventListener('mouseleave',function(e){
//         e.stopPropagation()
//     formIcon= this.nextElementSibling;
//         if(formIcon != null){
//             if(formIcon.classList.contains('form__icon--edit')){
//                 formIcon.classList.remove('visible')
//             }
//         }
//     })


   
// })

// let editIcons= document.querySelectorAll('.form__icon--edit');
// editIcons.forEach(editIcon=>{
//     editIcon.addEventListener('click',function(e){
//         e.stopPropagation()
//         let input= this.previousElementSibling
//         let end = input.value.length;
//         input.setSelectionRange(end, end);
//         input.focus()
      
//     })
// })

// // handler buttton Сохранить изменения after editing input
//  editIcons= document.querySelectorAll('.form__icon--edit');
//  let inputValues=[];
// editIcons.forEach((editIcon,index)=>{
//     let input= editIcon.previousElementSibling
//       inputValues.push(input.value);
//       input.addEventListener('input',function(e){
//         document.querySelectorAll(' .btn-save').forEach(btn=>{
//             btn.classList.add('show')
//         // if(window.screen.width>1200){
//         })
//         //     document.querySelector('.block-header .btn').classList.add('show')
           
//         // }else{
//         //     document.querySelector('.save-changing-btn').classList.add('show')
//         // }
//       })
   
// })


$(document).ready(function(){

    // show label
        let inputs= $('.form__input input');
        let placeholder;
        $(document).on('focus','.form__input input',function(e){
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
           if($(this).hasClass('form__icon--edit')){
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


    
    
})







