import { Pet } from "./pet";
import { RequestPet } from "./requestPet";

let currPet: Pet[] = [],
  currPetIndex = -1,
  currReq: RequestPet[] = [],
  currReqIndex = -1,
  checkEnquiryAdded = false,
  addPetAdded = false,
  submitEnquiryAdded = false,
  totalPetsAdded = false;

const petName_div = document.createElement("div");
petName_div.classList.add("form-group");

const petName_label = document.createElement("label");
petName_label.setAttribute("for", "petName_field");
petName_label.innerText = "Animal Type";
petName_div.appendChild(petName_label);

const petName_field = document.createElement("input");
petName_field.classList.add("form-control");
petName_field.type = "text";
petName_field.required = true;
petName_field.name = "petName_field";
petName_div.appendChild(petName_field);

const petColor_div = document.createElement("div");
petColor_div.classList.add("form-group");

const petColor_label = document.createElement("label");
petColor_label.setAttribute("for", "petColor_label");
petColor_label.innerText = "Pet Color";
petColor_div.appendChild(petColor_label);

const petColor_field = document.createElement("input");
petColor_field.classList.add("form-control");
petColor_field.type = "text";
petColor_field.required = true;
petColor_field.name = "petColor_field";
petColor_div.appendChild(petColor_field);

const petAge_div = document.createElement("div");
petAge_div.classList.add("form-group");

const petAge_label = document.createElement("label");
petAge_label.setAttribute("for", "petAge_label");
petAge_label.innerText = "Pet Age";
petAge_div.appendChild(petAge_label);

const petAge_field = document.createElement("input");
petAge_field.classList.add("form-control");
petAge_field.type = "text";
petAge_field.required = true;
petAge_field.name = "petAge_field";
petAge_div.appendChild(petAge_field);

const petSubmitBtn = document.createElement("button");
petSubmitBtn.classList.add("btn", "btn-danger");
petSubmitBtn.innerText = "Submit Pet for Adoption";

const addPetDivAddChildren = () => {
  addPetAdded = true;
  (<HTMLDivElement>document.querySelector("#addPetDiv")).appendChild(
    petName_div
  );
  (<HTMLDivElement>document.querySelector("#addPetDiv")).appendChild(
    petColor_div
  );
  (<HTMLDivElement>document.querySelector("#addPetDiv")).appendChild(
    petAge_div
  );
  (<HTMLDivElement>document.querySelector("#addPetDiv")).appendChild(
    petSubmitBtn
  );
};

const addPetDivRemoveChildren = () => {
  if (addPetAdded) {
    (<HTMLDivElement>document.querySelector("#addPetDiv")).removeChild(
      petName_div
    );
    (<HTMLDivElement>document.querySelector("#addPetDiv")).removeChild(
      petColor_div
    );
    (<HTMLDivElement>document.querySelector("#addPetDiv")).removeChild(
      petAge_div
    );
    (<HTMLDivElement>document.querySelector("#addPetDiv")).removeChild(
      petSubmitBtn
    );
  }
  addPetAdded = false;
};

(<HTMLButtonElement>document.querySelector("#addPetBtn")).addEventListener(
  "click",
  () => {
    addPetDivAddChildren();
    submitEnquiryRemoveChildren();
    checkEnquiryDivRemoveChildren();
    totalPetsDivRemoveChildren();
  }
);

petSubmitBtn.addEventListener("click", () => {
  addPet();
});

const addPet = () => {
  if (isNaN(Number(petAge_field.value))) {
    alert("Please enter a number (in years).");
  }
  currPet[++currPetIndex] = new Pet({
    age: parseInt(petAge_field.value),
    name: petName_field.value,
    color: petColor_field.value,
  });
  petName_field.value = "";
  petAge_field.value = "";
  petColor_field.value = "";
};

const submitEnquiryDiv = document.createElement("div");
submitEnquiryDiv.classList.add("form-group");

