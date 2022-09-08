function goToStays() {
  let div = `<div class="input_button">
       
  <input class="button1" img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAZlBMVEX///8AAADq6ur8/PyBgYF1dXXl5eXR0dG9vb0dHR3d3d0uLi6urq709PTh4eEyMjKMjIxWVlZHR0e0tLRnZ2c4ODgMDAympqYXFxdtbW2dnZ1gYGASEhKWlpbLy8tQUFAlJSVAQEDbkHFNAAADKUlEQVRoge2a6ZLiMAyE41wkZDhDOGZgSN7/JWfDMUviVi7JZmvL319cbjC21JbseQ6Hw+FwOP4lgniW5HmezOLAsvIyCYt0r+7s0yJMlrak/cPmqNocNwffgvY80pSfRHPD2vGJ1K45xQa1g7BTuyY0tgVnWa+4UtnMjPjnAO2aTxPi9G5rE8mLbweLK7UV1g6qEeJKVbJ772uUuFJfkuL9J61NKCf+MVpcqQ8p8XiCuFJSYW81SX0lIz5l3WtE1n5xnqh+XgioX+j5y6zISvrjC198kRJzb/J7Op/nG2JEyv/xRG4JX52MT8QDdr4JYHzPvlvDvmHy3XID7gzNetXPcnxFA7m5fo1+EvKPPlqkNVMdrSiOYigiZjzx5V6fMiHGJvrQPc/mgxkLcnAx/JsOA4QaekLwVXkBZ6fNl9KnKNAD046lrqe3LsuoG09eohv3T4KlF1bvCiAgNAmrd90U5/+5+ntX3uau04sUXYlDT0lHlrpuW+hAi0LthqUOEiz9x4O/nZdigZumgx24Y/NcNThDisqaSzCWWUcChplwa8gBljxxD9Wo8P0U+doTUx0cYbyXkAFkmos/ZhHeVU7txQ9gHa9kly+JYlHT0H/jQfzyEdr1NVX+tLZxXhFjBCqnZKUsvUbryzq6Uhc9kcqZT03ei0jRGu7mAXAvMg8mqsuIe/kk8VxI3YP30x6uUuL4Gt2DYKH8rbVKb9FRG4KUEvWqX8ZuPLEtd4eqS2F4dk4HGRca8d7gmI0nueXuBMM3XmmgKwZdDoTraCB6HQPDq1dQoPoVgFmnIhnWDjTSDKypBohXpsRJj/eKwS54fzfUQBf0F7JV8ESgIdBBX7YRzi5tet4emBXv6QyafPhw49AhfjAt3tWIl267I+hDb/rByw3qbiN0d+khwF3hlaXnVjjTG8nqCBRwTYbYJr7elj7beOP1QF97a+te036DIvrGpJd2QcPiutc0XZYxN0XxWg3vqpqb4TXgWgmxTf4GXDshtsmieohXRt0UxbM82n4FYYnIcohtcVN/l/gt4FoNsU12hi6sw4gL4y62U/6d4g6Hw+FwODA/B0geU6VFipgAAAAASUVORK5CYII=" type="text" placeholder="Going To"></input>
  
  
  <input class="button2"  onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Check in"></input>
 
  
  <input class="button3" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Check out"></input>
 
 
  <input class="button4"  placeholder="Travellers"></input>        
  </div>
  <div class="checkbox">
      <div><input type="checkbox" id="add-flight">&ensp;&nbsp;<div>Add a flight</div> </div>
      <div><input type="checkbox" id="add-car">&ensp;&nbsp;<div>Add a cars</div></div>
  </div>

  <button id="srchButton">Search</button> `;
  document.getElementById('change-page').innerHTML = div;
}

function goToFlights() {
  let div = `<div class="input_button">
      
      <input class="fbutton1" type="text" placeholder="Leaving From"></input>

     <i id="exchange" class="fa-solid fa-exchange"></i>

    
      <input class="fbutton2" type="text" placeholder="Going To"></input>

     
      <input type="date" value="2022-08-12" class="fbutton3" onfocus="(this.type='date')" onblur="(this.type='text')"
          ></input>

  </div>
  <button id="srcBtn">Search</button>`;

  document.getElementById('change-page').innerHTML = div;
  document.getElementById('srcBtn').addEventListener('click', () => {
    const from = document.getElementById('fbutton1').value;
    const to = document.getElementById('fbutton2').value;

    window.location.href = './flights.html';
  });
}
// function goToStays() {
//     window.location.href="./index.html"
// }
// function goToStays() {
//     window.location.href="./index.html"
// }
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
