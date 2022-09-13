let menuLeftItems=[...document.querySelectorAll('.menu-left__item')];
let buttonMenuLeft= document.querySelector('.menu-left__item--bottom');
let sideBar = document.querySelector('.page-sidebar');
let page= document.querySelector('.page');
let pageContent=document.querySelector('.page-body');
let blockHeader= document.querySelector(' .block-header');

// handler buttton menu slidebar
if(buttonMenuLeft != null){
    buttonMenuLeft.addEventListener('click',function(e){
        page.classList.add('d-flex')
        pageContent.classList.add('m-0')
        sideBar.classList.add('p-sticky')
        sideBar.classList.toggle('w-100')
        sideBar.classList.toggle('sideBar-open')
        if(pageContent.classList.contains('page-body--one') ){
           
            if( window.screen.width <= 1570 && pageContent.classList.contains('page-body--index')){
                document.querySelectorAll('[data-target]').forEach(item=>{
                    if(  item !== null){
                        item.classList.toggle('g-1')
                    }
                })
                document.querySelectorAll('.tableau__col-name').forEach(name=>{
                    if(  name !== null){
                        name.classList.toggle('name-long')
                       
                    }
                })
                
            }else if(window.screen.width <= 1500 && !pageContent.classList.contains('page-body--index')){
                document.querySelectorAll('[data-target]').forEach(item=>{
                    if(  item !== null){
                        item.classList.toggle('g-1')
                    }
                })
            }else if(window.screen.width <=1629 && pageContent.classList.contains('page-body--partenaire')){
                document.querySelectorAll('[data-target]').forEach(item=>{
                    if(  item !== null){
                        item.classList.toggle('g-1')
                    }
                })
            }
        
            if(pageContent.classList.contains('page-body--index') ){
                document.querySelector('.dashbord__content').classList.add('p-40')
            }else if(pageContent.classList.contains('page-body--new')){
                
            document.querySelectorAll('.subsidiary__content .form__input').forEach(formInput=>{
                formInput.classList.toggle('small-input')
            })
            document.querySelector('.subsidiary__content .form').classList.toggle('p-10')
           
            }
            if(pageContent.classList.contains('page-body--partenaire-writing') && window.screen.width <=1500){
                document.querySelector('.partner-writing__header').classList.toggle('p-writing')
            }
        }
    
    
        this.querySelector('svg').classList.toggle('return')
        if(blockHeader !== null){
            blockHeader.classList.toggle('block-header-left')
        }
    
        
        
    }) 
    
}

window.addEventListener('resize',function(e){
    if(pageContent.classList.contains('page-body--new') && window.screen.width <=1200){
            
        document.querySelectorAll('.subsidiary__content .form__input').forEach(formInput=>{
            formInput.classList.remove('small-input')
        })
        document.querySelector('.subsidiary__content .form').classList.remove('p-10')
       
    }

    // handler  responsive for index.html page 

    if(pageContent.classList.contains('page-body--index')){
        if(sideBar.classList.contains('sideBar-open') && this.window.screen.width <=1570){
            document.querySelector('[data-target]').classList.add('g-1')
        }else{
            document.querySelector('[data-target]').classList.remove('g-1')
        }
    }else if(pageContent.classList.contains('page-body--partenaire')){
        if(sideBar.classList.contains('sideBar-open') && this.window.screen.width <=1629){
            document.querySelectorAll('[data-target]').forEach(item=>{
                if(  item !== null){
                    item.classList.add('g-1')
                }
            })
        }else{
            document.querySelectorAll('[data-target]').forEach(item=>{
                if(  item !== null){
                    item.classList.remove('g-1')
                }
            })
        }
    }else if(pageContent.classList.contains('page-body--partenaire-writing')){
       
        if(this.document.querySelector('.partner-writing__header') != null){
            if(sideBar.classList.contains('sideBar-open') && this.window.screen.width <=1500){
                this.document.querySelector('.partner-writing__header').classList.add('p-writing')
               
            }else{
                this.document.querySelector('.partner-writing__header').classList.remove('p-writing')
            }
        }
    }

    // close sidebar
    if(this.window.screen.width <=1499){
        if(blockHeader !== null){
            blockHeader.classList.remove('block-header-left')
        }
        document.querySelector('.close-icon').classList.remove('return')
        page.classList.remove('d-flex')
        pageContent.classList.remove('m-0')
        sideBar.classList.remove('p-sticky')
        sideBar.classList.remove('w-100')
        sideBar.classList.remove('sideBar-open');

        if(pageContent.classList.contains('page-body--one') ){
       
            if( window.screen.width <= 1570 && pageContent.classList.contains('page-body--index')){
                document.querySelectorAll('[data-target]').forEach(item=>{
                    if(  item !== null){
                        item.classList.remove('g-1')
                    }
                })
                document.querySelectorAll('.tableau__col-name').forEach(name=>{
                    if(  name !== null){
                        name.classList.remove('name-long')
                       
                    }
                })
                
            }else if(window.screen.width <= 1500 && !pageContent.classList.contains('page-body--index')){
                document.querySelectorAll('[data-target]').forEach(item=>{
                    if(  item !== null){
                        item.classList.remove('g-1')
                    }
                })
            }else if(window.screen.width <=1629 && pageContent.classList.contains('page-body--partenaire')){
                document.querySelectorAll('[data-target]').forEach(item=>{
                    if(  item !== null){
                        item.classList.remove('g-1')
                    }
                })
            }
        
            if(pageContent.classList.contains('page-body--index') ){
                document.querySelector('.dashbord__content').classList.remove('p-40')
            }else if(pageContent.classList.contains('page-body--new')){
                
            document.querySelectorAll('.subsidiary__content .form__input').forEach(formInput=>{
                formInput.classList.remove('small-input')
            })
            document.querySelector('.subsidiary__content .form').classList.remove('p-10')
           
            }
            if(pageContent.classList.contains('page-body--partenaire-writing') && window.screen.width <=1500){
                
                if(  document.querySelector('.partner-writing__header') !== null){
                    document.querySelector('.partner-writing__header').classList.remove('p-writing')
                }
            }
        }
    
    
   
        
       
    }
})

