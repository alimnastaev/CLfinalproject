//Under construction message
function show_alert() {
  if(confirm("Sorry this function is still under construction!"))
    document.forms[0].submit();
  else
    return false;
}