const {app} = require('./app');
const { connectToDb } = require("./connection");


connectToDb((err) => {
	if (!err) {
		app.listen(3000,()=>{
            console.log("Server is working");
        })
	}
})