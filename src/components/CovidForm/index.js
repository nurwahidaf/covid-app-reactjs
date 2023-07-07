import { useState } from 'react';
import StyledCovidForm from './CovidForm.styled';
import Alert from '../Alert';
import form__img from '../../assets/form.png';
import Button from '../Ui/Button';

const CovidForm = (props) => {
  const { provinces, setProvinces } = props;

  const optionStatus = [
    { value: 'positif', label: 'Positif' },
    { value: 'sembuh', label: 'Sembuh' },
    { value: 'dirawat', label: 'Dirawat' },
    { value: 'meninggal', label: 'Meninggal' }
  ]

  const initialValues = {
    province: '',
    status: '',
    total: ''
  }
  
  const [values, setValues] = useState(initialValues);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const { province, status, total } = values;
  
  const [isProvinceError, setIsProvinceError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isTotalError, setIsTotalError] = useState(false);
  
  const validation = () => {
    if (province === '') {
      setIsProvinceError(true);
      return false;
    }
    else if (status === '') {
      setIsProvinceError(false);
      setIsStatusError(true);
      return false;
    }
    else if (total === '') {
      setIsStatusError(false);
      setIsTotalError(true);
      return false;
    }
    else {
      setIsTotalError(false);
      return true;
    }
  }
  
  const updateProvinces = () => {
    const index = provinces.findIndex((item) => item.kota === province);
    const foundProvince = provinces.find((item) => item.kota === province);
    
    if (status === 'positif') {
      provinces[index] = {
        ...foundProvince,
        kasus: parseInt(foundProvince.kasus) + parseInt(total)
      }
    }
    else if (status === 'sembuh') {
      provinces[index] = {
        ...foundProvince,
        sembuh: parseInt(foundProvince.sembuh) + parseInt(total)
      }
    }
    else if (status === 'dirawat') {
      provinces[index] = {
        ...foundProvince,
        dirawat: parseInt(foundProvince.dirawat) + parseInt(total)
      }
    }
    else if (status === 'meninggal') {
      provinces[index] = {
        ...foundProvince,
        meninggal: parseInt(foundProvince.meninggal) + parseInt(total)
      }
    }
    
    setProvinces([...provinces]);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    validation() && updateProvinces();
  }

  return (
    <StyledCovidForm>
      <section>
        <div className="form__left">
          <img 
            src={form__img}
            alt="" 
          />
        </div>
        <div className="form__right">
          <h2>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            <div className="form__content">
              <label htmlFor="province">Province</label>
              <select
                id="province"
                name="province"
                className="form__input"
                value={province}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                {
                  provinces.map((province, index) => {
                    return (
                      <option value={province.kota} key={index}>{province.kota}</option>
                    )
                  })
                }
              </select>
              {isProvinceError && <Alert />}
            </div>
            <div className="form__content">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                className="form__input"
                value={status}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                {
                  optionStatus.map((item, index) => {
                    return (
                      <option value={item.value} key={index}>{item.label}</option>
                    )
                  })
                }
              </select>
              {isStatusError && <Alert />}
            </div>
            <div className="form__content">
              <label htmlFor="total">Total</label>
              <input
                id="total"
                name="total"
                type="number"
                className="form__input"
                value={total}
                onChange={handleInputChange}
              />
              {isTotalError && <Alert />}
            </div>
            <div>
                <Button full="true">Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </StyledCovidForm>
  )
}

export default CovidForm;