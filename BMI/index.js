document.getElementById("BMIButton").addEventListener("click", calculateBMI);

function calculateBMI(){
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("BMIResult");

    if(!height || !weight){
        result.textContent = "Please enter valid height and weight!";
        return;
    }

    const BMI = (weight / (height*height)).toFixed(2);

    let category = "";
    if(BMI < 18.5){
        category = "Underweight";
    }
    else if(BMI < 25 && BMI >= 18.5){
        category = "Normal Weight";
    }
    else if (BMI >= 25 && BMI < 30){
        category = "OverWeight";
    }
    else{
        category = "Obese";
    }

    result.textContent = `BMI: ${category}: ${BMI}`;
}

let weightData = JSON.parse(localStorage.getItem("weightDataLocal")) || [];
document.getElementById("addWeightButton").addEventListener("click", addWeight);

function addWeight() {
    const date = document.getElementById("dateInput").value;
    const weight = parseFloat(document.getElementById("weightInput").value);

    if(!date || !weight){
        alert("Please enter valid date or weight");
        return;
    }

    weightData.push({date, weight: Number(weight)});
    localStorage.setItem("weightDataLocal", JSON.stringify(weightData));
    console.log("Adding weight:", date, weight);
    renderChart();
}

let ctx = document.getElementById("weightChart").getContext("2d");
let chart;

function renderChart(){
    console.log("Rendering chart with data:", weightData);
    const labels = weightData.map(entry => entry.date);
    const data = weightData.map(entry => entry.weight);

    if(chart){
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Weight (kg)",
        data: data,
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56, 189, 248, 0.2)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "#38bdf8"
      }]
    },
    options: { responsive: true }
  });
}

renderChart();