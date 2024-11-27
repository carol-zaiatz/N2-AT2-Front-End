function zoomImage(img) {
    const isZoomed = img.style.transform === "scale(1.5)";
    img.style.transform = isZoomed ? "scale(1)" : "scale(1.5)";
    img.style.transition = "transform 0.3s ease";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
  
        if (nome && email && senha) {
          alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}`);
          form.reset();
          const modal = document.querySelector("#loginModal");
          const bootstrapModal = bootstrap.Modal.getInstance(modal);
          bootstrapModal.hide(); 
        } else {
          alert("Por favor, preencha todos os campos.");
        }
      });
    }
  });
  