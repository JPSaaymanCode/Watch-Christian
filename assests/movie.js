  //https://developers.themoviedb.org/4/list/get-list
  //https://api.themoviedb.org/3/search/movie?api_key=ff71d3459172c77ef2406661423bf765&query=christ
  
    function loadLatest(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myObj = JSON.parse(xmlhttp.responseText);
        var results = myObj ["items"];
        var html_arr = `<div class="row">`;
        for (i = 0; i < 5; i++) {
        var base_path = 'https://image.tmdb.org/t/p/w220_and_h330_face';
        var image_path = base_path + results[i]["poster_path"];
        html_arr += `
        <div class="col-2" style="margin-bottom:30px; padding-left:3cm">
        <img src="`+image_path+`" />
        </div>`;
      }
      
      html_arr += `</div>`;
  
  
        document.getElementById("latest-movies").innerHTML = html_arr;
      };
  
    }
  xmlhttp.open("GET", "https://api.themoviedb.org/3/list/7071335?api_key=ff71d3459172c77ef2406661423bf765&language=en-US", true);
  xmlhttp.send();
  
    };

    function loadPopular(){
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myObj = JSON.parse(xmlhttp.responseText);
          var results = myObj ["items"];
          var html_arr = `<div class="row">`;
          for (i = 0; i < 5; i++) {
          var base_path = 'https://image.tmdb.org/t/p/w220_and_h330_face';
          var image_path = base_path + results[i]["poster_path"];
          html_arr += `
          <div class="col-2" style="margin-bottom:30px; padding-left:3cm">
          <img src="`+image_path+`" />
          </div>`;
        }
        
        html_arr += `</div>`;
    
    
          document.getElementById("most-popular").innerHTML = html_arr;
        };
    
      }
    xmlhttp.open("GET", "https://api.themoviedb.org/3/list/7071336?api_key=ff71d3459172c77ef2406661423bf765&language=en-US", true);
    xmlhttp.send();
    
      };
  
  function functionAllMovies(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var myObj = JSON.parse(xmlhttp.responseText);
      var results = myObj ["items"];
      var html_arr = `<div class="row">`;
console.log(results)
      for (i = 0; i < results.length; i++) {
      var base_path = 'https://image.tmdb.org/t/p/w300';
      var image_path = base_path + results[i]["poster_path"];
      html_arr += `
      <div class="col-3" style="margin-bottom:30px">
      <img src="`+ image_path +`" />
      </div>`;
    }
    
    html_arr += `</div>`;


      document.getElementById("test").innerHTML = html_arr;
    }
  };

xmlhttp.open("GET", "https://api.themoviedb.org/3/list/7068294?api_key=ff71d3459172c77ef2406661423bf765&language=en-US", true);
xmlhttp.send();
}

  
 
  
