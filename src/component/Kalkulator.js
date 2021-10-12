import React, { useState } from "react";
import "./Kalkulator.css";

const Kalkulator = () => {
  // State
  const [firstValue, setFirstValue] = useState("");
  const [firstCheckedValue, setFirstCheckedValue] = useState(false);

  const [secondValue, setSecondValue] = useState("");
  const [secondCheckedValue, setSecondCheckedValue] = useState(false);

  const [thirdValue, setThirdValue] = useState("");
  const [thirdCheckedValue, setThirdCheckedValue] = useState(false);

  const [result, setResult] = useState(0);
  const [errors, setErrors] = useState(false);

  // parse to Interger
  const first = parseInt(firstValue);
  const second = parseInt(secondValue);
  const third = parseInt(thirdValue);

  //ACTIONS BUTTON
  // Handle Tambah
  const handlePlus = () => {
    if (firstCheckedValue && secondCheckedValue && thirdCheckedValue) {
      setResult(first + second + third);
      setErrors(false);
    } else if (firstCheckedValue && secondCheckedValue) {
      setResult(first + second);
      setErrors(false);
    } else if (firstCheckedValue && thirdCheckedValue) {
      const result = first + third;
      setErrors(false);
      setResult(result);
    } else if (secondCheckedValue && thirdCheckedValue) {
      const result = second + third;
      setErrors(false);
      setResult(result);
    } else {
      setErrors(true);
    }
  };

  // Handle Minus
  const handleMinus = () => {
    if (firstCheckedValue && secondCheckedValue && thirdCheckedValue) {
      setResult(first - second - third);
      setErrors(false);
    } else if (firstCheckedValue && secondCheckedValue) {
      setResult(first - second);
      setErrors(false);
    } else if (firstCheckedValue && thirdCheckedValue) {
      const result = first - third;
      setErrors(false);
      setResult(result);
    } else if (secondCheckedValue && thirdCheckedValue) {
      const result = second - third;
      setErrors(false);
      setResult(result);
    } else {
      setErrors(true);
    }
  };

  // Handle Kali
  const handleKali = () => {
    if (firstCheckedValue && secondCheckedValue && thirdCheckedValue) {
      setResult(first * second * third);
      setErrors(false);
    } else if (firstCheckedValue && secondCheckedValue) {
      setResult(first * second);
      setErrors(false);
    } else if (firstCheckedValue && thirdCheckedValue) {
      const result = first * third;
      setErrors(false);
      setResult(result);
    } else if (secondCheckedValue && thirdCheckedValue) {
      const result = second * third;
      setErrors(false);
      setResult(result);
    } else {
      setErrors(true);
    }
  };

  // Handle Bagi
  const handleBagi = () => {
    if (firstCheckedValue && secondCheckedValue && thirdCheckedValue) {
      setResult(first / second / third);
      setErrors(false);
    } else if (firstCheckedValue && secondCheckedValue) {
      setResult(first / second);
      setErrors(false);
    } else if (firstCheckedValue && thirdCheckedValue) {
      const result = first / third;
      setErrors(false);
      setResult(result);
    } else if (secondCheckedValue && thirdCheckedValue) {
      const result = second / third;
      setErrors(false);
      setResult(result);
    } else {
      setErrors(true);
    }
  };

  const InputText = ({
    name,
    value,
    placeholder,
    setValue,
    setCheckedValue,
  }) => {
    return (
      <input
        type="number"
        className="input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => {
          if (e.target.name === "firstValue") {
            e.target.value === ""
              ? setCheckedValue(false)
              : setCheckedValue(true);
          }

          if (e.target.name === "secondValue") {
            e.target.value === ""
              ? setCheckedValue(false)
              : setCheckedValue(true);
          }

          if (e.target.name === "thirdValue") {
            e.target.value === ""
              ? setCheckedValue(false)
              : setCheckedValue(true);
          }

          e.target.name === "firstValue"
            ? setValue(e.target.value)
            : e.target.name === "secondValue"
            ? setValue(e.target.value)
            : setValue(e.target.value);
        }}
      />
    );
  };

  const InputCheckbox = ({
    name,
    checked,
    checkedValue,
    setCheckedValue,
    value,
  }) => {
    return (
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => {
          if (e.target.name === "firstCheckedValue") {
            e.target.value !== "" && setCheckedValue(!checkedValue);
          }
          if (e.target.name === "secondCheckedValue") {
            e.target.value !== "" && setCheckedValue(!checkedValue);
          }
          if (e.target.name === "thirdCheckedValue") {
            e.target.value !== "" && setCheckedValue(!checkedValue);
          }
        }}
      />
    );
  };

  return (
    <div>
      <header className="Kalkulator-header">
        <div>kalkuator</div>
      </header>
      <div className="container">
        <div className="card">
          <div className="firts-value">
            <InputText
              placeholder="Nilai Pertama"
              name="firstValue"
              value={firstValue}
              setValue={setFirstValue}
              setCheckedValue={setFirstCheckedValue}
            />
            <InputCheckbox
              name="firstCheckedValue"
              value={firstValue}
              checked={firstValue && firstCheckedValue}
              checkedValue={firstCheckedValue}
              setCheckedValue={setFirstCheckedValue}
            />
          </div>
          <br />
          <div className="second-value">
            <InputText
              placeholder="Nilai Kedua"
              name="secondValue"
              value={secondValue}
              setValue={setSecondValue}
              setCheckedValue={setSecondCheckedValue}
            />

            <InputCheckbox
              name="secondCheckedValue"
              value={secondValue}
              checked={secondValue && secondCheckedValue}
              checkedValue={secondCheckedValue}
              setCheckedValue={setSecondCheckedValue}
            />
          </div>
          <br />
          <div className="three-value">
            <InputText
              placeholder="Nilai Ketiga"
              name="thirdValue"
              value={thirdValue}
              setValue={setThirdValue}
              setCheckedValue={setThirdCheckedValue}
            />

            <InputCheckbox
              name="thirdCheckedValue"
              value={thirdValue}
              checked={thirdValue && thirdCheckedValue}
              checkedValue={thirdCheckedValue}
              setCheckedValue={setThirdCheckedValue}
            />
          </div>

          <div className="action">
            <button className="plus" onClick={handlePlus}>
              +
            </button>
            <button className="minus" onClick={handleMinus}>
              -
            </button>
            <button className="kali" onClick={handleKali}>
              X
            </button>
            <button className="bagi" onClick={handleBagi}>
              /
            </button>
          </div>

          <hr />

          <div>
            {errors ? (
              <div className="errors">
                <div>Gagal Meng-eksekusi</div>
                <div>Cheklist minimal 2 input</div>
              </div>
            ) : (
              <div className="result">Hasil ({result})</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalkulator;
