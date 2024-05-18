import Alert from './Alert';
import React, { useState } from 'react'

export default function Navbar(props) {
    // const [msg, setMsg] = useState()
    const [text, setText] = useState('');
    const UpperCase = () => {
        setText(text.toUpperCase())
        // setAlert('success')
        showAlert('Converted to UpperCase','success')
        // setMsg('Converted to UpperCase')
        
    }
    const LowerCase = () => {
        setText(text.toLowerCase())
        showAlert('Converted to LowerCase','success')
    }
    const TextCopy = () => {
        document.getElementById('floatingTextarea2').select();
        navigator.clipboard.writeText(document.getElementById('floatingTextarea2').value)
        showAlert('Texts has been copied to the clipboard','success')
    }
    const Clear = () => {
        setText('')
        // setAlert('success')
        showAlert('TextBox is Empty now...','Success')
        // setMsg('TextBox is Empty now...')
    }


    //event handeler for textbox
    const handelonChange = (event) => {
        setText(event.target.value)

    }

    // for dark mode
    const [mode, setMode] = useState({ color: 'black', backgroundColor: 'white' })
    const [select, setSelect] = useState('Dark Mode')
    const [alert, setAlert] = useState(null)
    const showAlert=(message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
           setAlert(null) 
        }, 2000);
    }
    const toggleMode = () => {
        if (mode.color === 'white') {
            setMode({ color: 'black', backgroundColor: 'white' })
            setSelect('Dark Mode')
            document.body.style.backgroundColor = 'white'
            // setAlert('success')
            showAlert('Light mode enabled','success')
            // setMsg('Light Mode has been enabled')
        }
        else {
            setMode({ color: 'white', backgroundColor: 'rgb(25, 24, 24)' })
            setSelect('Light Mode')
            document.body.style.backgroundColor = 'black'
            // setAlert('success')
            showAlert('Dark mode enabled','success')
            // setMsg('Dark Mode has been enabled')

        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={mode}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={mode} href="/"><strong>{props.title}</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <a className="nav-items" style={mode} aria-current="page" href="/">Home</a>
                            </li>
                            <li>
                                <a className="nav-items" style={mode} href="/">About</a>
                            </li>
                            <li>
                                <a className="nav-items" style={mode} href="/">Services</a>
                            </li>
                        </ul>
                    </div>
                    <div class="form-check form-switch">
                        <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{select}</label>
                    </div>
                </div>
            </nav>
            <Alert alert={alert}/>
            <div className="container my-3">
                <textarea style={mode} className="form-control" placeholder='Enter the text here...' onChange={handelonChange} value={text} id="floatingTextarea2" rows={8}></textarea>
                <div>
                    <button className='btn btn-primary' onClick={UpperCase}>UpperCase</button>
                    <button className='btn btn-primary' onClick={LowerCase}>LowerCase</button>
                    <button className='btn btn-primary' onClick={TextCopy}>Copy</button>
                    <button className='btn btn-primary' onClick={Clear}>Clear</button>
                </div>
                <h3 style={mode}>Text Summary</h3>
                <p style={mode}>Total characters: {text.length}, Total words: {text.trim().split(' ').length}</p>
                <p></p>
            </div>

        </>
    )
}
