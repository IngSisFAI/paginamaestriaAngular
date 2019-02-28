/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
"container" >
;
"submitted" >
    Hero;
Form < /h1>
    < form(ngSubmit);
"onSubmit()";
heroForm = "ngForm" >
    /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }());
"form-group" >
;
for ( = "name" > Name < /label>
    < input; type = "text"; /** @class */ (function () {
    function class_3() {
    }
    return class_3;
}()) = "form-control")
    id = "name";
required[(ngModel)] = "model.name";
name = "name";
name = "ngModel" >
;
"name.valid || name.pristine";
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"alert alert-danger" >
    Name;
is;
required
    < /div>
    < /div>
    < div;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"form-group" >
;
for ( = "alterEgo" > Alter; Ego < /label>
    < input; type = "text") {
    var default_3 = /** @class */ (function () {
        function default_3() {
        }
        return default_3;
    }());
}
"form-control";
id = "alterEgo"[(ngModel)] = "model.alterEgo";
name = "alterEgo" >
    /div>
    < div;
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"form-group" >
;
for ( = "power" > Hero; Power < /label>
    < select; /** @class */ (function () {
    function class_4() {
    }
    return class_4;
}()) = "form-control")
    id = "power";
required[(ngModel)] = "model.power";
name = "power";
power = "ngModel" >
     * ngFor;
"let pow of powers"[value] = "pow" > {};
{
    pow;
}
/option>
    < /select>
    < div[hidden];
"power.valid || power.pristine";
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"alert alert-danger" >
    Power;
is;
required
    < /div>
    < /div>
    < button;
type = "submit";
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"btn btn-success"[disabled] = "!heroForm.form.valid" > Submit < /button>
    < button;
type = "button";
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"btn btn-default"(click) = "newHero(); heroForm.reset()" > New;
Hero < /button>
    < /form>
    < /div>
    < div[hidden];
"!submitted" >
    You;
submitted;
the;
following: /h2>
    < div;
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"row" >
    /** @class */ (function () {
        function class_5() {
        }
        return class_5;
    }());
"col-xs-3" > Name < /div>
    < div;
var default_9 = /** @class */ (function () {
    function default_9() {
    }
    return default_9;
}());
"col-xs-9" > {};
{
    model.name;
}
/div>
    < /div>
    < div;
var default_10 = /** @class */ (function () {
    function default_10() {
    }
    return default_10;
}());
"row" >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"col-xs-3" > Alter;
Ego < /div>
    < div;
var default_11 = /** @class */ (function () {
    function default_11() {
    }
    return default_11;
}());
"col-xs-9" > {};
{
    model.alterEgo;
}
/div>
    < /div>
    < div;
var default_12 = /** @class */ (function () {
    function default_12() {
    }
    return default_12;
}());
"row" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"col-xs-3" > Power < /div>
    < div;
var default_13 = /** @class */ (function () {
    function default_13() {
    }
    return default_13;
}());
"col-xs-9" > {};
{
    model.power;
}
/div>
    < /div>
    < br >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"btn btn-primary"(click) = "submitted=false" > Edit < /button>
    < /div>
    < /div>;
//# sourceMappingURL=hero-form.component.html.js.map