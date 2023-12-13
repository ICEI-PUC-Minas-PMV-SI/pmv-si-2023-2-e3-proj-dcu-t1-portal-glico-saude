
import { imcCalcString } from '../../utils/imcCalc.js';
import median from '../../utils/median.js';
import editIcon from '../icons/edit.js';
import Modal from '../modal/modal.js';
import styles from './userInfo.css' assert { type: 'css' };

class UserInfo extends HTMLElement {
  constructor() {
    super();
    this.build()
    this.onchangeCallback = () => {};
    this.userInfo = null;
    this.currentUser = null;
  }

  build(){
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = this.template();
    this.shadowRoot.adoptedStyleSheets = [styles];
 

    this.prepareData();
    const modal = this.modal();
    
    const openModalButton = shadow.querySelector('#open-modal');

    openModalButton.addEventListener('click', () => {
      modal.open();
    });
    
    shadow.appendChild(modal);
  
    const userInfoElement = shadow.querySelector('.user-info');
    const userNameElement = shadow.querySelector('.user-name');

    console.log(this.currentUser)
    if(this.currentUser){
      const { name } = this.currentUser;
      userNameElement.innerHTML = name;
    } 

    const glicoData = JSON.parse(localStorage.getItem('glicose'));

    if(this.userInfo){
      const { age, diabetes, weight, height, imc } = this.userInfo;

      userInfoElement.innerHTML = `
        <h3 id="info">Informações de saúde</h3>
        <p>Idade: ${age} anos</p>
        <p>Diabetes: Tipo ${diabetes}</p>
        <p>IMC: ${imc} </p>
        <p>Peso: ${weight} kg</p>
        <p>Altura: ${height} m</p>
      `
    } else {
      modal.open();
    }

    if(glicoData){
      // const value = glicoData.map(v => parseInt(v.glicose));
      // const glicoMedian = median(value);
      const medianElement = document.createElement('p')
      medianElement.id = 'glico-median';
      // medianElement.innerHTML = `Glicose média: ${glicoMedian} mg/d`;
      userInfoElement.appendChild(medianElement);
    }

  }

  template(){
    const template = `
    <div class="statsContainer">
      <div class="avatar">
      <img 
        src="./static/img/blankAvatar.jpg"
        alt="Avatar"
        width="100"
        height="100"
      />
      </div>
      <p class="user-name"></p>
      <button id="open-modal" class="btn">Editar</button>


      <div class="user-info">
  
      </div>
      <hr class="solid" />
    </div>`

    return template
  }

  handleSave(data){
    const { age, diabetes, weight, height } = data;

    const calcAge = (date) => {
      const today = new Date();
      const birthDate = new Date(date);
      const age = today.getFullYear() - birthDate.getFullYear();
      return age;
    };

  
    localStorage.setItem('user-info', JSON.stringify({
      age: calcAge(age),
      diabetes,
      weight,
      height,
      imc: imcCalcString(weight, height),
    }));
    
    location.reload();
  }

  modal(){
    const htmlTemplate = 
    `<div>
      <form id="form">
        <label for="age">Data de nascimento</label><br>
        <input type="date" id="age" name="age" value="" min="0" step="1" required><br>
        <label for="diabetes">Diabetes</label><br>
        <select name="diabetes" id="diabetes" required>
        <option value="1">Tipo 1</option>
        <option value="2">Tipo 2</option>
        <option value="3">Gestacional</option>
        </select><br>
        <label for="weight">Peso</label><br>
        <input type="number" id="weight" name="weight" value="" step="0" placeholder="Peso em kg" required min="0"><br>
        <label for="height">Altura</label><br>
        <input type="number" id="height" name="height" value="" min="0.1" step=".01" required placeholder="Altura em metros"><br>
        <input type="submit" value="Salvar">
      </form>
      <style>${this.style()}</style>
    </div>`

    const newModal = new Modal('Informações de saúde', htmlTemplate, this.handleSave);
    return newModal;
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

  prepareData(data){
    const users = JSON.parse(localStorage.getItem('users'));
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    this.userInfo = userInfo;
    this.currentUser = users.find(user => user.email === currentUser?.email);
    if(!this.currentUser){
      alert('Usuário não encontrado');
    }
    if(!userInfo){
      const openModalButton = this.shadowRoot.querySelector('#open-modal');
      openModalButton.innerHTML = 'Adicionar' + editIcon;
    }
    else{
      const openModalButton = this.shadowRoot.querySelector('#open-modal');
      openModalButton.innerHTML = 'Editar ' + editIcon;
    }
  
  }
}

customElements.define('user-info-component', UserInfo);