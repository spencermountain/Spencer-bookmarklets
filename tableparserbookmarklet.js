javascript:
void ((function(){
    if (typeof(jQuery) != 'function') {
        var noeud_js = document.createElement('script');
        noeud_js.setAttribute('src', 'http://code.jquery.com/jquery-latest.pack.js');
        document.getElementsByTagName('head')[0].appendChild(noeud_js);
    }
   
    function verif_loaded(){
        if (typeof(jQuery) == 'function') {
            clearInterval(interval);
            code();
        }
    }
   
    var interval = window.setInterval(verif_loaded, 100);
   
    function code(){

  $('table')
 .mouseover(function() {
   $(this).css('outline',' 1px solid #c50');
 })
 .mouseout(function() {
   $(this).css('outline',' 0px solid #c50');
 });

var all='';
 $('table').click(function() {
$('tr', this).each(function(){
var row=$(this);
  $('td',row).each(function(){
  all+=$(this).html() + '; ';
  });

  all+='<br/>';
});

$('*').html(all);
});

    
    }
})())
