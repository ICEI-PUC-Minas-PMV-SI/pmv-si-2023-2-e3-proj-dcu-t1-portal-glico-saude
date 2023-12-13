import median from "../../utils/median.js";
import sortData from "../../utils/sortData.js";

const barChartElement = document.getElementById('bar-chart');
const period = document.querySelector('#select-period');

const filterByPeriod = (data, period) => {
  const startDate = new Date();
  const endDate = new Date();

  startDate.setDate(startDate.getDate() - period);

  const convertToDate = (dateString) => { 
    const [day, month, year] = dateString.split('/')
    const newDate = new Date(+year, +month - 1, +day)
    return newDate
  };
  const filterData = data.filter(v => convertToDate(v.date) > startDate && convertToDate(v.date) < endDate);
  return filterData;
}

const processData = (value, period) => {
  let labels = [], values = [];
  const sortedData = sortData(value)
    
  const filteredData = filterByPeriod(sortedData, period)
  filteredData.map(v => {
    labels.push(v.date)
    values.push(parseInt(v.glicose))
  })

  return { labels, values }
}

window.onload = function () {
  let data = {};
  const glicose = localStorage.getItem('glicose');

  if(glicose){
    const sortedData = processData(JSON.parse(glicose), period.value)
    data = sortedData;
  }

  const { labels, values } = data;

  const barChartData = {
    labels,
    datasets: [
      {
        label: 'Glicose',
        data: values || 0,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Histórico de medições',
      },
    },
  };

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  script.async = true;
  document.body.appendChild(script);

  // load chart
  script.onload = function () {
    window.barChart = new Chart(barChartElement, {
      type: 'bar',
      data:  barChartData,
      options: barChartOptions
    });
  }

  period.addEventListener('change', (e) => {
    data = processData(JSON.parse(glicose), e.target.value)
    console.log(median(data.values))
  
    window.barChart.data.labels = data.labels;
    window.barChart.data.datasets[0].data = data.values;
    window.barChart.update();
    // const value = glicoData.map(v => parseInt(v.glicose));
 
    const glicoMedianEl = document
      .querySelector("user-info-component")
      .shadowRoot.querySelector("#glico-median");

    glicoMedianEl.innerHTML = `Glicose média: ${median(data.values)} mg/d`;
  })
}


