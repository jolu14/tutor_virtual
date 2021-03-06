import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Alumno_Sub extends Component {
    render() {
        return (
            <div className="col-2 pt-4 px-1 bg-primary" name="subNav">

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <button type="button" className="btn btn-outline-light btn-lg">
                            Subir<br/>Excel
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

if (document.getElementById('alumnosSub')) {
    ReactDOM.render(<Alumnos_Sub />, document.getElementById('alumnosSub'));
}
