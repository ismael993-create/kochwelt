function fmt(n) {
        let r = Math.round(n * 100) / 100;
        return Number.isInteger(r) ? String(r) : String(r).replace(/(\.\d{2})\d+$/, "$1").replace(/\.00$/, "");
      }

      function updateZutaten() {
        let personenInput = document.getElementById("personen");
        let personen = Math.max(1, parseInt(personenInput.value || "1", 10));
        let items = document.querySelectorAll("#zutatenListe li");

        items.forEach(li => {
          let basis = parseFloat(li.getAttribute("data-pro-menge")); 
          if (isNaN(basis)) return;
          let neueMenge = basis * personen;
          let span = li.querySelector(".menge");
          if (span) span.textContent = fmt(neueMenge);
        });
      }

     
      document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("personen").addEventListener("input", updateZutaten);
        document.getElementById("rechnenBtn").addEventListener("click", updateZutaten);
        
        updateZutaten();
      });

    