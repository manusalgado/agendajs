
(function () {
  //variables

  var lista = document.getElementById('lista'),
      tareaInput = document.getElementById('tareaInput'),
      btnNuevaTarea = document.getElementById('btn-agregar');

      //funciones
      var agregarTarea = function() {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement('li'),
            enlace = document.createElement('a'),
            contenido = document.createTextNode(tarea);

            if (tarea === "") {
              tareaInput.setAttribute('placeholder', 'Agrega un contacto valido');
              tareaInput.className = 'error';
              return false;
            }

            enlace.appendChild(contenido);
            enlace.setAttribute('href', '#');
            nuevaTarea.appendChild(enlace);
            lista.appendChild(nuevaTarea);
            tareaInput.value = "";

            for (var i = 0; i <= lista.children.length -1; i++) {
              lista.children[i].addEventListener('click', function() {
                this.parentNode.removeChild(this);
              });
            }
      };
      var comprobarInput = function() {
        tareaInput.className = "";
        tareaInput.setAttribute('placeholder', 'Agrega tu tarea');
      };
      var eliminarTarea = function() {
        this.parentNode.removeChild(this);
      };

      //eventos


      // agregar tarea
      btnNuevaTarea.addEventListener('click', agregarTarea);

      //comprobar input
      tareaInput.addEventListener('click', comprobarInput);

      for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener('click', eliminarTarea);
      }
}());
