import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loggedIn} from "../redux/actions/logInActions";
import { withRouter } from "../components/useRouter";
const Login = (props) => {
  const {loggedIn} = props;
  const [mensaje, guardarMensaje] = useState(null);
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Inserte un mail valido")
        .required("El mail no puede ir vacio"),
      password: Yup.string().required("El password es obligatorio"),
    }),
    onSubmit: (valores) => {
      if (
        valores.email === "demo@tipieapp.com" &&
        valores.password === "Tipie2022"
      ) {
        guardarMensaje("Bien! Redirigiendo...");
        setTimeout(() => {
          loggedIn();
          navigate("/", { replace: true });
        }, 1500);
      } else {
        guardarMensaje("Las credenciales son invalidas");
        setTimeout(() => {
          guardarMensaje(null);
        }, 2000);
      }
    },
  });

  const mostrarMensaje = () => {
    return (
      <div className="bg-red-800 py-2 px-3 w-full my-3 max-w-sm text-center text-white mx-auto">
        <p>{mensaje}</p>
      </div>
    );
  };
  return (
    <div>
      <h1 className="text-center text-4xl cursor-pointer font-light mt-6">
        Login
      </h1>
      {mensaje && mostrarMensaje()}
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text gray-700 leading-light focu:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email usuario"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.email && formik.errors.email ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.email}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text gray-700 leading-light focu:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="passwords"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.password && formik.errors.password ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.password}</p>
              </div>
            ) : null}

            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900"
              value="Iniciar Sesión"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: () => dispatch(loggedIn())
  };
};
export default connect("", mapDispatchToProps)(withRouter(Login));
