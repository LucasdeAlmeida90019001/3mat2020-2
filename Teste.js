const area = forma => {
	    switch(forma.tipo) {
	        case 'R':
	            return forma.base * forma.altura
	        case 'T':
	            return forma.base * forma.altura / 2
	        case 'E':
	            return (forma.base / 2) * (forma.altura / 2) * Math.PI
	        default: // Forma inválida
	            return undefined
	    }
	}