const infoRest = document.getElementById('infoRest');
const btnBest = document.getElementById('btnBest');
const btnOpen = document.getElementById('btnOpen');
const btnNotBest = document.getElementById('btnNotBest');


function renderInfo(restaurant) {
  let imageRest;
  if (restaurant.photos) {
    imageRest = restaurant.photos[0].getUrl({'maxWidith': 400,
      'maxHeight': 200});
  } else {
    imageRest = '../images/sinImagen.jpg';
  }
  infoRest.innerHTML += `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-danger waves-effect btn-sm" data-toggle="modal" data-target="#${restaurant.id}">
    ${restaurant.name}   <i class="fas fa-utensils"></i>
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="${restaurant.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${restaurant.name} <i class="fas fa-utensils"></i></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <img src="${imageRest}" class="img-fluid img-thumbnail" alt="Responsive image">
            <p> ${restaurant.vicinity} </p>
            
            </div>
            <div class="modal-footer">
                A Comerrr! <i class="fas fa-shoe-prints"></i>
            </div>
        </div>
        </div>
    </div>
    `;
}
  
btnBest.addEventListener('click', element => {
  infoRest.innerHTML = '';
  for (let i = 0; i < resultInfo.length; i++) {
    let imageRest;
    if (resultInfo[i].photos) {
      imageRest = resultInfo[i].photos[0].getUrl({'maxWidith': 400,
        'maxHeight': 200});
    } else {
      imageRest = '../images/sinImagen.jpg';
    }
    if (resultInfo[i].rating >= 4) {
      infoRest.innerHTML += `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-success waves-effect btn-sm" data-toggle="modal" data-target="#${resultInfo[i].id}">
    ${resultInfo[i].name}   <i class="fas fa-utensils"></i>
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="${resultInfo[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${resultInfo[i].name} <i class="fas fa-utensils"></i></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <img src="${imageRest}" class="img-fluid img-thumbnail" alt="Responsive image">
            <p>${resultInfo[i].vicinity}</p>
            </div>
            <div class="modal-footer">
                A Comerrr! <i class="fas fa-shoe-prints"></i>
            </div>
        </div>
        </div>
    </div>
    `;
    }
  }  
});
  
btnNotBest.addEventListener('click', element => {
  infoRest.innerHTML = '';
  for (let i = 0; i < resultInfo.length; i++) {
    let imageRest;
    if (resultInfo[i].photos) {
      imageRest = resultInfo[i].photos[0].getUrl({'maxWidith': 400,
        'maxHeight': 200});
    } else {
      imageRest = '../images/sinImagen.jpg';
    }
    if (resultInfo[i].rating <= 3.9) {
      infoRest.innerHTML += `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-primary waves-effect btn-sm" data-toggle="modal" data-target="#${resultInfo[i].id}">
    ${resultInfo[i].name}   <i class="fas fa-utensils"></i>
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="${resultInfo[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${resultInfo[i].name} <i class="fas fa-utensils"></i></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <img src="${imageRest}" class="img-fluid img-thumbnail" alt="Responsive image">
            <p>${resultInfo[i].vicinity}</p>
            </div>
            <div class="modal-footer">
                A Comerrr! <i class="fas fa-shoe-prints"></i>
            </div>
        </div>
        </div>
    </div>
    `;
    }
  }  
});
  
btnOpen.addEventListener('click', element => {
  infoRest.innerHTML = '';
  for (let i = 0; i < resultInfo.length; i++) {
    let imageRest;
    if (resultInfo[i].photos) {
      imageRest = resultInfo[i].photos[0].getUrl({'maxWidith': 400,
        'maxHeight': 200});
    } else {
      imageRest = '../images/sinImagen.jpg';
    }
    if (resultInfo[i].opening_hours) {
      if (resultInfo[i].opening_hours.open_now === true) {
        infoRest.innerHTML += `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-warning waves-effect btn-sm" data-toggle="modal" data-target="#${resultInfo[i].id}">
    ${resultInfo[i].name}   <i class="fas fa-utensils"></i>
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="${resultInfo[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${resultInfo[i].name} <i class="fas fa-utensils"></i></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <img src="${imageRest}" class="img-fluid img-thumbnail" alt="Responsive image">
            <p>${resultInfo[i].vicinity}</p>
            </div>
            <div class="modal-footer">
                A Comerrr! <i class="fas fa-shoe-prints"></i>
            </div>
        </div>
        </div>
    </div>
    `;
      }
    }
  }
});