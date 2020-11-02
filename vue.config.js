module.exports ={
    devServer:{
        port:8002,
		proxy: {
		      '/jd': {
		        target: 'http://10.36.138.122:9999',
		        ws: true,
		        changeOrigin: true
		      }
		    }
    },
}