// slide menu left
menuLeftItems.forEach(menuLeftItem=>{
    menuLeftItem.addEventListener('mouseenter',function(e){
        if(!this.dataset.off && buttonMenuLeft.getAttribute('data-off') ==='true' ){
       
            
            

            if(!sideBar.classList.contains('sideBar-open')){
                document.querySelector('.page-sidebar').classList.add('open-slidebar')
                page.classList.remove('d-flex')
            pageContent.classList.remove('m-0')
            sideBar.classList.remove('p-sticky')
            sideBar.classList.remove('w-100')
            if(pageContent.classList.contains('page-body--one') && window.screen.width <= 1500){
                document.querySelector('[data-target]').classList.remove('g-1')
                if(pageContent.classList.contains('page-body--index') ){
         
                    document.querySelector('.dashbord__content').classList.remove('p-40')
                }else if(pageContent.classList.contains('page-body--new')){
            
                    document.querySelectorAll('.subsidiary__content .form__input').forEach(formInput=>{
                        formInput.classList.remove('small-input')
                    })
                    document.querySelector('.subsidiary__content .form').classList.remove('p-10')
            
                    }
              
            }
            }


            

        }
       
    })
    menuLeftItem.addEventListener('mouseleave',function(e){
        if(!this.dataset.off && buttonMenuLeft.getAttribute('data-off') ==='true' ){
            document.querySelector('.page-sidebar').classList.remove('open-slidebar')
         
        }
    })
})

// close modal email
let closeModalBtn= document.querySelector('.email-modal__close-button');
let emailButton= document.querySelector('.email-modal__button')
if(closeModalBtn !== null){
    closeModalBtn.addEventListener('click',function(e){
        Fancybox.close()
      })
}
if(emailButton !== null){
    emailButton.addEventListener('click',function(e){
        Fancybox.close()
      })
}

// handler select-input component
let selectInputHead= document.querySelector('.select-input__head');
let selectInputBody=  document.querySelector('.select-input__body');
let selectText= document.querySelector('.select-input__head-text');
let selectOptions=[...document.querySelectorAll('.select-input__link')];

// set  text in select input
if(selectInputHead !== null){
    selectInputHead.addEventListener('click',function(e){
  
        selectInputBody.classList.toggle('show-body-select')
        // this.classList.toggle('bodyIsOpen')

        if(selectInputBody.classList.contains('show-body-select')){
            this.classList.add('bodyIsOpen')
        }else{
            this.classList.remove('bodyIsOpen')
        }
       
    })
}
selectOptions.forEach((selectOption,i,tab) =>{
    if(selectOption !== null){
        selectOption.addEventListener('click',function(e){
            selectText.innerHTML=this.innerHTML
            selectInputBody.classList.remove('show-body-select');
        
            selectInputHead.classList.remove('bodyIsOpen')
            tab.forEach(item=>{
                item.classList.remove('select-input__link--active')
            })
            this.classList.add('select-input__link--active')
        })
    }
})

