function showAlert() {
    let container = document.getElementById("container");
    let alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-success alert-dismissible fade show";
    alertDiv.role = "alert";

    let alertText = document.createElement("p");
    alertText.className = "lead";
    alertText.textContent = "Su plaza ha sido guardada correctamente";

    let closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "alert");
    closeButton.setAttribute("aria-label", "Close");

    alertDiv.appendChild(alertText);
    alertDiv.appendChild(closeButton);

    container.innerHTML = "";
    container.appendChild(alertDiv);
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("trigger-btn");
    if (button) {
        button.addEventListener("click", showAlert);
    }
});

function showAlertComplete() {
    let container = document.getElementById("container");
    let alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-warning alert-dismissible fade show";
    alertDiv.role = "alert";

    let alertText = document.createElement("p");
    alertText.className = "lead";
    alertText.textContent = "Lo sentimos, no hay plazas libres actualmente";

    let closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "alert");
    closeButton.setAttribute("aria-label", "Close");

    alertDiv.appendChild(alertText);
    alertDiv.appendChild(closeButton);

    container.innerHTML = "";
    container.appendChild(alertDiv);
}

function cerrarSesion() {
    let modal = new bootstrap.Modal(document.getElementById('logoutModal'));
    modal.show();
}
