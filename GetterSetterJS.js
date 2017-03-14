var obj = {};

Object.defineProperty(obj, 'print', {
  enumerable: true,
	get: function() {
		console.log("printed");
    },
	set: function(val) {
		console.log(val);
    }
});

obj.print; // logs "printed"
obj.print = 5; // logs 5
Object.keys(obj);