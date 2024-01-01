document.getElementById("surveyForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
        const formData = {
            patientName: document.getElementById("patientName").value,
            fileNumber: document.getElementById("fileNumber").value,
            unit: document.getElementById("unit").value,
            treatmentSatisfaction: document.querySelector('input[name="treatmentSatisfaction"]:checked').value,
            facilitySatisfaction: document.querySelector('input[name="facilitySatisfaction"]:checked').value,
            comments: document.getElementById("comments").value,
        };


        alert("Data submitted successfully!!");


        // Reset the form
        document.getElementById("surveyForm").reset();
    }
});

function validateForm() {
    const patientName = document.getElementById("patientName").value;
    const fileNumber = document.getElementById("fileNumber").value;
    const unit = document.getElementById("unit").value;
    const treatmentSatisfaction = document.querySelector('input[name="treatmentSatisfaction"]:checked');
    const facilitySatisfaction = document.querySelector('input[name="facilitySatisfaction"]:checked');

    if (!patientName || !fileNumber || unit === "" || !treatmentSatisfaction || !facilitySatisfaction) {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}