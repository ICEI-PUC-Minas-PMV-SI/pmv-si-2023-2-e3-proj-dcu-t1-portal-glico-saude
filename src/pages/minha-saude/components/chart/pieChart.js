import randomRgbColors from "../../utils/randomRgbColors.js";

export const loadData = () => {
  const sf36Store = JSON.parse(localStorage.getItem('sf36'));
  if (!sf36Store) {
    return;
  }

  const sf36StoreValues = Object.values(sf36Store);

  const labels = [
    "Capacidades funcionais",
    "Aspectos físicos",
    "Dor",
    "Estado geral de saúde",
    "Vitalidade",
    "Aspectos sociais",
    "Aspectos emocionais",
    "Saúde mental",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: sf36StoreValues,
        backgroundColor: randomRgbColors(8),
        hoverOffset: 4,
      },
    ],
  };

  loadChart(data);

  const quizResult = document.querySelector(".quizResult");

  const labelsHtml = labels.map((label, index) => {
    return `
      <p>${label}: ${sf36StoreValues[index]}%</p>
    `;
  });

  const result = `
    <h2>Resultado do Quiz</h2>
    ${labelsHtml.join("")}
  `;

  quizResult.innerHTML = result;
};

const loadChart = (data) => {
  const pieChartElement = document.getElementById('pieChart');
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  script.async = true;
  document.body.appendChild(script);

  // load chart
  script.onload = function () {
    new Chart(pieChartElement, {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false,
            labels: {
              font: {
                size: 16
              }
            }
          },
          // 
          // title: {
          //   display: true,
          //   text: 'SF-36'
          // }
        }
      }
    });
  }
}

loadData();