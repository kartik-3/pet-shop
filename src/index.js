"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pet_1 = require("./pet");
var requestPet_1 = require("./requestPet");
var petName_div = document.createElement("div");
petName_div.classList.add("form-group");
var petName_label = document.createElement("label");
petName_label.setAttribute("for", "petName_field");
petName_label.innerText = "Animal Type";
petName_div.appendChild(petName_label);
var petName_field = document.createElement("input");
petName_field.classList.add("form-control");
petName_field.type = "text";
petName_field.name = "petName_field";
petName_div.appendChild(petName_field);
var petColor_div = document.createElement("div");
petColor_div.classList.add("form-group");
var petColor_label = document.createElement("label");
petColor_label.setAttribute("for", "petColor_label");
petColor_label.innerText = "Pet Color";
petColor_div.appendChild(petColor_label);
var petColor_field = document.createElement("input");
petColor_field.classList.add("form-control");
petColor_field.type = "text";
petColor_field.name = "petColor_field";
petColor_div.appendChild(petColor_field);
var petAge_div = document.createElement("div");
petAge_div.classList.add("form-group");
var petAge_label = document.createElement("label");
petAge_label.setAttribute("for", "petAge_label");
petAge_label.innerText = "Pet Age";
petAge_div.appendChild(petAge_label);
var petAge_field = document.createElement("input");
petAge_field.classList.add("form-control");
petAge_field.type = "text";
petAge_field.name = "petAge_field";
petAge_div.appendChild(petAge_field);
var petSubmitBtn = document.createElement("button");
petSubmitBtn.classList.add("btn", "btn-danger");
petSubmitBtn.innerText = "Submit Pet for Adoption";
var addPetDivAddChildren = function () {
    addPetAdded = true;
    document.querySelector("#addPetDiv").appendChild(petName_div);
    document.querySelector("#addPetDiv").appendChild(petColor_div);
    document.querySelector("#addPetDiv").appendChild(petAge_div);
    document.querySelector("#addPetDiv").appendChild(petSubmitBtn);
};
var addPetDivRemoveChildren = function () {
    if (addPetAdded) {
        document.querySelector("#addPetDiv").removeChild(petName_div);
        document.querySelector("#addPetDiv").removeChild(petColor_div);
        document.querySelector("#addPetDiv").removeChild(petAge_div);
        document.querySelector("#addPetDiv").removeChild(petSubmitBtn);
    }
    addPetAdded = false;
};
document.querySelector("#addPetBtn").addEventListener("click", function () {
    addPetDivAddChildren();
    submitEnquiryRemoveChildren();
    checkEnquiryDivRemoveChildren();
    totalPetsDivRemoveChildren();
});
var currPet = [], currPetIndex = -1, currReq = [], currReqIndex = -1, checkEnquiryAdded = false, addPetAdded = false, submitEnquiryAdded = false, totalPetsAdded = false;
petSubmitBtn.addEventListener("click", function () {
    addPet();
});
var addPet = function () {
    if (isNaN(Number(petAge_field.value))) {
        alert("Please enter a number (in years).");
    }
    currPet[++currPetIndex] = new pet_1.Pet({
        age: parseInt(petAge_field.value),
        name: petName_field.value,
        color: petColor_field.value,
    });
    petName_field.value = "";
    petAge_field.value = "";
    petColor_field.value = "";
};
var submitEnquiryDiv = document.createElement("div");
submitEnquiryDiv.classList.add("form-group");
var submitEnquiry_label = document.createElement("label");
submitEnquiry_label.setAttribute("for", "submitEnquiry_label");
submitEnquiry_label.innerText = "Which animal would you like adopt?";
submitEnquiryDiv.appendChild(submitEnquiry_label);
var submitEnquiry_field = document.createElement("input");
submitEnquiry_field.type = "text";
submitEnquiry_field.classList.add("form-control");
submitEnquiry_field.name = "submitEnquiry_field";
submitEnquiryDiv.appendChild(submitEnquiry_field);
var enquiryBtn = document.createElement("button");
enquiryBtn.classList.add("btn", "btn-danger");
enquiryBtn.innerText = "Submit Enquiry";
submitEnquiryDiv.appendChild(enquiryBtn);
var submitEnquiryAddChildren = function () {
    submitEnquiryAdded = true;
    document.querySelector("#submitEnquiryDiv").appendChild(submitEnquiryDiv);
    submitEnquiry_field.value = "";
};
var submitEnquiryRemoveChildren = function () {
    if (submitEnquiryAdded)
        document.querySelector("#submitEnquiryDiv").removeChild(submitEnquiryDiv);
    submitEnquiryAdded = false;
};
(document.querySelector("#submitEnquiryBtn")).addEventListener("click", function () {
    submitEnquiryAddChildren();
    addPetDivRemoveChildren();
    checkEnquiryDivRemoveChildren();
    totalPetsDivRemoveChildren();
});
enquiryBtn.addEventListener("click", function () {
    currReq[++currReqIndex] = new requestPet_1.RequestPet(submitEnquiry_field.value);
});
var checkEnquiryP = document.createElement("p");
var checkEnquiryDivAddChildren = function () {
    checkEnquiryAdded = true;
    if (currReq.length < 1) {
        checkEnquiryP.innerText = "There are currently no pending queries.";
    }
    else {
        checkEnquiryP.innerText = "";
        for (var i = 0; i < currReq.length; i++) {
            checkEnquiryP.innerHTML += "<p> " + (i + 1) + ". " + currReq[i].petName + " </p>";
        }
    }
    document.querySelector("#checkEnquiryDiv").appendChild(checkEnquiryP);
};
var checkEnquiryDivRemoveChildren = function () {
    if (checkEnquiryAdded)
        document.querySelector("#checkEnquiryDiv").removeChild(checkEnquiryP);
    checkEnquiryAdded = false;
};
(document.querySelector("#checkEnquiryBtn")).addEventListener("click", function () {
    checkEnquiryDivAddChildren();
    submitEnquiryRemoveChildren();
    addPetDivRemoveChildren();
    totalPetsDivRemoveChildren();
});
var totalPetsP = document.createElement("p");
var totalPetsDivAddChildren = function () {
    totalPetsAdded = true;
    if (currPet.length < 1) {
        totalPetsP.innerText = "There are currently no pets in the store.";
    }
    else {
        totalPetsP.innerText = "";
        for (var i = 0; i < currPet.length; i++) {
            totalPetsP.innerHTML += "<p> " + (i + 1) + ". Pet Type - " + currPet[i].name + ", Pet Color - " + currPet[i].color + ", Pet Age - " + currPet[i].age + " </p>";
        }
    }
    document.querySelector("#totalPetsDiv").appendChild(totalPetsP);
};
var totalPetsDivRemoveChildren = function () {
    if (totalPetsAdded)
        document.querySelector("#totalPetsDiv").removeChild(totalPetsP);
    totalPetsAdded = false;
};
document.querySelector("#totalPetsBtn").addEventListener("click", function () {
    totalPetsDivAddChildren();
    submitEnquiryRemoveChildren();
    addPetDivRemoveChildren();
    checkEnquiryDivRemoveChildren();
});
