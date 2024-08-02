import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 d-flex  flex-column " style={{ height: '' }}>
          <div className="big-lightblue-box">
          
            <div>
              <div><img src="./assets/dashboard icon.png" alt="" className="w-100" /></div>
              <div className="d-flex justify-content-center ">
                <div className="dark-blue-box mt-3"><img src="./assets/D.png" alt="" />dashboard</div>
              </div>

              <div className="d-flex justify-content-center ">
                <div className="otherbox "><img src="./assets/D.png" alt="" />All Reports</div>
              </div>
              
              <div className="d-flex justify-content-center ">
                <div className="otherbox "><img src="./assets/D.png" alt="" />Message Center</div>
              </div>

              <div className="d-flex justify-content-center ">
                <div className="otherbox "><img src="./assets/D.png" alt="" />FinCEN Alerts</div>
              </div>

              <div className="d-flex justify-content-center ">
                <div className="otherbox "><img src="./assets/D.png" alt="" />System Status</div>
              </div>

              <div className="d-flex justify-content-center ">
                <div className="otherbox "><img src="./assets/D.png" alt="" />BOI Reporting Guide </div>
              </div>
            </div>

        

            <div className="d-flex justify-content-center ">
              <div className="dark-blue-box-setting">Setting</div>
              </div>
          
          </div>

        </div>




        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <div className="blue-grad-box">
                <div className="d-flex justify-content-center">
                  <h1 className="mt-5">Welcome To Compliance Assure</h1>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="dash-para mb-5">Getting Started With Compliance Assure is easy, simply press the create a <br />
                    new report button below and follow the steps <br />
                    to get your business </p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="dash-btn mb-5">Create New Report</button>
                  <div className="btn-para px-2 mb-5">Get Started With Compliance Assure &#8594;</div>

                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                  <div className="gray-dash-box d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <div className="text-start">APIOBUILD LLC</div>
                        <div>Report ID: FCA-49727909</div>
                      </div>

                      <div className="to-do">To Do</div>
                    </div>

                    <div className="d-flex justify-content-end mb-4">
                      0% Completed
                    </div>

                    <div className="d-flex justify-content-center view">
                      View Report
                    </div>


                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
