--Cargar;
la;
librería;
principal-- >
    src;
"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js" > /script>
    < !--Como;
nuestro;
script;
no;
será;
muy;
grande, podemos;
ponerlo;
en;
el;
HTML-- >
        .module("formularios", [])
        .controller("ControladorPrincipal", [function () {
            $scope.model = {};
            $scope.guardar = function () {
                $http.post("./recibir.php", angular.toJson($scope.model))
                    .then(function (respuesta) {
                    /*
                                  Esto se ejecuta si todo va bien. Podemos leer la respuesta
                                  que nos dio el servidor accediendo a la propiedad data
                                  Recordemos que tenemos que decodificarla, ya que si enviamos con JSON
                                  deben respondernos con JSON (no es obligatorio, pero sí es una buena práctica)
                              */
                    console.log("Petición terminada. La respuesta es: ", angular.fromJson(respuesta.data));
                    /*
                                  Finalmente "limpiamos" el formulario
                                  estableciendo mascota a un objeto vacío
                              */
                    $scope.model = {};
                });
            };
        }]);
/script>
    < body >
    /** @class */ (function () {
        function class_1() {
        }
        return class_1;
    }());
"style-3 " >
    /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }());
"top-bar" > /div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"main-header" >
    /** @class */ (function () {
        function class_3() {
        }
        return class_3;
    }());
"container clearfix" >
    /** @class */ (function () {
        function class_4() {
        }
        return class_4;
    }());
"eleven columns" >
    --logo;
de;
la;
unco-- >
    /** @class */ (function () {
        function class_5() {
        }
        return class_5;
    }());
"logo" > href;
"https://www.uncoma.edu.ar/" > src;
"{{fotoRuta}}{{logounco}}";
alt = "Universidad del Comahue";
title = "Universidad del Comahue";
style = "width:120px;" > /a></div >
    /div>
    < /div>
    < /div>
    < div;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"page-title tituloformulario" >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"container clearfix " >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"sixteen columns" >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"tituloinscripcion" > Formulario;
de;
inscripción;
online < /h1>
    < /div>
    < /div>
    < /div>
    < /header>
    < !--comienzo;
del;
formulario-- >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"container" >
    id;
"signupbox";
style = " margin-top:50px";
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
    }());
"panel panel-info" >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }());
"panel-heading" >
    /** @class */ (function () {
        function class_12() {
        }
        return class_12;
    }());
"panel-title" > /div>
    < div;
style = "float:right; font-size: 85%; position: relative; top: 10px" > /div>
    < /div>
    < div;
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"panel-body" >
    /** @class */ (function () {
        function class_13() {
        }
        return class_13;
    }());
"form-horizontal";
method = "post"(ngSubmit) = "onSubmit()";
personaForm = "ngForm" >
    /** @class */ (function () {
        function class_14() {
        }
        return class_14;
    }());
"form-group " >
;
for ( = "nombre"; /** @class */ (function () {
    function class_15() {
    }
    return class_15;
}()) = "control-label col-md-4 " > Nombre < span; /** @class */ (function () {
    function class_16() {
    }
    return class_16;
}()) = "asteriskField" >  * /span> </label >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }()))
     = "controls col-md-8 " >
        type;
"text";
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"form-control";
placeholder = "Ingrese su nombre";
id = "nombre";
required[(ngModel)] = "model.nombre";
name = "nombre";
nombre = "ngModel" >
;
"nombre.valid || nombre.pristine";
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"alert alert-danger uno" >
    Nombre;
es;
requerido
    < /div>
    < /div>
    < /div>
    < div;
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"form-group " >
;
for ( = "apellido"; /** @class */ (function () {
    function class_18() {
    }
    return class_18;
}()) = "control-label col-md-4  " > Apellido < span; /** @class */ (function () {
    function class_19() {
    }
    return class_19;
}()) = "asteriskField" >  * /span> </label >
    /** @class */ (function () {
        function class_20() {
        }
        return class_20;
    }()))
     = "controls col-md-8 " >
        /** @class */ (function () {
            function class_21() {
            }
            return class_21;
        }());
"input-md  textInput form-control";
placeholder = "Ingrese su apellido";
style = "margin-bottom: 10px";
type = "text";
required[(ngModel)] = "model.apellido";
name = "apellido";
apellido = "ngModel" /  >
;
"apellido.valid || apellido.pristine";
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"alert alert-danger" >
    Apellido;
