import React, { useEffect, useState } from 'react'
import { useUserForm } from './../../hooks/Customhooks';

const UserForm = () => {

  const { form, setForm, handleChanges } = useUserForm();

  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value)
  }
  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation)
  }, [passwordConfirmation])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (

    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleChanges} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChanges} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword2" className="form-label">Repeat Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2" onChange={handlePasswordConfirmation} />
        </div>
        {!areEquals &&(        <div className="form-label">
            Las claves no son iguales
          </div>
       )}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button disabled={!areEquals} type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default UserForm
