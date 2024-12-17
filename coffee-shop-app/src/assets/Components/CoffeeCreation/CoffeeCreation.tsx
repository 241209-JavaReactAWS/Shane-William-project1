import './CoffeeCreation.css'

function CoffeeCreation() {
  return (
    <body >
    
    <div className="container min-vh-100 d-flex justify-content-center align-items-center new_font col-md-6">
        <div className ="row gy-3">
            <h1> Current Coffee Menu </h1>
            <div className="col-md-4">
                <div className="card">  
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-quantity">Quantity</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-quantity">Quantity</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-quantity">Quantity</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    
    <div className="container min-vh-100 d-flex justify-content-center">
        <form>
            <h1 className="new_font"> Add/Delete Coffee from Menu </h1>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Coffee Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Create Coffee</button>
            <button type="submit" className="btn btn-danger">Delete Coffee</button>
        </form>
        </div>

</body>
  )
}

export default CoffeeCreation
