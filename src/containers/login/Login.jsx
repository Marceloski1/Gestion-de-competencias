
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Login.css'
import  maleUser from './../../assets/img/icons8-male-user-96.png' ;
import google from './../../assets/img/icons8-google-48.png' ; 
import password from './../../assets/img/icons8-password-96.png' ; 
import userName from  './../../assets/img/icons8-username-96.png'; 
import {useButtonVisibility } from './../../hooks/ButtonVisibilityContext'; // Asegúrate de ajustar la ruta según tu estructura de archivos

const Login = () => {
  const { toggleButtons } = useButtonVisibility();

  return (
    <div className='h-100 container  d-flex justify-content-center align-items-center '>
    <div className="bg-white p-5 shadow rounded-3  mt-5 custom-w gap-5 ">
      <div className="d-flex justify-content-center ">
        <img src={maleUser} alt="Login-icon text-center"className='imageLogin' style={{ height: '7rem' }} />
      </div>
      <div className="text-center fs-1 fw-bold">Login</div>
      <div className='contenrUserPass container'>
      <div className="input-group mt-4 ">
        <div className="input-group-text bg-info">
          <img src={userName} alt="icons8-username" style={{ height: '2rem' }} />
        </div>
        <input className="form-control" type="text" placeholder="UserName" />
      </div>
      <div className="input-group mt-1">
        <div className="input-group-text bg-info">
          <img src={password} alt="icons8-password" style={{ height: '2rem' }} />
        </div>
        <input className="form-control" type="password" placeholder="Password" />
      </div>
      </div>
      <div className="d-flex justify-content-around mt-1">
        <div className="d-flex align-items-center justify-content-center gap-1">
          <input className="form-check-input border" type="checkbox" />
          <div className="pt-1" style={{ fontSize: '0.9rem' }}>Remember me</div>
        </div>
        <div className="pt-1">
          <a href="#" className="text-decoration-none text-info fw-bold fst-italic" style={{ fontSize: '0.9rem' }}>
            Forgot your password
          </a>
        </div>
      </div>
      <div className="btn btn-info text-white p-2 bt mt-3" onClick={() => {
    console.log("Cambiando visibilidad de botones");
    toggleButtons()}} >Login</div> 
        <div className="px-3">Si aun no esta registrado </div>
        <a href="#" className="text-decoration-none text-info fw-semibold">Registrese aqui</a>
      <div className="p-3">
        <div className="border-bottom text-center" style={{ height: '0.9rem' }}>
          <span className="bg-white px-3">or</span>
        </div>
      </div>
      <div>  
  <div className="btn d-flex gap-2 justify-content-center align-items-center border mt-2 shadow-sm">  
    <img src={google} alt="icons8-google" style={{ height: '1.6rem' , width:' 2rem' }} />  
    <div className="fw-semibold text-secondary">Continue with Google</div>  
  </div>  
</div>
    </div>
    </div>
  );
};

export default Login;

  
    /*
     return (
        <div className="bg-white p-5 shadow rounded-3 container-md mb-4 custom-w">
          <div className="d-flex justify-content-center" >
            <img src={maleUser} alt="Login-icon text-center" style={{ height: '7rem' }} />
          </div>
          <div className="text-center fs-1 fw-bold">Login</div>
          <div className="input-group mt-4">
            <div className="input-group-text bg-info">
              <img src={userName} alt="icons8-username" style={{ height: '2rem' }} />
            </div>
            <input className="form-control" type="text" placeholder="UserName" />
          </div>
          <div className="input-group mt-1">
            <div className="input-group-text bg-info">
              <img src={password} alt="icons8-password" style={{ height: '2rem' }} />
            </div>
            <input className="form-control" type="password" placeholder="Password" />
          </div>
          <div className="d-flex justify-content-around mt-1">
            <div className="d-flex align-items-center gap-1">
              <input className="form-check-input" type="checkbox" />
              <div className="pt-1" style={{ fontSize: '0.9rem' }}>Remember me</div>
            </div>
            <div className="pt-1">
              <a href="#" className="text-decoration-none text-info fw-bold fst-italic" style={{ fontSize: '0.9rem' }}>
                Forgot your password
              </a>
            </div>
          </div>
         
          <div className="btn btn-info text-white w-100 mt-3">Login</div>
          <div className="d-flex justify-content-center mt-1">


            <div className="px-1">Don't have an account?</div>
            <a href="#" className="text-decoration-none text-info fw-semibold">Register</a>
          </div>
          <div className="p-3">
            <div className="border-bottom text-center" style={{ height: '0.9rem' }}>
              <span className="bg-white px-3">or</span>
            </div>
          </div>
          <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
            <img src={google} alt="icons8-google" style={{ height: '1.6rem' }} />
            <div className="fw-semibold text-secondary">Continue with Google</div>
          </div>
        </div>
      );

      */