es;
requerido
    < /div>
    < /div>
    < /div>
    < div;
var default_9 = /** @class */ (function () {
    function default_9() {
    }
    return default_9;
}());
"form-group " >
;
for ( = "email"; /** @class */ (function () {
    function class_22() {
    }
    return class_22;
}()) = "control-label col-md-4  " > Email < span; /** @class */ (function () {
    function class_23() {
    }
    return class_23;
}()) = "asteriskField" >  * /span> </label >
    /** @class */ (function () {
        function class_24() {
        }
        return class_24;
    }()))
     = "controls col-md-8 " >
        /** @class */ (function () {
            function class_25() {
            }
            return class_25;
        }());
"input-md emailinput form-control";
type = "email";
placeholder = "Ingrese su email";
style = "margin-bottom: 10px";
type = "email";
required[(ngModel)] = "model.email";
name = "email";
email = "ngModel" >
;
"email.valid || email.pristine";
var default_10 = /** @class */ (function () {
    function default_10() {
    }
    return default_10;
}());
"alert alert-danger" >
    Email;
es;
requerido
    < /div>
    < /div>
    < /div>
    < div;
var default_11 = /** @class */ (function () {
    function default_11() {
    }
    return default_11;
}());
"form-group " >
;
for ( = "doc"; /** @class */ (function () {
    function class_26() {
    }
    return class_26;
}()) = "control-label col-md-4  " > Documento < span; /** @class */ (function () {
    function class_27() {
    }
    return class_27;
}()) = "asteriskField" >  * /span> </label >
    /** @class */ (function () {
        function class_28() {
        }
        return class_28;
    }()))
     = "controls col-md-8 " >
        /** @class */ (function () {
            function class_29() {
            }
            return class_29;
        }());
"input-md emailinput form-control";
minlength = "8";
placeholder = "Ingrese su documento";
style = "margin-bottom: 10px";
type = "text";
required;
pattern = "[0-9]+"[(ngModel)] = "model.doc";
name = "doc";
doc = "ngModel" /  >
;
"doc.valid || doc.pristine";
var default_12 = /** @class */ (function () {
    function default_12() {
    }
    return default_12;
}());
"alert alert-danger" >
    Dni;
es;
incorrecto
    < /div>
    < /div>
    < /div>
    < div;
var default_13 = /** @class */ (function () {
    function default_13() {
    }
    return default_13;
}());
"form-group " >
;
for ( = "genero"; /** @class */ (function () {
    function class_30() {
    }
    return class_30;
}()) = "control-label col-md-4 " > Genero < span; /** @class */ (function () {
    function class_31() {
    }
    return class_31;
}()) = "asteriskField" >  * /span> </label >
    /** @class */ (function () {
        function class_32() {
        }
        return class_32;
    }()))
     = "controls col-md-8 ";
style = "margin-bottom: 10px" >
    /** @class */ (function () {
        function class_33() {
        }
        return class_33;
    }());
"radio-inline" > type;
"radio";
name = "gender";
id = "id_gender_1";
value = "M";
style = "margin-bottom: 10px";
checked > Masculino < /label>
    < label;
var default_14 = /** @class */ (function () {
    function default_14() {
    }
    return default_14;
}());
"radio-inline" > type;
"radio";
name = "gender";
id = "id_gender_2";
value = "F";
style = "margin-bottom: 10px" > Femenino < /label>
    < /div>
    < /div>
    < div;
var default_15 = /** @class */ (function () {
    function default_15() {
    }
    return default_15;
}());
"form-group " >
;
for ( = "numero"; /** @class */ (function () {
    function class_34() {
    }
    return class_34;
}()) = "control-label col-md-4  " > Numero; de)
    contacto < span;
var default_16 = /** @class */ (function () {
    function default_16() {
    }
    return default_16;
}());
"asteriskField" >  * /span> </label >
    /** @class */ (function () {
        function class_35() {
        }
        return class_35;
    }());
"controls col-md-8 " >
    /** @class */ (function () {
        function class_36() {
        }
        return class_36;
    }());
"input-md textInput form-control ";
placeholder = "Ingrese su número";
style = "margin-bottom: 10px";
type = "text";
required;
pattern = "[0-9]+"[(ngModel)] = "model.numero";
name = "numero";
numero = "ngModel" /  >
;
"numero.valid || numero.pristine";
var default_17 = /** @class */ (function () {
    function default_17() {
    }
    return default_17;
}());
"alert alert-danger" >
    Numero;
