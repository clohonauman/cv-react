import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> 
              All rights reserved | Charlie Adi Putra Lohonauman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
