 (function( $ ){
  
  $.fn.mytest = function( ) {
  
  // Create some defaults, extending them with any options that were provided
    
  return this.each(function() {
                
                   
                   //alert("hello")
                   var i = 0;
                         
                   while (i <20) {
                   
                   if(i<gon.goals.length){
      
                   
                   var start_date_handle = new Date( (Date.parse(gon.goals[i].start_date))).getHours()
                   var end_date_handle = new Date( (Date.parse(gon.goals[i].end_date))).getHours()
                   var custom_width = (end_date_handle-start_date_handle)
                   var current_time = new Date().getHours()
                   
                   function map_start_date(handle){
                   
                        var handle_milliseconds = (new Date(Date.parse(handle))).getTime()
                        var one_hour=1000*60*60;
                        var result = ((new Date()).getTime() - handle_milliseconds)/one_hour
                        
                        if(result<0){
                            //add these hours to the middle i.e add to 12th
                            //alert("Before"+result)
                            return Math.ceil(result * (-1))+12
                        }else{
                            //alert("After "+result)
                            //alert(Math.floor(result))
                            return (12-Math.floor(result))

                        }
                    }
                   
                   
                   function map_goal_size(start, end){
                   
                   var start_milliseconds = (new Date(Date.parse(start))).getTime()
                   var end_milliseconds = (new Date(Date.parse(end))).getTime()
                   var one_hour=1000*60*60;
                    
                   
                   var result = ((end_milliseconds-start_milliseconds)/one_hour)+1
                   //alert("End "+end_milliseconds+" Start"+start_milliseconds+" Diff="+(end_milliseconds-start_milliseconds)+" Divide"+one_hour)
                    //alert(result)
                   return result
                   }
                   var count = 0

                   var mystring = '<tr id='+i+' class="block">'
                   for(g=0;g<24;g++){
                   if(g==12&&map_start_date(gon.goals[i].start_date)!=12){
                        
                    if(count>0 && count<map_goal_size(gon.goals[i].start_date,gon.goals[i].end_date)){
                        mystring+='<td class="grid-cell-goal-block-special"></td>'
                        count+=1
                    }else{
                         mystring+='<td class="grid-cell-mid"></td>'
                   }
                   }else if(g==12&&map_start_date(gon.goals[i].start_date)==12){
                        mystring+='<td class="grid-cell-goal-block-special"></td>'
                        count+=1
                   }else if(g==map_start_date(gon.goals[i].start_date)){
                        mystring+='<td class="grid-cell-goal-block-special"></td>'
                        count+=1
                   }else if(count>0 && count<map_goal_size(gon.goals[i].start_date,gon.goals[i].end_date)){
                        mystring+='<td class="grid-cell-goal-block"></td>'
                        count+=1
                   }else{
                        
                         mystring+='<td></td>'
                
                   }
    
                   }
                   
                   
                   $(this).append(mystring+'</tr>'); 
                   
                   }else{
                        var mystring = '<tr class="block">'
                        for(g=0;g<24;g++){
                                if(g==12){
                                    mystring+='<td class="grid-cell-mid"></td>'
                                }else{
                                    mystring+='<td></td>'
                                }
                                                        }
                        $(this).append(mystring+'</tr>'); 
                   }
                   
                   i++;

                   
                   }
                   
                   
                   
                   
                                     
                   });
  
  };
  })( jQuery );






$(document).ready(function(){
                  $('.mid-section .grid-body .grid thead').mytest();
                  $(document).ready(function(){
                                    
                                    
                                    $('.mid-section .grid-body .grid thead .grid-cell-goal-block-special').click(function(){
                                                                                                                 var $id = $(this).closest('tr').attr('id');
                                                                                                                 
                                                                                                                 if(document.getElementById('box_text').innerHTML == 'up'){
                                                                                                                 
                                                                                                                 
                                                                                                                 var $original_height=this.height
                                                                                                                 var $original_width=this.width
                                                                                                                 $(this).animate({width:$original_width,opacity:0.4},"fast");
                                                                                                                 $(this).animate({height:$original_height,opacity:0.9},"fast");
                                                                                                                 document.getElementById('box_text').innerHTML = 'down'
                                                                                                                 $(this).empty();
                                                                                                                 }else{
                                                                                                                 
                                                                                                                 var $original_height=this.height
                                                                                                                 var $original_width=this.width 
                                                                                                                 $(this).animate({height:300,opacity:0.4},"fast");
                                                                                                                 $(this).animate({width:300,opacity:0.9},"fast");
                                                                                                                 document.getElementById('box_text').innerHTML = 'up'
                                                                                                                 $(this).append('<div id="box"><table><tr><td><p>Goal Title : '+gon.goals[$id].title+'</p><p id="ptest">Start Date : '+gon.goals[$id].start_date+'</p><p>End date : '+gon.goals[$id].end_date+'</p></td></tr><tr><td> <div class="target"> Target(s)<p>'+gon.targets[$id].name+' ['+gon.targets[1].state+']</div></td></tr></table></div>');
                                                                                                                 
                                                                                                                 
                                                                                                                 }
                                                                                                                 });
                                    
                                    
                                    });
                  });


