function showAlert() {
    let container = document.getElementById("container");
    container.innerHTML =
        `<div class="alert alert-success 
            alert-dismissible fade show" role="alert">
            <p class = "lead">Su plaza ha sido guardada correctamente</p>
            <button type="button" class="btn-close" 
                data-bs-dismiss="alert" aria-label="Close">
            </button>
        </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("trigger-btn");
    if (button) {
        button.addEventListener("click", showAlert);
    }
});

function showAlertRed() {
    let container = document.getElementById("container");
    container.innerHTML =
        `<div class="alert alert-warning 
            alert-dismissible fade show" role="alert">
            <p class = "lead">Lo sentimos, no hay plazas libres actualmente</p>
            <button type="button" class="btn-close" 
                data-bs-dismiss="alert" aria-label="Close">
            </button>
        </div>`;
}
