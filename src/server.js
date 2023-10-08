import App from "./app.js"

function main(){
    try{
        App.listen(5001, () => {
            console.log("The API has started.")
        })
    }catch(error){
        console.log("Starting server error: ", error)
    }
}

main()