const submitEnquiry_label = document.createElement("label");
submitEnquiry_label.setAttribute("for", "submitEnquiry_label");
submitEnquiry_label.innerText = "Which animal would you like adopt?";
submitEnquiryDiv.appendChild(submitEnquiry_label);

const submitEnquiry_field = document.createElement("input");
submitEnquiry_field.type = "text";
submitEnquiry_field.required = true;
submitEnquiry_field.classList.add("form-control");
submitEnquiry_field.name = "submitEnquiry_field";
submitEnquiryDiv.appendChild(submitEnquiry_field);

const enquiryBtn = document.createElement("button");
enquiryBtn.classList.add("btn", "btn-danger");
enquiryBtn.innerText = "Submit Enquiry";
submitEnquiryDiv.appendChild(enquiryBtn);

const submitEnquiryAddChildren = () => {
  submitEnquiryAdded = true;
  (<HTMLDivElement>document.querySelector("#submitEnquiryDiv")).appendChild(
    submitEnquiryDiv
  );
  submitEnquiry_field.value = "";
};

const submitEnquiryRemoveChildren = () => {
  if (submitEnquiryAdded)
    (<HTMLDivElement>document.querySelector("#submitEnquiryDiv")).removeChild(
      submitEnquiryDiv
    );
  submitEnquiryAdded = false;
};

(<HTMLButtonElement>(
  document.querySelector("#submitEnquiryBtn")
)).addEventListener("click", () => {
  submitEnquiryAddChildren();
  addPetDivRemoveChildren();
  checkEnquiryDivRemoveChildren();
  totalPetsDivRemoveChildren();
});

enquiryBtn.addEventListener("click", () => {
  currReq[++currReqIndex] = new RequestPet(submitEnquiry_field.value);
});

const checkEnquiryP = document.createElement("p");

const checkEnquiryDivAddChildren = () => {
  checkEnquiryAdded = true;
  if (currReq.length < 1) {
    checkEnquiryP.innerText = "There are currently no pending queries.";
  } else {
    checkEnquiryP.innerText = "";
    for (let i = 0; i < currReq.length; i++) {
      checkEnquiryP.innerHTML += `<p> ${i + 1}. ${currReq[i].petName} </p>`;
    }
  }
  (<HTMLDivElement>document.querySelector("#checkEnquiryDiv")).appendChild(
    checkEnquiryP
  );
};

const checkEnquiryDivRemoveChildren = () => {
  if (checkEnquiryAdded)
    (<HTMLDivElement>document.querySelector("#checkEnquiryDiv")).removeChild(
      checkEnquiryP
    );
  checkEnquiryAdded = false;
};

(<HTMLButtonElement>(
  document.querySelector("#checkEnquiryBtn")
)).addEventListener("click", () => {
  checkEnquiryDivAddChildren();
  submitEnquiryRemoveChildren();
  addPetDivRemoveChildren();
  totalPetsDivRemoveChildren();
});

const totalPetsP = document.createElement("p");

const totalPetsDivAddChildren = () => {
  totalPetsAdded = true;
  if (currPet.length < 1) {
    totalPetsP.innerText = "There are currently no pets in the store.";
  } else {
    totalPetsP.innerText = "";
    for (let i = 0; i < currPet.length; i++) {
      totalPetsP.innerHTML += `<p> ${i + 1}. Animal Type - ${
        currPet[i].name
      }, Pet Color - ${currPet[i].color}, Pet Age - ${currPet[i].age} </p>`;
    }
  }
  (<HTMLDivElement>document.querySelector("#totalPetsDiv")).appendChild(
    totalPetsP
  );
};

const totalPetsDivRemoveChildren = () => {
  if (totalPetsAdded)
    (<HTMLDivElement>document.querySelector("#totalPetsDiv")).removeChild(
      totalPetsP
    );
  totalPetsAdded = false;
};

(<HTMLButtonElement>document.querySelector("#totalPetsBtn")).addEventListener(
  "click",
  () => {
    totalPetsDivAddChildren();
    submitEnquiryRemoveChildren();
    addPetDivRemoveChildren();
    checkEnquiryDivRemoveChildren();
  }
);
