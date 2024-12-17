
import './Menu.css'
function Menu() {
  return (
    <body>
    
    <div className="container min-vh-100 d-flex justify-content-center align-items-center new_font col-md-6">
        <div className ="row gy-3">
            <h1> Current Coffee Menu </h1>
            <div className="col-md-4">
                <div className="card">  
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-quantity">Quantity</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <button className="btn btn-sm btn-outline-secondary">-</button>
                        <input type="number" className="form-control form-control-sm text-center" value="1" min="1" id="quantityInput"/>
                        <button className="btn btn-sm btn-outline-secondary" >+</button>
                    <button>Order</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-quantity">Quantity</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <button className="btn btn-sm btn-outline-secondary">-</button>
                        <input type="number" className="form-control form-control-sm text-center" value="1" min="1" id="quantityInput"/>
                        <button className="btn btn-sm btn-outline-secondary" >+</button>
                    <button>Order</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-quantity">Quantity</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <button className="btn btn-sm btn-outline-secondary">-</button>
                        <input type="number" className="form-control form-control-sm text-center" value="1" min="1" id="quantityInput"/>
                    <button className="btn btn-sm btn-outline-secondary" >+</button>
                    <button>Order</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</body>
  )
}

export default Menu
