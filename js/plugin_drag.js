// ----------------------------------------------------------------------------
// Drag, jQuery plugin
// v 1.0
// ----------------------------------------------------------------------------
// Copyright (C) 2010 recens
// http://recens.ru/jquery/plugin_drag.html
// ----------------------------------------------------------------------------
(function($){
	$.fn.drag = function(o){
		var o = $.extend({
			start:function(){},   // при начале перетаскивания
			stop:function(){} // при завершении перетаскивания
		}, o);
		return $(this).each(function(){
			var d = $(this); // получаем текущий элемент
			var marginLeft = parseInt($(this).css('margin-left')); 
			d.mousedown(function(e){ // при удерживании мыши
				d.css('position','absolute');
				$(document).unbind('mouseup'); // очищаем событие при отпускании мыши
				o.start(d); // выполнение пользовательской функции
				var f = d.offset(), // находим позицию курсора относительно элемента
				x = e.pageX - f.left,  // слева
				y = e.pageY - f.top;  // и сверху

	            $(document).mousemove(function(a){ // при перемещении мыши
					d.css({'top' : a.pageY - y + 'px','left' : a.pageX - x - marginLeft  + 'px'}); // двигаем блок
				});
				$(document).mouseup(function(){  // когда мышь отпущена
					$(document).unbind('mousemove'); // убираем событие при перемещении мыши
					o.stop(d); // выполнение пользовательской функции
				});
				return false;
			});
		});
	}
})(jQuery);
