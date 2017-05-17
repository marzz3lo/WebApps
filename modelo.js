var nextId = 1;
function Tarea(titulo){
	this.id = nextId++;
	this.titulo = titulo;
	this.estado = 'pendiente';
	this.ts = new Date().getTime();
}

var tareasDB = [];

/* Crea una nueva tarea en la bd */
function nuevaTarea(title){
	console.log('nuevaTarea(' + title + ')');
	var tarea = new Tarea(title);
	tareasDB.unshift(tarea);
	return tarea;
}

/* Busca una tarea en la bd */
function buscarTarea(id){
	console.log('buscarTarea(' + id + ')');
	for (var i = 0; i < tareasDB.length; i++)
		if(tareasDB[i].id == id)
			return tareasDB[i];
		return null;
}

/* Completa una tarea */
function completarTarea(id){
	console.log('completarTarea(' + id + ')');
	var tarea = buscarTarea(id);
	if(tarea)
		tarea.estado = 'completada';
}

/* Elimina una tarea de la bd */
function eliminarTarea(id){
	console.log('eliminarTarea(' + id + ')');
	for(var i = 0; i<tareasDB.length; i++)
	{
		if(tareasDB.id==id){
			tareasDB.splice(i,1);
			return;
		}
	}
}