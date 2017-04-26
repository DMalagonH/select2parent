/**
 * Plugin para dependencia entre 2 selects donde según la selección del padre se en listan las opciones del hijo
 *
 * Funciona también con Select2
 *
 * Dependencias: jQuery
 * Date: 2016-05-25
 *
 * @author Diego Malagón
 * @param {Funtion} $ jQuery
 * @returns {undefined}
 */
(function($){
    var name = "selectparent";

    var Func = function(){
        var $sel_parent;
        var $sel_child;
        var options;

        /**
         * Función que inicia la funcionalidad
         *
         * @returns {undefined}
         */
        var init = function(){
            $sel_child = $($sel_parent.data("child"));

            initEventListeners();

            if($sel_parent.val()){
                var parent = $sel_parent.val();

                // Mostrar opciones relacionadas a la opción padre seleccinada
                enableChildren(parent);
            }
        };

        /**
         * Función para asignar los event listeners
         *
         * @returns {undefined}
         */
        var initEventListeners = function(){

            // onChange de select padre
            $sel_parent.on("change", function(){
                var parent = $sel_parent.val();

                //Resetear valor de select hijo
                resetChild();

                if(parent){
                    // Mostrar opciones relacionadas a la opción padre seleccinada
                    enableChildren(parent);
                }
                else{
                    // deshabilitar select hijo
                    $sel_child.attr("disabled", true);
                }
            });
        };

        /**
         * Función para habilitar las opciones relacionadas al padre seleccionado
         *
         * @param {string} parent valor del select padre
         * @returns {undefined}
         */
        var enableChildren = function(parent){
            // Habilitar select hijo
            $sel_child.attr("disabled", false);

            // Obtener id opción seleccionada del padre
            var $opt_parent = $sel_parent.find("option[value='"+ parent +"']");
            var parent_id = $opt_parent.data("id");

            // Mostrar opciones relacionadas a la opción padre seleccinada
            $sel_child.find("option[data-parent='"+ parent_id +"']").removeClass("hidden");
        };

        /**
         * Función para restableser el select hijo
         *
         * @returns {undefined}
         */
        var resetChild = function(){
            $sel_child.prop('selectedIndex',0);
            if($.fn.select2){
                $sel_child.select2("val", "");
            }
            else{
                $sel_child.val("");
            }

            // Ocultar todas las opciones
            $sel_child.find("option").addClass("hidden");
        };

        return {
            init: function(element, opts){
                $sel_parent = $(element);
                options = opts;

                init();
            }
        };
    };

    $.fn[name]= function(options, args){
        var element = this;
        var Plugin = new Func();

        if(Plugin[options]){
            return Plugin[options](args);
        }
        else if(typeof(options) === "object" || !options){

            options = $.extend({}, $.fn[name].defaults, options);

            return Plugin.init(element, options, args);
        }
    };

    $.fn[name].defaults = {};
})(jQuery);