es;
requerido
    < /div>
    < /div>
    < /div>
    < div;
var default_18 = /** @class */ (function () {
    function default_18() {
    }
    return default_18;
}());
"form-group " >
;
for ( = "locacion"; /** @class */ (function () {
    function class_37() {
    }
    return class_37;
}()) = "control-label col-md-4 " > Nacionalidad < span; /** @class */ (function () {
    function class_38() {
    }
    return class_38;
}()) = "asteriskField" >  * /span> </label >
    /** @class */ (function () {
        function class_39() {
        }
        return class_39;
    }()))
     = "controls col-md-8 " >
        name;
"nacionalidad";
id = "nacio";
var default_19 = /** @class */ (function () {
    function default_19() {
    }
    return default_19;
}());
"form-control nacionalidad";
autocomplete = "off";
required[(ngModel)] = "model.nacio";
name = "nacio";
nacio = "ngModel" >
    value;
"";
selected = "" > /option>
    < option;
title = "Argentina";
value = "ARG" > Argentina < /option>
    < option;
title = "Boliviana";
value = "BOL" > Boliviana < /option>
    < option;
title = "Brasileña";
value = "BRA" > Brasileña < /option>
    < option;
title = "Chilena";
value = "CHL" > Chilena < /option>
    < option;
title = "Colombiana";
value = "COL" > Colombiana < /option>
    < option;
title = "Ecuatoriana";
value = "ECU" > Ecuatoriana < /option>
    < option;
title = "Paraguaya";
value = "PRY" > Paraguaya < /option>
    < option;
title = "Peruana";
value = "PER" > Peruana < /option>
    < option;
title = "Uruguaya";
value = "URY" > Uruguaya < /option>
    < option;
title = "Venezolana";
value = "VEN" > Venezolana < /option>
    < option;
title = "Afgana";
value = "AFG" > Afgana < /option>
    < option;
title = "Albanesa";
value = "ALB" > Albanesa < /option>
    < option;
title = "Alemana";
value = "DEU" > Alemana < /option>
    < option;
title = "Andorrana";
value = "AND" > Andorrana < /option>
    < option;
title = "Angoleña";
value = "AGO" > Angoleña < /option>
    < option;
title = "Anguila";
value = "AIA" > Anguila < /option>
    < option;
title = "Antartida";
value = "ATA" > Antartida < /option>
    < option;
title = "Antillas Neerlandesas";
value = "ANT" > Antillas;
Neerlandesas < /option>
    < option;
title = "Arabe Saudita";
value = "SAU" > Arabe;
Saudita < /option>
    < option;
title = "Argelina";
value = "DZA" > Argelina < /option>
    < option;
title = "Argentina";
value = "ARH" > Argentina, Ciudadano;
naturalizado < /option>
    < option;
title = "Armenia";
value = "ARM" > Armenia < /option>
    < option;
