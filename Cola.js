class Cola {
	constructor() {
		this._primero = null;
		this._ultimo = null;
    }
    
	get primero() {
        return this._primero;
    }

    get ultimo() {
        return this._ultimo;
    }

	set primero(v) {
        this._primero = v;
    }

	set ultimo(v) {
        this._ultimo = v;
    }

	agregar(nuevo) {
		if (this._primero) {
			this._ultimo.siguiente = nuevo;
			this._ultimo = nuevo;
		} else {
			this._primero = nuevo;
			this._ultimo = nuevo;
		}
	}

	buscar(nombre) {
		var este = this._primero;
		while(este && este.nombre != nombre){
			este = este.siguiente;
        }
        
		if (este) {
			return este;
		} else {
			return null;
		}
	}

	sacar(){
		if (this._primero) {
			var n = this._primero;
			this._primero = this._primero.siguiente;
			return n;
		} else {
			return null;
		}
	}

	imprimir() {
		var este = this._primero;
		var s = '';
		while(este){
			s += este.nombre + ':' + este.ciclos;
			if (este.siguiente) {
				s += ', ';
			}
			este = este.siguiente;
		}
		console.log(s);
	}

	pendientes() {
		var s = 0;
		var este = this._primero;
		while(este) {
			s++;
			este = este.siguiente;
		}
		return s;
    }
    

    pendientesTotales() {
		var s = 0;
		var este = this._primero;
		while(este) {
			s += este.ciclos;
			este = este.siguiente;
		}
		return s;
	}
}