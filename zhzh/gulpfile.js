var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("my-express",function(){
	return gulp.src("sass/*scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("public/stylesheets/css"));
})
gulp.task("watch",function(){
	gulp.watch("sass/*scss",["my-express"]);
})
