import * as React from "react";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Main = () => {
const servicesData = [
  {
    id:1,
    image: "data:image/jpeg;base64,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",
    title: 'Web Design/Development',
    
  },
  {
    id:2,
    image: "data:image/png;base64,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",
    title: 'Website Maintenance and Support',
  },
  {
    id:3,
    image: "https://cdn-boboe.nitrocdn.com/bosvnCLmelqFCVLkCaziURMhfREiyjMm/assets/images/optimized/rev-ff5600f/wp-content/uploads/2021/02/The-Difference-Types-of-Web-Hosting-2.jpg",
    title: 'web Hosting and Domain Registration',
  
  },
  {
    id:4,
    image: "",
    title: 'Branding and Identity Design',
  
  },
  {
    id:5,
    image: "",
    title: 'Email Marketing',
  
  },
  {
    id:6,
    image: "",
    title: 'Search Engine Optimization (SEO)',
  
  },
];
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Beta Stash
          </a>
          {/* nav links here */}
          <ul className="list">
            <li>
              <a href="#home" className="links">
                Home
              </a>
            </li>
            <li>
              <a href="/home" className="links">
                About Us
              </a>
            </li>
            <li>
              <a href="/home" className="links">
                Services
              </a>
            </li>
            <li>
              <a href="/home" className="links">
                Blog Page
              </a>
            </li>
          </ul>
          <div className="navigate">
            <Button variant="contained">Contact Us</Button>
          </div>

          <button
            className="navbar-toggler small"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark  small"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Beta Stash
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About Us{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Blog Page
                  </a>
                </li>
                <br />
                <li>
                  <Button variant="contained" style={{ width: "100%" }}>
                    Contact Us
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* main */}

      <div className="landing" id='home'>
        <div className="land-Text">
          <h1 className="land">
            We bring solutions to make life easier for our customers.
          </h1>
          <p className="land-descr">
            {" "}
            We offer a wide range of web services to help you establish and grow
            your online presence. Whether you're a small business owner, an
            entrepreneur, or just starting out on your online journey, we've got
            you covered.
          </p>
        </div>
        <div className="">
          <img
            src="https://sandbox-react.netlify.app/img/photos/about7.jpg"
            alt="land-img"
            className='land-img'
          />
        </div>
      </div>

      <div className="services" id='services'>
    <h3 className="serv">We offer a wide range of services including :</h3>

     {servicesData.map((res)=>
     
<div className="cards">
<Card sx={{ maxWidth: 345 }} >
     <CardActionArea>
       <CardMedia
         component="img"
         height="180"
         image={res.image}
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         {res.title}
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
</div>
     )}
 
      </div>
    </div>
  );
};

export default Main;
