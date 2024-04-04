export default function Body({productObj}) {
  return (
    <div className="col-md-4">
      <div className="card m-4" style={{ width: "auto", height:"250px" }}>
        <div className="card-body">
          <h5 className="card-title">{productObj.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {productObj.subtitle}
          </h6>
          <p className="card-text h6">{productObj.description}</p>
          <a href="#card" className="btn btn-primary">
            Go to link
          </a>
        </div>
      </div>
    </div>
  );
}
