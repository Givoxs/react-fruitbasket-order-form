import React from 'react';
import './App.css';
import Button from "./components/Button";
import logo from './assets/screenshot-logo.png'


function App() {
    function handleClick(e) {
        e.preventDefault();
        console.log(strawberryAmount, bananaAmount, kiwiAmount, appleAmount, firstName, lastName, age, zipCode, comment, termsConditions, deliver)
    }

    function resetCounter() {
        setStrawberryAmount(strawberryAmount - strawberryAmount);
        setBananaAmount(bananaAmount - bananaAmount);
        setKiwiAmount(kiwiAmount - kiwiAmount);
        setAppleAmount(appleAmount - appleAmount);
    }

    const [strawberryAmount, setStrawberryAmount] = React.useState(0)
    const [bananaAmount, setBananaAmount] = React.useState(0)
    const [appleAmount, setAppleAmount] = React.useState(0)
    const [kiwiAmount, setKiwiAmount] = React.useState(0)
    const [radioDay, toggleRadioDay] = React.useState(false)
    const [radioNight, toggleRadioNight] = React.useState(false)
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [age, setAge] = React.useState(0)
    const [zipCode, setZipCode] = React.useState("")
    const [deliver, setDeliver] = React.useState(0)
    const [comment, setComment] = React.useState("")
    const [termsConditions, toggleTermsConditions] = React.useState(false)

    return (
        <>
            <div className="logo-styling">
                <img src={logo} alt="logo"/>
            </div>

            <div className="buttons">

                <Button
                    emoticon="🍓"
                    fruitType="Aardbeien"
                    buttonDisabled={strawberryAmount === 0}
                    setAmount={setStrawberryAmount}
                    Amount={strawberryAmount}
                    fruitAmountCounter={strawberryAmount}
                    changeAmountNeg={() => setStrawberryAmount(strawberryAmount - 1)}
                    changeAmountPos={() => setStrawberryAmount(strawberryAmount + 1)}
                />
                <Button
                    emoticon="🍌"
                    fruitType="Bananen"
                    buttonDisabled={bananaAmount === 0}
                    setAmount={setBananaAmount}
                    Amount={bananaAmount}
                    fruitAmountCounter={bananaAmount}
                    changeAmountNeg={() => setBananaAmount(bananaAmount - 1)}
                    changeAmountPos={() => setBananaAmount(bananaAmount + 1)}
                />
                <Button
                    emoticon="🍎"
                    fruitType="Appels"
                    buttonDisabled={appleAmount === 0}
                    setAmount={setAppleAmount}
                    Amount={appleAmount}
                    fruitAmountCounter={appleAmount}
                    changeAmountNeg={() => setAppleAmount(appleAmount - 1)}
                    changeAmountPos={() => setAppleAmount(appleAmount + 1)}
                />
                <Button
                    emoticon="🥝"
                    fruitType="Kiwi"
                    buttonDisabled={kiwiAmount === 0}
                    setAmount={setKiwiAmount}
                    Amount={kiwiAmount}
                    fruitAmountCounter={kiwiAmount}
                    changeAmountNeg={() => setKiwiAmount(kiwiAmount - 1)}
                    changeAmountPos={() => setKiwiAmount(kiwiAmount + 1)}
                />
                <button
                    type="button"
                    onClick={() => resetCounter()}
                >RESET
                </button>
            </div>
            <form onSubmit={handleClick} className={"form-container"}>
                <label htmlFor="firstname">
                    Voornaam
                    <input
                        type="text"
                        name="firstname"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label htmlFor="lastname">
                    Achternaam
                    <input
                        type="text"
                        name="lastname"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label htmlFor="age">
                    Leeftijd
                    <input
                        type="number"
                        name="age"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <label htmlFor="zipcode">
                    Postcode:
                    <input
                        type="text"
                        name="zipcode"
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </label>
                Bezorgfrequentie
                <select>
                    <option value="every-day">Elke dag</option>
                    <option value="everyweek">Elke week</option>
                    onChange={(e) => setDeliver(!e.target.options.selectedIndex)}
                    {/*ik krijg de waarde niet uitgelezen in de console*/}
                </select>

                <section>
                    <label htmlFor="day">
                        Overdag
                        <input
                            type="radio"
                            name="day"
                            checked={radioDay}
                            onClick={() => toggleRadioDay(!radioDay && radioNight === false)}

                        />
                    </label>
                    <label htmlFor="night">
                        s'Avonds
                        <input
                            type="radio"
                            name="night"
                            checked={radioNight}
                            onClick={() => toggleRadioNight(!radioNight && radioDay === false)}
                        />
                    </label>
                </section>
                <label htmlFor="comment">
                    Opmerking:
                    <input
                        type="textarea"
                        name="comment"
                        onChange={(e) => setComment(e.target.value)}
                    />
                </label>
                <p>Ik ga akkoord met de voorwaarden
                    <label htmlFor="terms-and-conditions">
                        <input
                            type="checkbox"
                            name="terms-and-conditions"
                            onChange={() => toggleTermsConditions(!termsConditions)}
                        /></label>
                </p>

                <button
                    type="submit"
                >Verzend
                </button>

            </form>
        </>
    );
}

export default App;
