import { ChangeEvent, useState } from 'react'
import './App.css'
import mouse from './assets/mouse.png'
import mouse2 from './assets/mouse-2.png'
import qr_code from './assets/qr-code.jpg'

const nameList = ['дарья', 'даша', 'дашунька', 'дашенька', 'дашулька']

function App() {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [isNameConfirmed, setIsNameConfirmed] = useState(false)
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const onNameConfirm = () => {
        const currentName = nameList.find(item => item.toLocaleLowerCase() === name.toLocaleLowerCase())
        if (currentName) {
            setError("")
            setIsNameConfirmed(true)
        } else if (name === '') {
            setError("Нужно ввести имя!")
        }
        else {
            setError("Похоже вы не тот, кто нам нужен")
        }

    }
    return (
        <>
            {!showResult
                ? <h1>{`Здравствуйте${isNameConfirmed ? ", " + name + '!' : '!'}`}</h1>
                : <h1>Супер! Фильнальный шаг</h1>
            }

            {!isNameConfirmed
                ? <>
                    <p className='subtitle'>Для продолжения подтвердите вашу личность</p>
                    <input className='input-name' type="text" placeholder='Введите имя' value={name} onChange={handleNameChange} />
                    <button type='submit' onClick={onNameConfirm}>Подтвердить</button>
                </>
                : <>
                    {!showResult
                        ? <>
                            <div className='helper-message'>
                                <p className='subtitle'>Я ваш виртуальный помощник, получается</p>
                                <img src={mouse} alt="mouse" />
                            </div>
                            <p className='message'>У меня для вас очень важная информация, вы готовы?</p>
                            <div className='buttons'>
                                <button type='submit' onClick={() => setShowResult(true)}>Да!</button>
                                <button type='submit' onClick={() => setShowResult(true)}>Нет, но да...</button>
                            </div>
                        </>
                        : <>
                            <p className='subtitle'>Покажите этот QR-код на ближайшем ПВЗ <span className='wb-text'>Wildberries</span></p>
                            <div className='qr-wrapper'>
                                <img className='qr-code' src={qr_code} alt="qr-code" />
                                <img className='qr-code-mouse' src={mouse2} alt="mouse2" />
                            </div>
                        </>
                    }
                </>

            }
            {error && <p className='error'>{error}</p>}
        </>
    )
}

export default App
