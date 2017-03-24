# select2parent
Cambia las opciones de un control select basado en la opción seleccionada de otro select.

Change the select control options based in other select control choice.



## Dependencies
* jQuery
* Bootstrap
* Select2


## Usage
* Add jQuery js and css files
* Add bootstrap js and css files
* Add Select2 js and css files
* Add js ```<script src="js/select2parent.js"></script>```

### example

	<select id="select-parent" class="form-control" data-toggle="select2" data-child="#select-child">
		<option value="Colombia" data-id="1"> 
        	Colombia
        </option> 
		<option value="Mexico" data-id="2"> 
        	México
        </option> 
    </select>

	<select id="select-child" class="form-control" data-toggle="select2" disabled="disabled">
    	<option value="Bogota" data-parent="1" class="hidden"> 
	        Bogotá
    	</option> 
		<option value="Medellín" data-parent="1" class="hidden"> 
	        Medellín
    	</option> 
		<option value="Guadalajara" data-parent="2" class="hidden"> 
	        Guadalajara
    	</option> 
		<option value="Ciudad de Mexico" data-parent="2" class="hidden"> 
	        Ciudad de México
    	</option> 
    </select>

	<script languaje="javascript">
		$(document).ready(function() {
			$("#select-parent").selectparent();
		});
	</script>