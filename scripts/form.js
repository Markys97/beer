let inputs= [...document.querySelectorAll('input')]
let iconEyes=[...document.querySelectorAll('.form__icon svg')];
let radioInputs= [...document.querySelectorAll('.form__radio-input')];


// show label
let inputContainer;
let formItem
let label;

let placeholder;
inputs.forEach(input => {
    input.addEventListener('focus',function(e){
        if(!this.hasAttribute('data-noAnimation')){
          inputContainer= this.parentNode;
            formItem= inputContainer.parentNode
            label=formItem.lastElementChild
            label.classList.add('show-label')
            placeholder=this.placeholder;
            this.placeholder='';
        }
       
    })
    input.addEventListener('blur',function(e){
      
      
        if(this.value.length ===0){
            if(label != null){
                label.classList.remove('show-label')
                // this.placeholder=placeholder
              
            }
           
        }
        // this.placeholder=placeholder
       
    })
});

// show and hide password
// console.log(iconEye.querySelector('.eye-bare'))

iconEyes.forEach(iconEye=>{
    iconEye.addEventListener('click',function(e){
        let iconContainer= this.parentNode;
        let input= iconContainer.previousElementSibling;
       
       let bare= this.querySelector('.eye-bare');
       bare.classList.toggle('eye-close')
      

       if(bare.classList.contains('eye-close')){
        input.setAttribute('type','text')
       }else{
        input.setAttribute('type','password')
       }

       
    })
})

radioInputs.forEach(radioInput =>[
    radioInput.addEventListener('change',function(e){
       
    })
])

// heandler icon edit
inputs.forEach(input=>{
    let formIcon;
    input.addEventListener('mouseenter',function(e){
        e.stopPropagation()
    formIcon= this.nextElementSibling;

    if(formIcon != null){
        if(formIcon.classList.contains('form__icon--edit')){
            formIcon.classList.add('visible')
        }
    }
    })
    input.addEventListener('mouseleave',function(e){
        e.stopPropagation()
    formIcon= this.nextElementSibling;
        if(formIcon != null){
            if(formIcon.classList.contains('form__icon--edit')){
                formIcon.classList.remove('visible')
            }
        }
    })


   
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
 editIcons= document.querySelectorAll('.form__icon--edit');
 let inputValues=[];
editIcons.forEach((editIcon,index)=>{
    let input= editIcon.previousElementSibling
      inputValues.push(input.value);
      input.addEventListener('input',function(e){
        document.querySelectorAll(' .btn-save').forEach(btn=>{
            btn.classList.add('show')
        // if(window.screen.width>1200){
        })
        //     document.querySelector('.block-header .btn').classList.add('show')
           
        // }else{
        //     document.querySelector('.save-changing-btn').classList.add('show')
        // }
      })
   
})









