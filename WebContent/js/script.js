function keyCodeHandler(event) {
	/**
	 * left arrow 37 up arrow 38 right arrow 39 down arrow 40
	 */
	var ret = '';
	var code = (event.keyCode ? event.keyCode : event.which);
	if (code == 37) {
		ret = 'LEFT';
	}
	if (code == 38) {
		ret = 'UP';
	}
	if (code == 39) {
		ret = 'RIGHT';
	}
	if (code == 40) {
		ret = 'DOWN';
	}
	
	return ret;
}

$(document).ready(function() {
	var code = 0;
	$(document).bind('keydown', function(event) {
		$('#debug').html(keyCodeHandler(event));
	});
});