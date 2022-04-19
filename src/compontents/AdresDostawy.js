import React from 'react';
import PhoneInput from 'react-phone-number-input'
import { Button } from 'react-bootstrap';

const AdresDostawy = (props) => {

    const osobisty = (<div className='mt-5'><p style={{ textAlign: 'center' }}><strong>Wybrano odbiór osobisty!</strong></p>
        <div className="container">
            <form className="d-flex flex-column justify-content-center align-items-center flex-wrap" onSubmit={(e) => props.setReady(e,'home')}>
                <label>
                    <fieldset disabled={props.isReady}>
                    <p style={{ textAlign: 'center' }}>Wybierz miasto: </p>
                    <select style={{width: '250px'}} value={props.selectedCity} onChange={props.cityPicker}>
                        <option value="Ozorków">Ozorków</option>
                        <option value='Warszawa'>Warszawa</option>
                        <option value="Łódź">Łódź</option>
                        <option value='Kraków'>Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value='Gdańsk'>Gdańsk</option>
                    </select>
                    <p style={{ textAlign: 'center' }}>Twoje dane: </p>
                    <input required className='dostawa-input' value={props.userName} onChange={props.userNameHandler} type='text' placeholder='imię'></input>
                    <input required className='dostawa-input' value={props.userSurnName} onChange={props.userSurnNameHandler} type='text' placeholder='nazwisko'></input>
                    <PhoneInput required defaultCountry={'PL'} className='dostawa-input' placeholder='numer telefonu' value={props.phoneNumber} onChange={props.setPhoneNumber}></PhoneInput>
                    </fieldset>
                </label>
                {props.isReady ? <Button onClick={props.anuluj} className="mt-3">Wyczyść</Button> : <Button type='submit' className="mt-2">Zatwierdź</Button>}
            </form>
        </div>
    </div>)



    const kurier = (<div className='mt-5'><p style={{ textAlign: 'center' }}><strong>Wybrano dostawę kurierem!</strong></p>
        <div className="container">
            <form className="d-flex flex-column justify-content-center align-items-center flex-wrap" onSubmit={(e) => props.setReady(e,'kurier')}>

                <label style={{maxWidth: '350px'}}>
                    <fieldset disabled={props.isReady}>
                    <p style={{textAlign:'center'}}>Wprowadź swoje dane:</p>
                    <input required className='dostawa-input' value={props.userName} onChange={props.userNameHandler} type='text' placeholder='imię'></input>
                    <input required className='dostawa-input' value={props.userSurnName} onChange={props.userSurnNameHandler} type='text' placeholder='nazwisko'></input>
                    <input required className='dostawa-input' value={props.street} onChange={props.streetHandler} type='text' placeholder='ulica'></input>
                    <input required className='dostawa-input' value={props.city} onChange={props.cityHandler} type='text' placeholder='miasto'></input>
                    <PhoneInput required defaultCountry={'PL'} className='dostawa-input' placeholder='numer telefonu' value={props.phoneNumber} onChange={props.setPhoneNumber}></PhoneInput>
                    </fieldset>
                </label>
                {props.isReady ? <Button onClick={props.anuluj} className="mt-3">Wyczyść</Button> : <Button type='submit' className="mt-3">Zatwierdź</Button>}
            </form>
            
        </div>
    </div>)

    let activeItem = props.active.filter((item) => item.css === 'aktywna')

    return (
        <>
            {activeItem[0].cena === 0 ? osobisty : kurier}
        </>
    );
}

export default AdresDostawy;