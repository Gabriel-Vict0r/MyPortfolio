function giro1() { 
    document.querySelector('i.arrow1').classList.toggle('giro');
  }
  function giro2() { 
    document.querySelector('i.arrow2').classList.toggle('giro');
  }
  function giro3() { 
    document.querySelector('i.arrow3').classList.toggle('giro');
  }

  $(function(){ 
    $('#skill1').click(function(){ 
        $(this).siblings('#info-skills1').slideToggle()
    })
    $('#skill2').click(function(){ 
        $(this).siblings('#info-skills2').slideToggle()
    })
    $('#skill3').click(function(){ 
        $(this).siblings('#info-skills3').slideToggle()
    })
})