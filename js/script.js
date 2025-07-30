const form = document.getElementById("serviceForm");
const list = document.getElementById("serviceList");
const formSection = document.getElementById("form-section");

function showServiceForm() {
  formSection.classList.toggle("hidden");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll("input, textarea");
  const data = Array.from(inputs).map(input => input.value);

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${data[0]}</strong> - ${data[1]}<br>
    Tanggal: ${data[2]}<br>
    Servis: ${data[3]}<br>
    Catatan: ${data[4]}
  `;
  list.appendChild(li);

  form.reset();
  formSection.classList.add("hidden");
});