title = "Aruba";
value = "ABW" > Aruba < /option><option title="Australiana" value="AUS">Australiana</option > title;
"Austríaca";
value = "AUT" > Austríaca < /option><option title="Azerbaijana" value="AZE">Azerbaijana</option > title;
"Bahamesa";
value = "BHS" > Bahamesa < /option><option title="Barbadense" value="BRB">Barbadense</option > title;
"Belga";
value = "BEL" > Belga < /option><option title="Beliceña" value="BLZ">Beliceña</option > title;
"Beninesa";
value = "BEN" > Beninesa < /option><option title="Bermudas" value="BMU">Bermudas</option > title;
"Bhutanesa";
value = "BTN" > Bhutanesa < /option><option title="Bielorrusa (belarusa)" value="BLR">Bielorrusa (belarusa)</option > title;
"Botswanesa/(bechuana)";
value = "BWA" > Botswanesa / (bechuana) < /option><option title="Burundiana" value="BDI">Burundiana</option > title;
"Búlgara";
value = "BGR" > Búlgara < /option><option title="Caboverdiana" value="CPV">Caboverdiana</option > title;
"Camboyana";
value = "KHM" > Camboyana < /option><option title="Camerunesa" value="CMR">Camerunesa</option > title;
"Canadiense";
value = "CAN" > Canadiense < /option><option title="Centroafricana" value="CAF">Centroafricana</option > title;
"Chadiana";
value = "TCD" > Chadiana < /option><option title="Checa" value="CZE">Checa</option > title;
"China";
value = "CHN" > China < /option><option title="Chipriota" value="CYP">Chipriota</option > title;
"Comorana";
value = "COM" > Comorana < /option><option title="Congoleña" value="COG">Congoleña</option > title;
"Congoleña/(zairense)";
value = "COD" > Congoleña / (zairense) < /option><option title="Coreana" value="KOR">Coreana</option > title;
"Costarricense";
value = "CRI" > Costarricense < /option><option title="Croata" value="HRV">Croata</option > title;
"Cubana";
value = "CUB" > Cubana < /option><option title="Danesa/dinamarquesa;
" value=";
DNK;
">Danesa/dinamarquesa</option><option title=";
De;
Brunei;
Darussalam;
" value=";
BRN;
">De Brunei Darussalam</option><option title=";
De;
Burkina;
Faso / (VOLTENSE);
" value=";
BFA;
">De Burkina Faso/(VOLTENSE)</option><option title=";
De;
GUINEA;
" value=";
GIN;
">De GUINEA</option><option title=";
De;
GUINEA;
ECUATORIAL;
" value=";
GNQ;
">De GUINEA ECUATORIAL</option><option title=";
De;
GUINEA - BISSAU;
" value=";
GNB;
">De GUINEA-BISSAU</option><option title=";
De;
las;
Islas;
Marshall;
" value=";
MHL;
">De las Islas Marshall</option><option title=";
Dominicana;
" value=";
DOM;
">Dominicana</option><option title=";
Egipcia;
" value=";
EGY;
">Egipcia</option><option title=";
Eritrea;
" value=";
ERI;
">Eritrea</option><option title=";
Eslovaca;
" value=";
SVK;
">Eslovaca</option><option title=";
Eslovena;
" value=";
SVN;
">Eslovena</option><option title=";
Española;
" value=";
ESP;
">Española</option><option title=";
Estadounidense;
" value=";
USA;
">Estadounidense</option><option title=";
Estonia;
" value=";
EST;
">Estonia</option><option title=";
Etíope;
" value=";
ETH;
">Etíope</option><option title=";
Filipina;
" value=";
PHL;
">Filipina</option><option title=";
Finlandesa / finesa;
" value=";
FIN;
">Finlandesa/finesa</option><option title=";
Francesa;
" value=";
FRA;
">Francesa</option><option title=";
Gabonesa;
" value=";
GAB;
">Gabonesa</option><option title=";
Gambia;
" value=";
GMB;
">Gambia</option><option title=";
Georgiana;
" value=";
GEO;
">Georgiana</option><option title=";
Ghanesa;
" value=";
GHA;
">Ghanesa</option><option title=";
Gibraltar;
" value=";
GIB;
">Gibraltar</option><option title=";
Granadina;
" value=";
GRD;
">Granadina</option><option title=";
Griega;
" value=";
GRC;
">Griega</option><option title=";
Groenlandia;
" value=";
GRL;
">Groenlandia</option><option title=";
Guadalupe;
" value=";
GLP;
">Guadalupe</option><option title=";
Guam;
" value=";
GUM;
">Guam</option><option title=";
Guatemalteca;
" value=";
GTM;
">Guatemalteca</option><option title=";
Guyanesa;
" value=";
GUF;
">Guyanesa</option><option title=";
HONG;
KONG;
con;
nuevo;
Pte.S.A.R.;
" value=";
HKG;
">HONG KONG con nuevo Pte. S.A.R.</option><option title=";
Haitiana;
" value=";
HTI;
">Haitiana</option><option title=";
Hondureña;
" value=";
HND;
">Hondureña</option><option title=";
Húngara;
" value=";
HUN;
">Húngara</option><option title=";
India;
" value=";
IND;
">India</option><option title=";
Indonesia;
" value=";
IDN;
">Indonesia</option><option title=";
Iraní;
" value=";
IRN;
">Iraní</option><option title=";
Iraquí;
" value=";
IRQ;
">Iraquí</option><option title=";
Irlandesa;
" value=";
IRL;
">Irlandesa</option><option title=";
Isla;
Bouvet;
" value=";
BVT;
">Isla Bouvet</option><option title=";
Isla;
Christmas;
" value=";
CXR;
">Isla Christmas</option><option title=";
Isla;
Norfolk;
" value=";
NFK;
">Isla Norfolk</option><option title=";
Islandesa;
" value=";
ISL;
">Islandesa</option><option title=";
Islas;
Caimán;
" value=";
CYM;
">Islas Caimán</option><option title=";
Islas;
Cocos;
" value=";
CCK;
">Islas Cocos</option><option title=";
Islas;
Cook;
" value=";
COK;
">Islas Cook</option><option title=";
Islas;
Feroe;
" value=";
FRO;
">Islas Feroe</option><option title=";
Islas;
Georgia;
S.y;
Sandwich;
S.;
" value=";
SGS;
">Islas Georgia S. y Sandwich S.</option><option title=";
Islas;
Heard;
y;
McDonald;
" value=";
HMD;
">Islas Heard y McDonald</option><option title=";
Islas;
Malvinas;
" value=";
FLK;
">Islas Malvinas</option><option title=";
Islas;
Marianas;
del;
Norte;
" value=";
MNP;
">Islas Marianas del Norte</option><option title=";
Islas;
Menores;
Alejadas;
de;
EEUU;
" value=";
UMI;
">Islas Menores Alejadas de EEUU</option><option title=";
Islas;
Pitcairn;
" value=";
PCN;
">Islas Pitcairn</option><option title=";
Islas;
Turcas;
y;
Caicos;
" value=";
TCA;
">Islas Turcas y Caicos</option><option title=";
Islas;
Vírgenes;
Americanas;
" value=";
VIR;
">Islas Vírgenes Americanas</option><option title=";
Islas;
Vírgenes;
Británicas;
" value=";
VGB;
">Islas Vírgenes Británicas</option><option title=";
Israelí;
" value=";
ISR;
">Israelí</option><option title=";
Italiana;
" value=";
ITA;
">Italiana</option><option title=";
Jamaiquina;
" value=";
JAM;
">Jamaiquina</option><option title=";
Japonesa / (nipona);
" value=";
JPN;
">Japonesa /(nipona)</option><option title=";
Jordana;
" value=";
JOR;
">Jordana</option><option title=";
Kazaka;
" value=";
KAZ;
">Kazaka</option><option title=";
Keniana;
" value=";
KEN;
">Keniana</option><option title=";
Kirguisa;
" value=";
KGZ;
">Kirguisa</option><option title=";
Kiribatí / kiribatiana;
" value=";
KIR;
">Kiribatí/kiribatiana</option><option title=";
Kuwaití;
" value=";
KWT;
">Kuwaití</option><option title=";
Laosiana;
" value=";
LAO;
">Laosiana</option><option title=";
Letona;
" value=";
LVA;
">Letona            </option><option title=";
Libanesa;
" value=";
LBN;
">Libanesa</option><option title=";
Liberiana;
" value=";
LBR;
">Liberiana</option><option title=";
Libia;
" value=";
LBY;
">Libia</option><option title=";
Lituana;
" value=";
LTU;
">Lituana           </option><option title=";
Luxemburguesa;
" value=";
LUX;
">Luxemburguesa</option><option title=";
Macao;
" value=";
MAC;
">Macao</option><option title=";
Macedonia;
" value=";
MKD;
">Macedonia</option><option title=";
Malawiana;
" value=";
MWI;
">Malawiana</option><option title=";
Malaya / malasia;
" value=";
MYS;
">Malaya/malasia</option><option title=";
Maldiva;
" value=";
MDV;
">Maldiva </option><option title=";
Malgache;
" value=";
MDG;
">Malgache</option><option title=";
Maliense;
" value=";
MLI;
">Maliense</option><option title=";
Maltesa;
" value=";
MLT;
">Maltesa</option><option title=";
Martinica;
" value=";
MTQ;
">Martinica</option><option title=";
Mauriciana;
" value=";
MAR;
">Mauriciana</option><option title=";
Mauricio;
" value=";
MUS;
">Mauricio</option><option title=";
Mauritana;
" value=";
MRT;
">Mauritana</option><option title=";
Mayotte;
" value=";
MYT;
">Mayotte</option><option title=";
Mexicana;
" value=";
MEX;
">Mexicana</option><option title=";
Moldova;
" value=";
MDA;
">Moldova</option><option title=";
Monegasca;
" value=";
MCO;
">Monegasca</option><option title=";
Mongola;
" value=";
MNG;
">Mongola</option><option title=";
Montenegrina;
" value=";
MNE;
">Montenegrina</option><option title=";
Montserrat;
" value=";
MSR;
">Montserrat</option><option title=";
Mozambiqueña;
" value=";
MOZ;
">Mozambiqueña</option><option title=";
Namibiana;
" value=";
NAM;
">Namibiana</option><option title=";
Nauruana;
" value=";
NRU;
">Nauruana</option><option title=";
Neerlandesa;
" value=";
NLD;
">Neerlandesa</option><option title=";
Neocelandesa;
" value=";
NZL;
">Neocelandesa</option><option title=";
Nepalesa;
" value=";
NPL;
">Nepalesa</option><option title=";
Nicaraguense;
" value=";
NIC;
">Nicaraguense</option><option title=";
Nigeriana;
" value=";
NGA;
">Nigeriana</option><option title=";
Nigerina;
" value=";
NER;
">Nigerina</option><option title=";
Niue;
" value=";
NIU;
">Niue</option><option title=";
Norcoreana;
" value=";
PRK;
">Norcoreana</option><option title=";
Noruega;
" value=";
NOR;
">Noruega</option><option title=";
Nueva;
Caledonia;
" value=";
NCL;
">Nueva Caledonia</option><option title=";
Omaní;
" value=";
OMN;
">Omaní</option><option title=";
Pakistaní / paquistaní;
" value=";
PAK;
">Pakistaní/paquistaní</option><option title=";
Panameña;
" value=";
PAN;
">Panameña</option><option title=";
Polaca;
" value=";
POL;
">Polaca</option><option title=";
Polinesia;
Francesa;
" value=";
PYF;
">Polinesia Francesa</option><option title=";
Portuguesa;
" value=";
PRT;
">Portuguesa</option><option title=";
Puerto;
Rico;
" value=";
PRI;
">Puerto Rico</option><option title=";
Reino;
Unido;
" value=";
GBR;
">Reino Unido</option><option title=";
Reunión;
" value=";
REU;
">Reunión</option><option title=";
Rumana;
" value=";
ROM;
">Rumana</option><option title=";
Rusa;
" value=";
RUS;
">Rusa</option><option title=";
Rwandesa;
" value=";
RWA;
">Rwandesa</option><option title=";
Salvadoreña;
" value=";
SLV;
">Salvadoreña</option><option title=";
Samoa;
Americana;
" value=";
ASM;
">Samoa Americana</option><option title=";
Samoana;
" value=";
WSM;
">Samoana</option><option title=";
San;
Pedro;
y;
Miquelón;
" value=";
SPM;
">San Pedro y Miquelón</option><option title=";
Sanmarinense;
" value=";
SMR;
">Sanmarinense</option><option title=";
Santa;
Elena;
" value=";
SHN;
">Santa Elena</option><option title=";
Santalucense;
" value=";
LCA;
">Santalucense</option><option title=";
Senegalesa;
" value=";
SEN;
">Senegalesa</option><option title=";
Serbio;
" value=";
SRB;
">Serbio</option><option title=";
Sierraleonesa;
" value=";
SLE;
">Sierraleonesa</option><option title=";
Singapurense;
" value=";
SGP;
">Singapurense</option><option title=";
Siria;
" value=";
SYR;
">Siria</option><option title=";
Somalí;
" value=";
SOM;
">Somalí</option><option title=";
Sudafricana;
" value=";
ZAF;
">Sudafricana</option><option title=";
Sudanesa;
" value=";
SDN;
">Sudanesa</option><option title=";
Sueca;
" value=";
SWE;
">Sueca</option><option title=";
Suiza;
" value=";
CHE;
">Suiza</option><option title=";
Surinamesa;
" value=";
SUR;
">Surinamesa</option><option title=";
Svalbard;
y;
Jan;
Mayen;
" value=";
SJM;
">Svalbard y Jan Mayen</option><option title=";
Swazi;
" value=";
SWZ;
">Swazi</option><option title=";
Tadjika / tadjik;
" value=";
TJK;
">Tadjika /tadjik</option><option title=";
Tailandesa;
" value=";
THA;
">Tailandesa</option><option title=";
Taiwanesa;
" value=";
TWN;
">Taiwanesa</option><option title=";
Tanzaniana;
" value=";
TZA;
">Tanzaniana</option><option title=";
Terr.Britán;
del;
Océano;
índico;
" value=";
IOT;
">Terr. Britán del Océano índico</option><option title=";
Territor.Australes;
Franceses;
" value=";
ATF;
">Territor. Australes Franceses</option><option title=";
Togolesa;
" value=";
TGO;
">Togolesa</option><option title=";
Tokelau;
" value=";
TKL;
">Tokelau</option><option title=";
Tongana;
" value=";
TON;
">Tongana</option><option title=";
Tunecina;
" value=";
TUN;
">Tunecina</option><option title=";
Turca;
" value=";
TUR;
">Turca</option><option title=";
Turcomana;
" value=";
TKM;
">Turcomana</option><option title=";
Ucraniana;
" value=";
UKR;
">Ucraniana</option><option title=";
Ugandesa;
" value=";
UGA;
">Ugandesa</option><option title=";
Uzbeka;
" value=";
UZB;
">Uzbeka</option><option title=";
Vietnamita;
" value=";
VNM;
">Vietnamita</option><option title=";
Wallis;
y;
Futuna;
" value=";
WLF;
">Wallis y Futuna</option><option title=";
Yemenita;
" value=";
YEM;
">Yemenita</option><option title=";
Yibuti;
" value=";
DJI;
">Yibuti</option><option title=";
Yugoslava;
" value=";
YUG;
">Yugoslava</option><option title=";
Zambiana;
" value=";
ZMB;
">Zambiana</option><option title=";
Zimbabwense;
" value=";
ZWE;
">Zimbabwense</option><option title=";
de;
Antigua;
y;
Barbuda;
" value=";
ATG;
">de Antigua y Barbuda</option><option title=";
de;
Bahrein / Bahreinita;
" value=";
BHR;
">de Bahrein/Bahreinita</option><option title=";
de;
Bangladesh(BENGALI);
" value=";
BGD;
">de Bangladesh(BENGALI)</option><option title=";
de;
Bosnia;
y;
Herzegovina;
" value=";
BIH;
">de Bosnia y Herzegovina</option><option title=";
de;
Costa;
de;
Marfil;
" value=";
CIV;
">de Costa de Marfil</option><option title=";
de;
Dominica;
" value=";
DMA;
">de Dominica</option><option title=";
de;
Fidji;
" value=";
FJI;
">de Fidji</option><option title=";
de;
Lesotho / Lesotha;
" value=";
LSO;
">de Lesotho/Lesotha</option><option title=";
de;
Liechtenstein;
" value=";
LIE;
">de Liechtenstein</option><option title=";
de;
Myanmar / (BIRMANA);
" value=";
MMR;
">de Myanmar/(BIRMANA)</option><option title=";
de;
Palau;
" value=";
PLW;
">de Palau</option><option title=";
de;
Papua;
Nueva;
Guinea;
" value=";
PNG;
">de Papua Nueva Guinea</option><option title=";
de;
Qatar;
" value=";
QAT;
">de Qatar</option><option title=";
de;
República;
Arabe;
Saharaui;
democrática;
" value=";
ESH;
">de República Arabe Saharaui democrática</option><option title=";
de;
San;
Cristobal;
y;
Nevis;
" value=";
KNA;
">de San Cristobal y Nevis</option><option title=";
de;
San;
Vicente;
y;
las;
Granadinas;
" value=";
VCT;
">de San Vicente y las Granadinas</option><option title=";
de;
Santo;
Tomé;
y;
Príncipe;
" value=";
STP;
">de Santo Tomé y Príncipe</option><option title=";
de;
Seychelles;
" value=";
SYC;
">de Seychelles</option><option title=";
de;
Sri;
Lanka;
" value=";
LKA;
">de Sri Lanka</option><option title=";
de;
Timor - Leste(ex, Timor, Oriental);
" value=";
TMP;
">de Timor-Leste (ex Timor Oriental)</option><option title=";
de;
Trinidad;
y;
Tobago;
" value=";
TTO;
">de Trinidad y Tobago</option><option title=";
de;
Tuvalu / Tuvaluana;
" value=";
TUV;
">de Tuvalu/Tuvaluana</option><option title=";
de;
Vanautu;
" value=";
VUT;
">de Vanautu</option><option title=";
de;
la;
Santa;
Sede(Vaticano);
" value=";
VAT;
">de la Santa Sede(Vaticano)</option><option title=";
de;
las;
Islas;
Salomón;
" value=";
SLB;
">de las Islas Salomón</option><option title=";
de;
los;
Emiratos;
Arabes;
Unidos;
" value=";
ARE;
">de los Emiratos Arabes Unidos</option><option title=";
de;
los;
Est.Fed.de;
Micronesia;
" value=";
FSM;
">de los Est. Fed. de Micronesia</option>
    < /select>
    < br >
