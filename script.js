let target = document.getElementById("target");
// let topPart = document.createElement("div");
// let container = document.createElement("div");
// let titleH1 = document.createElement("h1");
// let button1 = document.createElement("button");
// button1.classList.add("btn", "btn-warning", "rounded-pill");
// button1.innerHTML = "Player1";
// button1.disabled = true;
// titleH1.classList.add("d-flex", "justify-content-center", "py-3");
// titleH1.innerHTML = "Tic-tac-toe";
// container.classList.add("bg-info", "bg-gradient", "vh-100");
// topPart.classList.add("py-4");
// topPart.append(titleH1);

let boxes_container = document.createElement("div");
boxes_container.classList.add("container", "mainTable", "col-6", "bg-light");
for (let i = 1; i < 3; i++) {
  let row_container = document.createElement("div");
  row_container.classList.add("row", "row-2");
  for (let j = 0; j < 3; j++) {
    let row = `
    <div class="row row-2">
              <div class="square col-md-4 col-4">
                <div class="border square-in" id="${i + "-" + j}"></div>
              </div>
              <div class="square col-md-4 col-4">
                <div class="border square-in" id="${
                  i + 1 + "-" + (j + 1)
                }"></div>
              </div>
              <div class="square col-md-4 col-4">
                <div class="border square-in" id=${i + 2 + "-" + (j + 2)}></div>
              </div>
            </div>
    `;
    row_container.appendChild(row);
  }
}

let ownDiv = ``;

target.append(ownDiv);
