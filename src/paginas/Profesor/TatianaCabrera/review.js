import '../profesor.css';
import '../Perfil.css';
import NavBar from '../../../componentes/NavBar/navbar';
import Header from '../../../componentes/Header/header';

function Profesor1() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div>
        <div class="box">
            <div class="top">
                <div class="InfoProfesor">
                    <div class="SubCaja">
                        <img class="center"src="data:image/png;base64,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"/>
                        <h1>Tatiana Cabrera</h1>
                        <div class="star"><div class="dorado"> ★★★★</div>★</div>
                    </div>
                </div>

                <div class="SubCaja">
                    <div class="Comentario">    
                        <div class="texto">Muy buena profesora, sabe explicar bien temas de instalación en css</div>
                        <div class="extras"> 
                            <div>Algoritmos y estrusctura de datos</div>
                            2023-1 <br></br>
                            23<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQhJREFUSEvV1b0uBVEQwPHfVSl1GiQ0vnqeQSs6vRfQ+ahI3Ci8gFYp0XgBnegJnVAqFRINmcSVYyPO7r3nFE65mf3/Z3bOzPZUPr3KfF0F29hFH8dtkusi2MRZAp3FY07SVrCGS4wlwBk8lxCs4ArjCSzAIcieXAXzuMZEg3SI/SydbJOfMP0LaBH3XQUbiMwi60FlH20gjZgH7OE8nqef6BZLX8GjCAJxh+WmIM12VME3O63gXwliAGMQf/SgZAWxUk5qCV4xibdagiPsDK5u6Sa/YwovtQSn2EoHr2QFcUnmmiu85CRfYL25WlJB7KIDLAy5i1Zx85dgiL2WfyX3P8gTMhHVBZ9JhDUZhzup1AAAAABJRU5ErkJggg=="/>  
                            4<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXBJREFUSEvF1S9IZGEUBfDfrKAipkU0CIoKu1gFg0VXlq0Wm1hEjGIxaHD9EwS1GAwGsYjNvFtEBW0KgkUt/g0bVrYZFhHlgzcwjjM73xuU/drjnXvOd+49776Mdz6Zd+b33wRWMISaMhyeYhw/Qm0hB1+xXQZxbskF2ooJbGIAc5iOEHpKMNnLvnjOd1CL36hGKy7fWiD0fR376I4gD5BUDvbQg+FEKEYjWqARt/iLOtzHsKdxMJUMNgx5MJI8VYvO8QnfUsY0ukVZ4Icc2zFGUgukXR/RAtdoKnHlY3TkYCqTUOSXXaEl/0vuwyI+/0PkDO057zcKBOIEE/hZbFUU4l/GGBaS4oD5jln8QSfC/nl1YvodML/QkBAdoR9beMQXHBRzHSPQix3coBld2EUVRhFWe9ETIzCPSSxhFYf4iDWMlMpxjEBY2TN5RGEZhv/Gw1sI1COkJRBWIEQwDPWuFHmaFMVwFcTEtKhs8lD4DNKhShnrH122AAAAAElFTkSuQmCC"/>
                        </div>            
                    </div>
                </div>                    
            </div>
            <div class="Interbox">
                <h1>Comentarios acerca del profesor</h1>
                <hr class="RedLine"/>
                <div class="texto"> 
                    Por momentos su clase es bastante bien, pero hay otros donde no entiendo.
                    <hr class="RedLine"/>
                    En lo personal disfrute mucho las clases con ella, full recomendado
                    <hr class="RedLine"/>
                    Me dormí en clase y me ayudo a pasar, 10/10 volvería a dormirme. 
                    <hr class="RedLine"/>
                    me gusto
                </div>
            </div>

            <div class="Interbox">
                <h1>Estadisticas del profesor</h1>
                <hr class="RedLine"></hr>
                <div class="texto"> 
                    <strong>Promedio general:</strong> 3.6
                    <hr class="RedLine"></hr>
                    <strong>Alumnos que retiran:</strong> 2.7 
                    <hr class="RedLine"></hr>
                    <strong>Alumnos que pierden:</strong> 6.3
                </div>
            </div>
            <br/>
        </div>
    </div>
    </>
  );
}
export default Profesor1;