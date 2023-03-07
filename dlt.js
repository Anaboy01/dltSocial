// side bar

const menuItems = document.querySelectorAll('.menuItem')

// messages 

const messageNotification = document.getElementById('messagesNotification')
const messages = document.querySelector('.messages')

// theme
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customizeTheme')
const fontSizes = document.querySelectorAll('.chooseFont span')
let root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.chooseColor span')
const bg1 = document.querySelector('.bgOne')
// const bg2 = document.querySelector('bgTwo')
const bg3 = document.querySelector('.bgThree')
const bg4 = document.querySelector('.bgFour')




// remove active class from menu items 

const changeActiveItem = () =>{
      menuItems.forEach(item => {
            item.classList.remove('active')
      })
}

menuItems.forEach(item =>{
      // changeActiveItem();
      item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');
          
            if (item.id != 'notifications'){
                  document.querySelector('.notificationPopUp').style.display = 'none';
            }else{
                  document.querySelector('.notificationPopUp').style.display = 'block';

                  document.querySelector('#notifications .notificationCount').style.display = 'none'
            }
      })
})
//messages

messageNotification.addEventListener('click', () => {
      messages.style.boxShadow = '0 0 1rem var(--color-primary)'

      setTimeout(() => {
            messages.style.boxShadow = 'none'
      },3000)

      messageNotification.querySelector('.notificationCount').style.display = 'none'
})

//open theme modal
const openThemeModal = () => {
      themeModal.style.display  = 'grid';

}

// close theme modal
const closeThemeModal = (e) => {
      if(e.target.classList.contains('customizeTheme')){
            themeModal.style.display = 'none'
      }
}



themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click',openThemeModal)

//remove active class from font size

const removeSizes = () =>{
      fontSizes.forEach(size => {
            size.classList.remove('active')
      })
}

// fontsizes

fontSizes.forEach(size => {
      
      size.addEventListener('click', () => {
            removeSizes();
            let fontSizes;
            size.classList.toggle('active');
            if(size.classList.contains('fontSizeOne')){
                  fontSizes = '10px'
                  root.style.setProperty('--sticky-top-left', '5.4rem')
                  root.style.setProperty('--sticky-top-right', '5.4rem')
            }else if(size.classList.contains('fontSizeTwo')){
                  fontSizes = '13px'
                  root.style.setProperty('--sticky-top-left', '5.4rem')
                  root.style.setProperty('--sticky-top-right', '-7rem')
                  
            }
            else if(size.classList.contains('fontSizeThree')){
                  fontSizes = '16px'
                  root.style.setProperty('--sticky-top-left', '-2rem')
                  root.style.setProperty('--sticky-top-right', '-17rem')
            }
            else if(size.classList.contains('fontSizeFour')){
                  fontSizes = '19px'
                  root.style.setProperty('--sticky-top-left', '5rem')
                  root.style.setProperty('--sticky-top-right', '-25rem')
            }
            else if(size.classList.contains('fontSizeFive')){
                  fontSizes = '22px'
                  root.style.setProperty('--sticky-top-left', '-12rem')
                  root.style.setProperty('--sticky-top-right', '-35rem')
            }

            // change font size of the root html element
            document.querySelector('html').style.fontSize = fontSizes
      })
})

//remove active from color
const changeActiveColor = () => {
      colorPalette.forEach(colorPicker => {
            colorPicker.classList.remove('active');
      })
}

//color
colorPalette.forEach(color => {
      color.addEventListener('click', () => {
            
            let primary;
            changeActiveColor()
            if(color.classList.contains('colorOne')){
                  primary = '252';
            }else if(color.classList.contains('colorTwo')){
                  primary = '575'
            }else if (color.classList.contains('colorThree')){
                  primary = '352'
            }else if (color.classList.contains('colorFour')){
                  primary = '320'
            }else if (color.classList.contains('colorFive')){
                  primary = '34'
            }

            color.classList.add('active');
            root.style.setProperty('--primary-color-hue', primary);
      })
})
// theme background
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background 
const changeBg = () => {
      root.style.setProperty('--light-color-lightness', lightColorLightness)
      root.style.setProperty('--white-color-lightness', whiteColorLightness)
      root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

bg1.addEventListener('click', () => {
      console.log('is clicked')
      //add active class
      bg1.classList.add('active')

      // remove active class from 2 others
      bg3.classList.remove('active')
      bg4.classList.remove('active')

      window.location.reload()
})


bg3.addEventListener('click', () => {
      lightColorLightness = '15%'
      whiteColorLightness = '20%'
      darkColorLightness = '95%'
      //add active class
      bg3.classList.add('active')

      // remove active class from 2 others
      bg1.classList.remove('active')
      bg4.classList.remove('active')

      changeBg()
})


bg4.addEventListener('click', () => {
      lightColorLightness = '0%'
      whiteColorLightness = '10%'
      darkColorLightness = '95%'
      //add active class
      bg4.classList.add('active')

      // remove active class from 2 others
      bg1.classList.remove('active')
      bg3.classList.remove('active')

      changeBg()
})


