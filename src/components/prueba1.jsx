import { useState } from "react"

function Register2() {
    const [inputValues, setInputValues] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })
    const [registrado, setRegistrado] = useState(false)

    const handleInputs = (evento) => {
        setInputValues({...inputValues, [evento.target.name]: evento.target.value})
    }

    const handleForm = () => {
        if (inputValues.name.length < 3) {
            alert("El nombre debe tener más de 3 caracteres.")
            return
        }
        if (inputValues.username.length < 5) {
            alert("El nombre de usuario debe tener más de 5 caracteres.")
            return
        }
        if (!inputValues.email.includes("@")) {
            alert("No es un correo.")
            return
        }
        if (inputValues.password.length < 8) {
            alert("La contraseña debe contener más de 8 caracteres.")
            return
        }
        alert("Te haz registrado con éxito.")
        setRegistrado(true)
    }


    return (
        <>
            {
                !registrado
                    ? <>
                        <h1>Registro</h1>
                        <hr />
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="inputName" name="name" onChange={handleInputs} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputUsername" className="form-label">Nombre de usuario</label>
                                <input type="text" className="form-control" id="inputUsername" name="username" onChange={handleInputs} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" name="email" onChange={handleInputs} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="inputPassword" name="password" onChange={handleInputs} />
                            </div>
                        </form>
                        <button className="btn btn-primary" onClick={handleForm}>Enviar</button>
                    </>
                    : <>
                        <h1>{inputValues.name}</h1>
                    </>
            }
        </>
    )
}

export default Register2