;
"nacio.valid || nacio.pristine";
var default_20 = /** @class */ (function () {
    function default_20() {
    }
    return default_20;
}());
"alert alert-danger dos" >
    Nacionalidad;
es;
requerida
    < /div>
    < /div>
    < /div>
    < !--captcha;
-- >
    /** @class */ (function () {
        function class_40() {
        }
        return class_40;
    }());
"captcha col-md-12 centered" >
    -captcha(resolved);
"resolved($event)";
siteKey = "6Lex65AUAAAAANyBRE5Cl37QhcJgCDWDrME0me-k" > /re-captcha>
    < /div>
    < div;
style = "float: right; margin-right: 107px;" >
    --boton;
enviar-- >
    type;
"reset";
var default_21 = /** @class */ (function () {
    function default_21() {
    }
    return default_21;
}());
"btn btn-primary btn-lg col-md-5  botonenviar"(click) = "guardar()"[disabled] = "!personaForm.form.valid" > Enviar < /button>
    < button;
type = "button";
var default_22 = /** @class */ (function () {
    function default_22() {
    }
    return default_22;
}());
"btn btn-default col-md-8 "(click) = "newPersona(); personaForm.reset()" > Nueva;
inscripción < /button>
    < /div>
    < !-- < pre > {};
{
    model | json;
}
/pre> -->
    < /form>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
