function Form() {
    return (
        <div className='container mt-5'>
            <h2>Formulario</h2>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        type='text'
                        className='form-control'
                        id='nombre'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Apellido</label>
                    <input
                        type='text'
                        className='form-control'
                        id='apellido'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Correo Electrónico</label>
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                        type='number'
                        className='form-control'
                        id='telefono'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        id='password'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Confirmar Password</label>
                    <input
                        type='password'
                        className='form-control'
                        id='passwordconfirmacion'
                    />
                </div>

                <button
                    type='submit'
                    className='btn btn-primary'>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Form
