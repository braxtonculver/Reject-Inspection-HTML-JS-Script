  $(document).on("contextmenu",function(e){
    e.preventDefault();
  });

  $(document).keydown(function(event){
    if(event.keyCode==123){
      return false;
    }
      else if(event.ctrlKey && event.shiftKey && event.keyCode==73){
        return false;
    }
  });

  document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
  }
    return false;
  };

  function click() {
    if (event.button==2||event.button==3) {
      oncontextmenu='return false';
      alert("Property of Braxton // github.com/braxtonculver");
    }
  }
    document.onmousedown=click
  document.oncontextmenu = new Function("return false;")

  $("#js-flipInX").Morphext({
    animation: "flipInX",
      complete: function () {
        console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
      }
  });