var default_23 = /** @class */ (function () {
    function default_23() {
    }
    return default_23;
}());
"textoEnviado" >
;
"!submitted" >
    Su;
consulta;
se;
envió: /h2>
    < div;
var default_24 = /** @class */ (function () {
    function default_24() {
    }
    return default_24;
}());
"row" >
    /** @class */ (function () {
        function class_41() {
        }
        return class_41;
    }());
"col-xs-3" > Nombre;
/div>
    < div;
var default_25 = /** @class */ (function () {
    function default_25() {
    }
    return default_25;
}());
"col-xs-9" > {};
{
    model.nombre;
}
/div>
    < /div>
    < div;
var default_26 = /** @class */ (function () {
    function default_26() {
    }
    return default_26;
}());
"row" >
    /** @class */ (function () {
        function class_42() {
        }
        return class_42;
    }());
"col-xs-3" > Apellido;
/div>
    < div;
var default_27 = /** @class */ (function () {
    function default_27() {
    }
    return default_27;
}());
"col-xs-9" > {};
{
    model.apellido;
}
/div>
    < /div>
    < div;
var default_28 = /** @class */ (function () {
    function default_28() {
    }
    return default_28;
}());
"row" >
    /** @class */ (function () {
        function class_43() {
        }
        return class_43;
    }());
