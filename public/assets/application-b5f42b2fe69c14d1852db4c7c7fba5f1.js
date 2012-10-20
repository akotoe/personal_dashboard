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

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//




//= myfile.js
;
