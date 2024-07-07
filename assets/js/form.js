inputs = document.querySelectorAll("input").value;

function pop(){
  if(inputs == '')
    {
    swal({
        title: "ohh sorry!",
        text: "successfully send your response we will reach contact soon",
        icon: "failure",
      });
    }
   else
   {
    swal({
      title: "goo job!",
      text: "successfully send your response we will reach contact soon",
      icon: "sucess",
    });
   }
}
