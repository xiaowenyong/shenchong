// JavaScript Document
 //function checkAll(){
	//	var checkC = document.getElementsByName("checkC");
	//	for(var i=0;i<len;i++){
	//		items[i].checked=itemall.checked;
	//	}}
   function checkAll(){
  
  var  checkC=document.getElementsByName("checkC");
   var msg = document.getElementById("all");
  
    for(var i=0;i<checkC.length;i++){
        checkC[i].checked=msg.checked;
    }
}