// close select body for clicking on window
let selectComponent= document.querySelector('.select-input');
if(selectComponent !== null){
    let allNodeInSelectComponent=[...selectComponent.querySelectorAll('*'),selectComponent];
    window.addEventListener('click',function(e){
        let selectComponent= document.querySelector('.select-input');
        let allNodeInSelectComponent=[...selectComponent.querySelectorAll('*'),selectComponent];
       let target= e.target;
       if(!allNodeInSelectComponent.includes(e.target)){
        selectInputBody.classList.remove('show-body-select');
        selectInputHead.classList.remove('bodyIsOpen')
       }
    })
}




//handler tags component 
let tags= document.querySelectorAll('.tag');
let tagIcons= document.querySelectorAll('.tag svg');

tags.forEach((tag,index)=>{
    if(tag !== null){
        tag.addEventListener('click',function(e){
            e.stopPropagation();
            this.classList.add('tag--active')
          
        })
    }


})

tagIcons.forEach((tagIcon,index) =>{
    tagIcon.addEventListener('click',function(e){
        e.stopPropagation();
       tags[index].classList.remove('tag--active')
    })
})

// handler card partner
let partenaireItems= [...document.querySelectorAll('.item-partenaire')];
let partenaireItemNames= [...document.querySelectorAll('.item-partenaire__header-name')];
let partenaireItemIcons=[...document.querySelectorAll('.item-partenaire__header-icon--delete')];
let buttonMores= document.querySelectorAll('.item-partenaire__info-state-btn');
let roleLists= document.querySelectorAll('.item-partenaire__roles');
buttonMores.forEach((buttonMore,index)=>{
    if(buttonMore !== null){
        buttonMore.addEventListener('mouseenter',function(e){
            roleLists[index].classList.add('d-visible')
        })

        buttonMore.addEventListener('mouseleave',function(e){
            roleLists[index].classList.remove('d-visible')
        })
    }
})







// handler btn role for Управление дочерними партнерами
let personRoleBtn= document.querySelector('.person__col-role-btn');
let personRoleList= document.querySelector('.person__col-role-list');
// show listRole
if(personRoleBtn !==null){
    personRoleBtn.addEventListener('mouseenter',function(e){
        personRoleList.classList.add('d-visible')
    })
// hide listRole
    personRoleBtn.addEventListener('mouseleave',function(e){
        personRoleList.classList.remove('d-visible')
    })
}

// handler menu mobile fixed on bottom of screen
var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  
    if(this.window.screen.width<=1200){
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"


        if(  document.querySelector('.menu-mobile') !=null){
            if (st > lastScrollTop){
                //  document.querySelector('.menu-mobile').style.display='none';
                 document.querySelector('.menu-mobile').classList.add('menu-mobile-hide')
             
                } else {
                    document.querySelector('.menu-mobile').classList.remove('menu-mobile-hide')
                }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }
}, false);


// personnal data script

let inputRow= document.querySelector('.personel-data__items');
// when sidebar is open, we have to change layout for this block
window.addEventListener('resize',function(e){
    if(inputRow !== null){
        if(this.window.screen.width<= 1500){
            if(sideBar.classList.contains('p-sticky')){
                inputRow.classList.add('g-1')
                this.document.querySelector('.personel-data__row').classList.add('gap-40')
            }
        }else{
            if(sideBar.classList.contains('p-sticky')){
                inputRow.classList.remove('g-1')
                this.document.querySelector('.personel-data__row').classList.remove('gap-40')
            }
           
        }
    }
    if(blockHeader != null){
        if(sideBar.classList.contains('sideBar-open')){
            if(this.window.screen.width<=1200){
                    blockHeader.classList.remove('block-header-left')
            }else{
                blockHeader.classList.add('block-header-left')
            }
        }
    }

})

// page Объекты handler tabs
let tabMenuItems= [...document.querySelectorAll('.block-point__item')];
let tabContents = [...document.querySelectorAll('.tab-box')];
window.addEventListener('load',function(e){
    tabContents.forEach((tabContent,index)=>{
      if(tabContent !== null){
        tabContent.setAttribute('data-id',index);
       
      }
    })
})

tabMenuItems.forEach(function(tabMenuItem, index,arr){
    if(tabMenuItem != null){
        tabMenuItem.addEventListener('click',function(e){

            arr.forEach(item=>{
              if(  item.classList.contains('block-point__item--active')){
                item.classList.remove('block-point__item--active')
              }
            })
            this.classList.add('block-point__item--active')

            tabContents.forEach((tabContent,index)=>{
                if(tabContent !== null){
                  tabContent.classList.remove('tab-box--active')
                
                }
            })
            tabContents[index].classList.add('tab-box--active')
        })
    }
})


// handler pages layout 
let section =document.querySelector('.js-params');
if (section !== null){
    let params = section.getAttribute('data-class');
    pageContent.className += ' ' + params;
    
}




 