"col-xs-3" > Email < /div>
    < div;
var default_29 = /** @class */ (function () {
    function default_29() {
    }
    return default_29;
}());
"col-xs-9" > {};
{
    model.email;
}
/div>
    < /div>
    < div;
var default_30 = /** @class */ (function () {
    function default_30() {
    }
    return default_30;
}());
"row" >
    /** @class */ (function () {
        function class_44() {
        }
        return class_44;
    }());
"col-xs-3" > Documento;
/div>
    < div;
var default_31 = /** @class */ (function () {
    function default_31() {
    }
    return default_31;
}());
"col-xs-9" > {};
{
    model.doc;
}
/div>
    < /div>
    < div;
var default_32 = /** @class */ (function () {
    function default_32() {
    }
    return default_32;
}());
"row" >
    /** @class */ (function () {
        function class_45() {
        }
        return class_45;
    }());
"col-xs-3" > Telefono;
/div>
    < div;
var default_33 = /** @class */ (function () {
    function default_33() {
    }
    return default_33;
}());
"col-xs-9" > {};
{
    model.numero;
}
/div>
    < /div>
    < div;
var default_34 = /** @class */ (function () {
    function default_34() {
    }
    return default_34;
}());
"row" >
    /** @class */ (function () {
        function class_46() {
        }
        return class_46;
    }());
"col-xs-3" > Nacionalidad;
/div>
    < div;
var default_35 = /** @class */ (function () {
    function default_35() {
    }
    return default_35;
}());
"col-xs-9" > {};
{
    model.nacio;
}
/div>
    < /div>
    < br >
    /** @class */ (function () {
        function class_47() {
        }
        return class_47;
    }());
"btn btn-primary"(click) = "submitted=false" > Editar < /button>
    < /div>
    < /div>
    < /body>
    < /html>;
//# sourceMappingURL=formu.component.html.js.map