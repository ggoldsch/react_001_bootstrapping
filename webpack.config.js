module.exports = {
	entry:'./src/client.js',
	output:{
		path:"/home/george/react_001_bootstrapping/src",
		filename:'index.js',
	},

	devServer:{
		inline:true,
		contentBase:'./public',
		port:3000
	}
};
