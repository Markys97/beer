
$(document).ready(function(){
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

           if($(pageContent).hasClass('page-body--redObject')){
              $('.head').toggleClass('head-helper')
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
            }else if(pageContent.classList.contains('page-body--redObject')){
                if($(pageContent).hasClass('page-body--redObject')){
                    $('.head').removeClass('head-helper')
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
    let selectInputHeads= document.querySelectorAll('.select-input__head');
    let selectInputBodys=  document.querySelectorAll('.select-input__body');
    let selectText= document.querySelector('.select-input__head-text');
    let selectOptions=[...document.querySelectorAll('.select-input__link')];

    if(selectInputHeads !== null){
        selectInputHeads.forEach((selectInputHead, index)=>{
        
            selectInputHead.addEventListener('click',function(e){
                if(!$(this).parent().hasClass('select-input--off')){
                    if($(this).hasClass('no-border')){
                        if(selectInputBodys !== null){
                         selectInputBodys[index].classList.toggle('show-body-select')
                        }
                      }else{
                          this.classList.toggle('bodyIsOpen')
                         selectInputBodys[index].classList.toggle('show-body-select')
                         if(selectInputBodys !== null){
                             selectInputBodys[index].classList.toggle('show-body-select')
                            }
                      }
                }

            })
        })
    }
    // set  text in select input
    if(selectOptions !== null){
        selectOptions.forEach((selectOption, index,tab)=>{
            selectOption.addEventListener('click',function(e){
                $(this).parent().find('a').removeClass('select-input__link--active')
                $(this).addClass('select-input__link--active')
                let newValue= $(this).text();
              let head= $(this).parents('.select-input').find('.select-input__head')
              let body=$(this).parents('.select-input').find('.select-input__body')
              $(head).removeClass('bodyIsOpen')
              $(body).removeClass('show-body-select')
                $(head).find('.select-input__head-text').text(newValue);

            })
        })
    }

    // close select body when clicking on window;
    $(window).click(function(e){
      
       $(selectInputHeads).each(function(index,el){
        let all=[...$(this).parents('.select-input').find('*')];
        if(!all.includes(e.target)){
            let head= $(this).parents('.select-input').find('.select-input__head')
            let body=$(this).parents('.select-input').find('.select-input__body')
            $(head).removeClass('bodyIsOpen')
            $(body).removeClass('show-body-select')
        }
       })
    })
    

    
    //handler tags component 
    let tags= document.querySelectorAll('.tag');
    let tagIcons= document.querySelectorAll('.tag svg');
    
    tags.forEach((tag,index,array)=>{
        if(tag !== null){
            tag.addEventListener('click',function(e){
                e.stopPropagation();
                this.classList.add('tag--active')
                if($(this).attr('data-class') !== undefined){
                   if($(this).attr('data-all') !== undefined){
                        array.forEach(item=>{
                            item.className= 'order-page__tag tag'
                            item.classList.remove('tag--active')
                        })
                        this.classList.add('tag--active')
                        $(this).addClass($(this).attr('data-class'))
                       
                   }else{
                 
                    let tagAll=document.querySelector('.tag[data-all=""]');
                    tagAll.className='order-page__tag tag'
                
                    this.classList.add('tag--active')
                    $(this).addClass($(this).attr('data-class'))
                   }
                }
                
              
            })
        }
    
    
    })
    
    tagIcons.forEach((tagIcon,index) =>{
        tagIcon.addEventListener('click',function(e){
            e.stopPropagation();
           tags[index].classList.remove('tag--active')
            if(tags[index].getAttribute('data-class') !== undefined){
                tags[index].className='order-page__tag tag'
            }
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
   
    // Страница управления каталогом товаров (каталог товаров)

    let currentIcon;
    
    $(document).on('click','.list-product__close-button',function(e){
        e.preventDefault()
        let nameProduct= $(this).parent().find('.list-product__text').text()
        $('.name-product-modal').text(nameProduct)
      currentIcon= $(this)
        if(!$(this).hasClass('list-product__close-button--hide')){
            Fancybox.show([{ src: "#catalog-management-modal", type: "inline" }]);
        }else{
            $(this).removeClass(('list-product__close-button--hide'))
            $(this).parents('.list-product__row').removeClass('list-product__row--show')
        }

    })


    $(document).on('click','.modal-block__close-button',function(e){
        Fancybox.close()
    })


    $(document).on('click','.modal-block__link-btn',function(e){
        Fancybox.close()
    })

    $(document).on('click','.button-hide-product',function(e){
        Fancybox.close()
     
      $(currentIcon).addClass('list-product__close-button--hide')
      let row=$(currentIcon).parents('.list-product__row');
        row.addClass('list-product__row--show')
    })
   
    

    // handler list-point
    $('.list-point__body').each(function(index,el){
        $(el).attr('data-id',index)
    })
    $('.list-point__header').each(function(index,el){
        $(el).attr('data-key',index)
    })
    $(document).on('click','.list-point__header',function(e){
        e.stopPropagation()
        $(this).find('.list-point__header-icon').toggleClass('list-point__header-icon--open')


        let bodyList=  $(this).parents('.list-point__item').find('.list-point__body');

        $('.list-point__body').each(function(index,el){
            if($(el).attr('data-id') !== $(bodyList).attr('data-id')){
            $(el).slideUp(500)
        
            }
        })
        $('.list-point__header-icon').each((index,el)=>{

            if(index != $(this).attr('data-key')){
            el.classList.remove('list-point__header-icon--open')
            }
        })

        $(bodyList).slideToggle(500)

    

        
    })
    // контентная страница
    //обертка iframes
    $('.content-page iframe').each(function(index, el){
     let wrapperIframe= document.createElement('div')
     wrapperIframe.className='iframe-wrapper';
     let iframeNew= document.createElement('iframe')
     $(iframeNew).attr('src',$(el).attr('src'))
     $(iframeNew).attr('width',$(el).attr('width'))
     $(iframeNew).attr('height',$(el).attr('height'))
        wrapperIframe.appendChild(iframeNew);
        $(el).replaceWith(wrapperIframe)
    
      
        
    })
     //обертка img
     $('.content-page img').each(function(index, el){
        let wrapperImg= document.createElement('div')
        wrapperImg.className='img-wrapper';
        let img=  document.createElement('img');
        $(img).attr('src',$(el).attr('src'))
        $(img).attr('alt',$(el).attr('alt'))

        wrapperImg.appendChild(img)
        $(el).replaceWith(wrapperImg)
     })
         //обертка table
    $('.content-page table').each(function(index,el){
       
        let scroll= document.createElement('div');
        let scrollContent= document.createElement('div');
       
        scrollContent.className='scroll__content'
        scroll.className='scroll';
        $(el).clone().appendTo(scrollContent);
      scroll.appendChild(scrollContent);
      $(el).replaceWith(scroll)
        
    })


    // handler Данные точки redaction object (point)

    $(document).on('mouseenter','.point-redaction__terminal-icon',function(e){
       $('.point-redaction__terminal-right').addClass('point-redaction__terminal-right--open')
    })
    $(document).on('mouseleave','.point-redaction__terminal-icon',function(e){
     setTimeout(function(){
        $('.point-redaction__terminal-right').removeClass('point-redaction__terminal-right--open')
     },100)
    })

    //handler tab of страници redaction-point2.html

    //  close modals redaction-point2
    $(document).on('click','.modal-create-admin__close-icon,.modal-chooseEntity__close-icon,.modal-index__close-button',function(e){
        Fancybox.close();
    })
    // set id to all tab datetime content
    $('.day').each(function(index,el){
        $(el).attr('data-index',index)
        $($('.point-redaction__datetime')[index]).attr('data-index',index)
    })

    $(document).on('click','.day',function(e){
        $('.day').removeClass('day--active')
        $(this).addClass('day--active')
        $('.point-redaction__datetime').each((index,el)=>{
            $(el).removeClass('point-redaction__datetime--active');
            if($(el).attr('data-index') === $(this).attr('data-index')){
            $(el).addClass('point-redaction__datetime--active')
            }
        })
     
    })
    // handler input download-image
    $(document).on('input','#download-image',function(e){
        let nameFile=this.files[0].name;
        let urlFile= `./imgs/picture/${nameFile}`;
        let labelImg= $(this).parent('.download-img').find('label').children()[0]
        let newImg = document.createElement('img')
        $(newImg).attr('src',urlFile);
        $(newImg).attr('alt',$(labelImg).attr('alt'));
        $(labelImg).replaceWith(newImg)

    //   $(labelImg).attr('src', urlFile)


       
    })

    // add button file page redaction file redaction-object
    let buttonInputFile= ` <div class="input-add" >
    <div class="input-add__content">
        <input type="file" multiple id="add-product">
        <label for="add-product">
            <svg width="62" height="63" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3617 2.66211C33.7013 2.66211 35.5979 4.55868 35.5979 6.89823V27.6237H56.3233C58.6628 27.6237 60.5594 29.5202 60.5594 31.8598C60.5594 34.1993 58.6628 36.0959 56.3233 36.0959H35.5979V56.8213C35.5979 59.1609 33.7013 61.0575 31.3617 61.0575C29.0222 61.0575 27.1256 59.1609 27.1256 56.8213V36.0959H6.40018C4.06064 36.0959 2.16406 34.1993 2.16406 31.8598C2.16406 29.5202 4.06064 27.6237 6.40018 27.6237H27.1256V6.89823C27.1256 4.55868 29.0222 2.66211 31.3617 2.66211Z" fill="#C2CFE0"/>
            </svg>
                
            <span class="input-add__text"> Добавить фото</span>
        </label>
    </div>
</div>`
  $('.object-redaction__bottom-imgs').append(buttonInputFile);

  if($('.object-redaction__bottom-imgs .card-0')){

  }
  let card0List=[...document.querySelectorAll('.object-redaction__bottom-imgs .card-0')]
  if(card0List.length === 0 ){
    $('.input-add').addClass('input-add--long')
    }else{
        $('.input-add').removeClass('input-add--long')
    }



  // handler width of btn inpit-add page 
  // add product from button file page redaction file
  let fileResults;
  $(document).on('input','.input-add input',function(e){

    if(!$(this).hasClass('alone')){
      
        fileResults=[...this.files];
        fileResults.forEach(function(fileResult,index){
           let productReesult= ` <div class="card-0" data-idProduct=${index}>
           <div class="card-0__img">
               <img src="./imgs/picture/${fileResult.name}" alt="product">
           </div>
           <div class="card-0__close-button removeBtn1">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <g clip-path="url(#clip0_508_6254)">
                   <path d="M15.411 4.35916L4.12891 15.6412" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M4.12891 4.35916L15.411 15.6412" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </g>
                   <defs>
                   <clipPath id="clip0_508_6254">
                   <rect width="13.5385" height="13.5385" fill="white" transform="translate(3 3.23096)"/>
                   </clipPath>
                   </defs>
               </svg>
                   
           </div>
       </div>`
           $(".input-add").before(productReesult);
        })
         // controll width input button
         let card0List=[...document.querySelectorAll('.object-redaction__bottom-imgs .card-0')]
         if(card0List.length === 0 ){
           $('.input-add').addClass('input-add--long')
           }else{
               $('.input-add').removeClass('input-add--long')
           }
   
    }
    
     
  })

// remove  product from button file page redaction file
$(document).on('click','.removeBtn1',function(e){
      let product= $(this).parents('.card-0');
      let idProduct= parseInt($(product).attr('data-idProduct'));
      let newListFiles;
       newListFiles= fileResults.filter((item,index)=>{
          if(idProduct !== index)
          {
              return item
          }
      })
     
      fileResults= [...newListFiles]
      product.remove()
      // controll width input button
      let card0List=[...document.querySelectorAll('.object-redaction__bottom-imgs .card-0')]
      if(card0List.length === 0 ){
        $('.input-add').addClass('input-add--long')
        }else{
            $('.input-add').removeClass('input-add--long')
        }
     
})

// handler file dowloaded Юридическая информация

// if($('.object-redaction__confirm-row').children().length === 0){
//     $('.object-redaction__confirm-row').css({
//         marginTop: 0,

//     })
// }else{
//    $('.object-redaction__confirm-row').css({
//         marginTop: 32,
        
//     })
// }

// add file dowloaded Юридическая информация
let marginTopValueContainer= parseInt($('.object-redaction__confirm-row').css('marginTop'))
let allFiles;
$(document).on('input','#document, #document *',function(e){
  allFiles= [...this.files];
  allFiles.forEach((file,index)=>{
      let item= `<a href="javascript:void()" class="object-redaction__confirm-item card-1" data-fileId=${index}>
      <div class=" card-1__content">
          <div class="card-1__img">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35.043 4.83398H14.5013C13.2194 4.83398 11.99 5.34321 11.0836 6.24963C10.1772 7.15606 9.66797 8.38544 9.66797 9.66732V48.334C9.66797 49.6159 10.1772 50.8452 11.0836 51.7517C11.99 52.6581 13.2194 53.1673 14.5013 53.1673H43.5013C44.7832 53.1673 46.0126 52.6581 46.919 51.7517C47.8254 50.8452 48.3346 49.6159 48.3346 48.334V18.1257L35.043 4.83398Z" stroke="#109CF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M33.832 4.83398V19.334H48.332" stroke="#109CF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M38.6654 31.416H19.332" stroke="#109CF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M38.6654 41.084H19.332" stroke="#109CF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.1654 21.75H19.332" stroke="#109CF1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                  
          </div>
          <div class="card-1__text">${file.name}</div>
      </div>
      <div class="card-1__close-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_508_6254)">
              <path d="M15.411 4.35916L4.12891 15.6412" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.12891 4.35916L15.411 15.6412" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_508_6254">
              <rect width="13.5385" height="13.5385" fill="white" transform="translate(3 3.23096)"/>
              </clipPath>
              </defs>
              </svg>
      </div>
  </a>`
  $('.object-redaction__confirm-row').append(item)
  })
//   if( allFiles.length !== 0){
//     $('.object-redaction__confirm-row').css({
//         marginTop:32,
//     })
//   }
  $('.object-redaction__confirm-row').removeClass('d-none')
})

// remove file dowloaded Юридическая информация

$(document).on('click','.card-1__close-button',function(e){
    let fileView= $(this).parents('.object-redaction__confirm-item')
    let idFile= parseInt( $(fileView).attr('data-fileId'))
    let newFileList;
    newFileList= allFiles.filter(function(itemFile,index){
        if(idFile !==index ){
            return itemFile
        }
    })
    allFiles =[...newFileList]
    fileView.remove()
   
    $('.object-redaction__confirm-row').addClass('d-none')
})

// Информация о сети Изменить обложку
let imgCover= $('.object-redaction__showImg-img');
$(document).on('change','#form-file-img',function(e){
    let wrapper= $(this).parents('.object-redaction__file-img');
    let imgTarget= $(wrapper).find('.object-redaction__showImg-img img')
    let fileName= this.files[0].name
    let urlDestination= `./imgs/picture/${fileName}`
    $(imgTarget).attr('src',urlDestination)
})

// handler input file Загрузить изображения в галерею redaction-object2.html
let listFileGaleries;

if( document.querySelectorAll('.object-redaction__bottom-scroll--2 .card-0').length === 0){
    $('.object-redaction__bottom-scroll--2').addClass('d-none')
}


$(document).on('change','#document3',function(e){
    listFileGaleries= [...this.files];
    let destination= $('.object-redaction__bottom-imgs');
    listFileGaleries.forEach((fileResult,index)=>{
        let productReesult= ` <div class="card-0" data-idProduct=${index}>
        <div class="card-0__img">
            <img src="./imgs/picture/${fileResult.name}" alt="product">
        </div>
        <div class="card-0__close-button closeBtn2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_508_6254)">
                <path d="M15.411 4.35916L4.12891 15.6412" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.12891 4.35916L15.411 15.6412" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_508_6254">
                <rect width="13.5385" height="13.5385" fill="white" transform="translate(3 3.23096)"/>
                </clipPath>
                </defs>
            </svg>
                
        </div>
    </div>`
        $(".input-add").before(productReesult);
    })
    
    if( document.querySelectorAll('.object-redaction__bottom-scroll--2 .card-0').length !== 0){
        $('.object-redaction__bottom-scroll--2').removeClass('d-none')
        $(this).parent().addClass('d-none')
    }
      // controll width input button
      let card0List=[...document.querySelectorAll('.object-redaction__bottom-imgs .card-0')]
      if(card0List.length === 0 ){
        $('.input-add').addClass('input-add--long')
        }else{
            $('.input-add').removeClass('input-add--long')
      }
     
    
})
// remove  product from button file page redaction file
$(document).on('click','.closeBtn2',function(e){
      let product= $(this).parents('.card-0');
      console.log(product)
      let idProduct= parseInt($(product).attr('data-idProduct'));
      let newListFiles;
       newListFiles= listFileGaleries.filter((item,index)=>{
          if(idProduct !== index)
          {
              return item
          }
      })

     
      fileResults= [...listFileGaleries]
      product.remove()
      if( document.querySelectorAll('.object-redaction__bottom-scroll--2 .card-0').length === 0){
        $('.object-redaction__bottom-scroll--2').addClass('d-none')
        $('.form__item--btz').find('.object-redaction__file').removeClass('d-none')
    }
 
     
})

// handler input file Загрузить обложку в галерею redaction-object.html
$(document).on('change','#document2',function(e){
    let imgTarget= $('.d-with .object-redaction__showImg-img img')
    let url= `./imgs/picture/${this.files[0].name}`
   $('.d-simple').addClass('d-none')
   $('.d-with').removeClass('d-none')

   $(imgTarget).attr('src',url)
   
   
})

// handler block-info-bull
$(document).on('mouseenter','.block-info-bull__icon',function(e){
    $('.block-info-bull__info').addClass('block-info-bull__info--open')

 })
 $(document).on('mouseleave','.block-info-bull__icon',function(e){
  setTimeout(function(){
     $('.block-info-bull__info').removeClass('block-info-bull__info--open')
  },100)
 })

 // script Уведомления page 

$(document).on('click', ".notif-list__row",function(e){
    if($(this).hasClass('notif-list__row--new')){
        $(this).removeClass('notif-list__row--new')
    }
    $(this).find('.notif-list__icon').addClass('d-none')
    $(this).find('.notif-list__icon--open').removeClass('d-none')
})

// script page order.html
$('.process-order-item--js').each(function(id,el){
 $(el).attr('data-id',id)
})
let processItemsLengt= $('.process-order-item--js').length;
let processLastItem=$('.process-order-item--js')[processItemsLengt - 1]
// следующий шаг
$(document).on('click','.process-order-item .btn',function(e){
  let item= $(this).parents('.process-order-item')
  let title=$(this).parents('.process-order-item').find('.process-order-item__title')
  let indexItem= parseInt($(item).attr('data-id'));

 if((indexItem + 1) !== processItemsLengt){
    if((indexItem + 1 ) <= processItemsLengt){
        let nextItem= $('.process-order-item--js')[indexItem + 1]
        $(nextItem).addClass('process-order-item--active')
        if((parseInt($(processLastItem).attr('data-id')) + 1) !== indexItem){
          $(item).removeClass('process-order-item--active')
          $(title).addClass( $(item).attr('data-transform'))
          $(this).parents('.process-order-item').find('.process-order-item__date').removeClass('process-order-item__date--not')
        }
        if((indexItem + 2)=== processItemsLengt){
            $(".order__confirm").fadeIn(300);
        }
    }
 }else{
    if($(this).hasClass('btn--confirmed')){
        $(title).addClass( $(item).attr('data-transform'))
        $(this).parents('.process-order-item').find('.process-order-item__date').removeClass('process-order-item__date--not')
        $(item).removeClass('process-order-item--active')
        $(".order__confirm").fadeOut(300);
        $('.order__cancel').addClass('d-none')
    }
 }
  
 
})

// Подтверждение возраста
$(document).on('click','.order__confirm-btn',function(e){
   let btnLastItemProcess= $(processLastItem).find('.process-order-item__button-wrapper .btn')
    btnLastItemProcess.addClass('btn--confirmed')
    $(this).addClass('order__confirm-btn--confirmed')
})

// Отменить заказ
$(document).on('click','.order__cancel',function(e){
    let listItem=[...$('.process-order-item--js')];
    let cancelItem=$('.process-order-item--cancel')
    listItem.forEach((item,index,arr)=>{
       if($(item).hasClass('process-order-item--active')){
            if(index === 0){
                arr.forEach((el,i)=>{
                    el.remove()
                })
                $(cancelItem).removeClass('d-none')
                
            }else{
                if((index + 1) < processItemsLengt)
                {
                    arr.forEach((el,i)=>{
                        if(i > index){
                            el.remove()
                        }
                    })
                    $(item).remove()
                    $(cancelItem).removeClass('d-none')
                
                }else if((index + 1) === processItemsLengt){
                    $(item).remove()
                    $(cancelItem).removeClass('d-none')
                    $(".order__confirm").fadeOut(300);
                }
            }
       }
    })
    $(this).addClass('d-none')
})

// script plsus-info
$(document).on('mouseenter','.plus-info__icon',function(e){
    e.stopPropagation()
    $(this).parent()
    .find('.plus-info__explication')
    .addClass('plus-info__explication--show')
})
$(document).on('mouseleave','.plus-info__icon',function(e){
    e.stopPropagation()
 setTimeout(()=>{
    $(this).parent()
    .find('.plus-info__explication')
    .removeClass('plus-info__explication--show')
 },100)
})

// 
$(document).on('change','#file-img-dln',function(e){
    let file= this.files[0]
    let url= './imgs/picture/'+file.name

    if($('.file-img__img-result').hasClass('d-none')){
        $('.file-img__img-result').removeClass('d-none')
    }
    $('.file-img__img-result img').attr('src',url)
})
// end 
})





  





 

