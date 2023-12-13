
import { imcCalcString } from '../../utils/imcCalc.js';
import Modal from '../modal/modal.js';
import styles from './addGlico.css' assert { type: 'css' };
import plusIcon from '../icons/plus.js';

class AddGlico extends HTMLElement {
  constructor() {
    super();
    this.build();
    this.onchangeCallback = () => {};
    this.userInfo = null;
    this.currentUser = null;
    this.modal = null;
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = this.template();
    shadow.adoptedStyleSheets = [styles];
    this.createModal();
    shadow.appendChild(this.modal);
  }

  template() {
    const template = `
      <button id="glicoBtn" class="btn">Glicose ${plusIcon}</button>
    `;

    return template;
  }

  handleSave(data) {
    const barChart = window.barChart;
    const glucose = JSON.parse(localStorage.getItem("glicose")) || [];
    const { glicose, date } = data;

    const localeDate = (dateString) =>
      new Date(dateString).toLocaleDateString("pt-BR", { timeZone: "UTC" });
    console.log(localeDate(date));
    const newGlicose = {
      glicose: glicose,
      date: localeDate(date),
    };

    const index = glucose.findIndex((item) => item.date === newGlicose.date);

    let chartLabels = barChart.data.labels;
    let chartDataset = barChart.data.datasets;

    console.log(index)
    console.log(chartLabels, chartDataset)
    console.log(glucose)
    if (index !== -1) {
      glucose[index] = newGlicose;
      chartLabels[index] = newGlicose.date;
      chartDataset[0].data[index] = newGlicose.glicose;
    } else {
      glucose.push(newGlicose);
      chartLabels.push(newGlicose.date)
      chartDataset[0].data.push(newGlicose.glicose)
    }

    localStorage.setItem("glicose", JSON.stringify(glucose));
    // location.reload();
    barChart.update();
  }

  createModal() {
    const dateNow = new Date().toISOString().split("T")[0];
    console.log(dateNow)
    
    const htmlTemplate = `<div>
      <form class="form" id="form"> 
        <label for="glicose">Valor</label>
        <input type="number" id="glicose" min="0" name="glicose" placeholder="mg/d" required>
        <br>
        <label for="data">Data</label>
        <input type="date" id="date" name="date" value=${dateNow} required>
        <br>
        <input type="submit" value="Salvar">
      </form>
      <style>${this.style()}</style>
    </div>`;

    const newModal = new Modal(
      "Glicose",
      htmlTemplate,
      this.handleSave
    );

    this.modal = newModal;

    const openModalButton = this.shadowRoot.querySelector("#glicoBtn");

    openModalButton.addEventListener("click", () => {
      newModal.open();
    });
  }

  style() {
    return `
      input,
      select {
        width: 100%;
        padding: 10px;
        margin-bottom: 16px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      label {
        display: block;
        margin-bottom: 8px;
        color: #333;
        transition: 0.3s;
      }

      input:not(:placeholder-shown) + label,
      select:not(:placeholder-shown) + label {
        transform: translateY(-20px);
        font-size: 12px;
        color: #3498db;
      }
      input[type="submit"] {
        background-color: #3498db;
        color: #fff;
        cursor: pointer;
      }
      input[type="submit"]:hover {
        background-color: #2980b9;
      }
    `
  }
}

customElements.define('add-glico-component', AddGlico);