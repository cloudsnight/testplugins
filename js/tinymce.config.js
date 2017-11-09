tinymce.init({
  selector: 'textarea',

  height: 500,
  menubar: false,
  plugins: [
		"advlist autolink lists link image charmap print preview anchor",
		"searchreplace visualblocks code fullscreen",
		"insertdatetime media table contextmenu paste imagetools responsivefilemanager"
	],

  	external_filemanager_path:"../testplugins/filemanager/",
	filemanager_title:"File Manager" ,
	external_plugins: { "filemanager" : "../filemanager/plugin.min.js" }

});