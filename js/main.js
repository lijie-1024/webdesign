$(function() {
  let readio = $('.readio')
  readio.on('click', function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    } else {
      $(this).addClass('active')
    }
  })
  let active = true
  $('.savebtn').on('click', function() {
    if (active) {
      $(this).attr('src', './images/savewart.png')
    } else {
      $(this).attr('src', './images/save.png')
    }
    active = !active
  })

  let taskShow = true
  $('.taskBar').on('click', function() {
    if (taskShow) {
      $(this).animate({ bottom: '5rem' }, 300)
      $('.footerUl').animate({ bottom: '0' }, 300)
    } else {
      $(this).animate({ bottom: '0' }, 300)
      $('.footerUl').animate({ bottom: '-5rem' }, 300)
    }
    taskShow = !taskShow
  })

  // booking

  $('.adults .add').on('click', function() {
    let num = $(this)
      .siblings('.num')
      .html()
    $(this)
      .siblings('.num')
      .html(++num)
  })

  $('.adults .reduce').on('click', function() {
    let num = $(this)
      .siblings('.num')
      .html()
    $(this)
      .siblings('.num')
      .html(--num)
  })

  // info

  let isShowTotal = true
  $('.infoCont .Proceed').on('click', function() {
    if (isShowTotal) {
      $(this).animate({ bottom: '11rem' }, 300)
      $('.total').animate({ bottom: '0' }, 300)
    } else {
      $(this).animate({ bottom: '3rem' }, 300)
      $('.total').animate({ bottom: '-10rem' }, 300)
    }
    isShowTotal = !isShowTotal
  })
  // bgStars
  $('.formItemDiff').click(function() {
    $(this).css('background-image', 'url(images/brightStar.png)')
    $(this)
      .prevAll()
      .css('background-image', 'url(images/brightStar.png)')
    $(this)
      .nextAll()
      .css('background-image', 'url(images/bgStars.png)')
  })


})
