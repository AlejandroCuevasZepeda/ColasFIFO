var cola = new Cola();
var n = 1;
var completado = 0;
var vacio = 0;

for (var i = 0; i < 300; i++) {
	if (Math.trunc(Math.random()*100+1) <= 39) {
		cola.agregar(new Nodo("P" + n));
		n++;
	}
	
	cola.imprimir();

	if (cola.primero) {
		cola.primero.ciclos--;
		if (cola.primero.ciclos == 0) {
			cola.sacar();
			completado++;
		}	
	} else {
		vacio++;
	}
}

console.log('Ciclos Vacios: ' + vacio);
console.log('Ciclos Completados: ' + completado);
console.log('Ciclos Pendientes: ' + cola.pendientes());
console.log('Total de Ciclos Pendientes: ' + cola.pendientesTotales());