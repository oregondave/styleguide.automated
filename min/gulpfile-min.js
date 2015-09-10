var gulp=require("gulp"),sass=require("gulp-sass"),directoryMap=require("gulp-directory-map"),livereload=require("gulp-livereload"),connect=require("gulp-connect");gulp.task("sass",function(){gulp.src("./scss/*.scss").pipe(sass().on("error",sass.logError)).pipe(gulp.dest("./css")).pipe(livereload())}),gulp.task("data0",function(){gulp.src("partials/**/*.html").pipe(directoryMap({filename:"home.json"})).pipe(gulp.dest("dist"))}),gulp.task("watch",function(){livereload.listen(),gulp.watch("./sass/**/*.scss",["sass"]),gulp.watch("partials/**/*.html",["data0"])}),gulp.task("connect",function(){connect.server()}),gulp.task("default",["data0","connect","watch"]);