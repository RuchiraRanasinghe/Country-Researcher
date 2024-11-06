loadItems();

async function loadItems() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
            <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                    <h3 class="card-text fw-bold">${element.name.common}</h3>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
        `;        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}

async function SearchCountry(){
    let SearchCountry = document.getElementById("searchCountry").value;
    console.log(SearchCountry);
    
    
        let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        
        console.log(element);
        if (SearchCountry == element.name.common) {
        body=`
            <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                    <h3 class="card-text fw-bold">${element.name.common}</h3>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
        `;}   
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    }
