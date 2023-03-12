const baseUrl = "http://localhost/hospital-project/backend";
const profile = document.getElementById("profile");
const serviceList = document.getElementById("serviceList");
const meds = document.getElementById("meds");
const hospitalNames = document.getElementById("hospitalNames");
const roomInfo = document.getElementById("roomInfo");
const submitHospital = document.getElementById("submitHospital");
const submitMedics = document.getElementById("submitMedics");
const submitServices = document.getElementById("submitServices");
const savedMedics = document.getElementById("savedMedics");
const savedServices = document.getElementById("savedServices");

profile.addEventListener("click", () => {
  window.location.href = "./profile.html";
});

axios({
  url: `${baseUrl}/getservices.php`,
}).then((res) => {
  const services = res.data.services;
  services.forEach((service) => {
    serviceList.innerHTML += ` <option>${service.description}</option>`;
  });
  serviceList.addEventListener("change", (event) => {
    selectedService = event.target.value;
  });
  submitServices.addEventListener("click", () => {
    savedServices.innerHTML += `<p>${selectedService}</p>`;
  });
});

axios({
  url: `${baseUrl}/getmedications.php`,
}).then((res) => {
  const medics = res.data.meds;
  medics.forEach((med) => {
    meds.innerHTML += ` <option>${med.name}</option>`;
  });
  meds.addEventListener("change", (event) => {
    selectedMed = event.target.value;
  });
  submitMedics.addEventListener("click", () => {
    savedMedics.innerHTML += `<p>${selectedMed}</p>`;
  });
});
axios({
  url: `${baseUrl}/gethospitals.php`,
}).then((res) => {
  const hospitalsArray = res.data.hospitals;
  hospitalsArray.forEach((hospital) => {
    hospitalNames.innerHTML += ` <option>${hospital.name}</option>`;
  });
});
axios({
  url: `${baseUrl}/getrooms.php`,
}).then((res) => {
  const roomsArray = res.data.rooms;
  roomsArray.forEach((room) => {
    roomInfo.innerHTML += ` <option>${room.room_number}/Cost:${room.cost_day_usd}/${room.is_vip}</option>`;
  });
});
