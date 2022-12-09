import React from 'react'
import './Navbar.css'
import { border, Box, Button } from '@mui/material'
import {theme} from '../../theme'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoginModal from './LoginModal'
import logo_img from '../../images/navImg.png'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	// border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	borderRadius:'3px'
  };

const Navbar = () => {
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
	
	<header id="header" className="headroom" >
			<Box className="startp-responsive-nav" >
                <Box 
				// className="container"
				>
                    <Box className="startp-responsive-menu">
                        <Box className="logo black-logo">
                            <a href="index.html">
                                {/* <img src="https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo"/> */}
                            </a>
                        </Box>
						{/* <Box className="logo white-logo">
                            <a href="index.html">
                                <img src="assets/img/white-logo.png" alt="logo"/>
                            </a>
                        </Box> */}
                    </Box>
                </Box>
            </Box>

			<Box className="startp-nav">
				<Box ml={'5vw'} mr={'5vw'}
				//  className="container"
				>
					<nav className="navbar navbar-expand-md navbar-light">
						{/* <a className="navbar-brand black-logo" href="index.html"><img src="https://www.iqraias.com/wp-content/uploads/2019/05/iqra-ias-pune-logo.png" alt="logo"/></a> */}
						{/* <a className="navbar-brand white-logo" href="index.html"><img src="assets/img/white-logo.png" alt="logo"/></a> */}
						{/* <img src="https://www.iqraias.com/wp-content/uploads/2019/05/iqra-ias-pune-logo.png" alt="logo"/>
						<img src="https://plus.unsplash.com/premium_photo-1661398384449-2fd83db2f8cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="logo"/> */}
						{/* <img className='logo__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqKwilKfqpTsgGO1tLy5CL0pA-Jq_Pw1I_xoRi9Ti&s" alt="logo"/> */}
						<Box sx={{
							height:'100px',
							width:'100px'
						}}>
							<img src={logo_img} height='90vw' width='90vw'/>
						</Box>
						<Box className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
							<ul className="navbar-nav nav ml-auto">
								<li className="nav-item"><a href="#" className="nav-link">Student's Dashboard <i data-feather="chevron-down"></i></a>
									<ul className="dropdown_menu">
										<li className="nav-item"><a href="#" className="nav-link">Home One <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="index.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-index.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-index.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-index.html" className="nav-link">Purple</a></li>
											</ul>
										</li>
										
										<li className="nav-item"><a href="#" className="nav-link">Home Two <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="index-2.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-index-2.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-index-2.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-index-2.html" className="nav-link">Purple</a></li>
											</ul>
										</li>

										<li className="nav-item"><a href="#" className="nav-link">Home Three <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="index-3.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-index-3.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-index-3.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-index-3.html" className="nav-link">Purple</a></li>
											</ul>
										</li>

										<li className="nav-item"><a href="#" className="nav-link">Home Four <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="repair-index.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-repair-index.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-repair-index.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-repair-index.html" className="nav-link">Purple</a></li>
											</ul>
										</li>

										<li className="nav-item"><a href="#" className="nav-link">Home Five <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="iot-index.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-iot-index.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-iot-index.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-iot-index.html" className="nav-link">Purple</a></li>
											</ul>
										</li>

										<li className="nav-item"><a href="#" className="nav-link">Home Six <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="machine-learning-index.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-machine-learning-index.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-machine-learning-index.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-machine-learning-index.html" className="nav-link">Purple</a></li>
											</ul>
										</li>

										<li className="nav-item"><a href="#" className="nav-link">Home Seven <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="machine-learning-index-2.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-machine-learning-index-2.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-machine-learning-index-2.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-machine-learning-index-2.html" className="nav-link">Purple</a></li>
											</ul>
										</li>
										
										<li className="nav-item"><a href="#" className="nav-link">Home Eight <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="agency-index.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-agency-index.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-agency-index.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-agency-index.html" className="nav-link">Purple</a></li>
											</ul>
										</li>
										
										<li className="nav-item"><a href="#" className="nav-link">Home Nine <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="agency-portfolio-index.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-agency-portfolio-index.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-agency-portfolio-index.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-agency-portfolio-index.html" className="nav-link">Purple</a></li>
											</ul>
										</li>

										<li className="nav-item"><a href="#" className="nav-link">Home Ten <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="bigdata-analytics-index.html" className="nav-link">Light Green</a></li>
												
												<li className="nav-item"><a href="brink-pink-bigdata-analytics-index.html" className="nav-link">Brink Pink</a></li>
												
												<li className="nav-item"><a href="pink-bigdata-analytics-index.html" className="nav-link">Pink</a></li>
		
												<li className="nav-item"><a href="purple-bigdata-analytics-index.html" className="nav-link">Purple</a></li>
											</ul>
										</li>
										
										<li className="nav-item"><a href="#" className="nav-link">Home Static Image <i data-feather="chevron-right"></i></a>
											<ul className="dropdown_menu">
												<li className="nav-item"><a href="static-image-index.html" className="nav-link">Demo 1</a></li>
												
												<li className="nav-item"><a href="static-image-index-2.html" className="nav-link">Demo 2</a></li>
												
												<li className="nav-item"><a href="static-image-index-3.html" className="nav-link">Demo 3</a></li>
											</ul>
										</li>
									</ul>
								</li>

								<li className="nav-item"><a href="#" className="nav-link">About <i data-feather="chevron-down"></i></a>
									<ul className="dropdown_menu">
										<li className="nav-item"><a href="about-1.html" className="nav-link">About Style 1</a></li>
										
										<li className="nav-item"><a href="about-2.html" className="nav-link">About Style 2</a></li>
                                        
										<li className="nav-item"><a href="about-3.html" className="nav-link">About Style 3</a></li>
									</ul>
								</li>
								
								<li className="nav-item"><a href="contact.html" className="nav-link">Contact Us</a></li>
							</ul>
						</Box>
						
						<Box 
						// className="others-option"
						>
						<Button variant="contained" sx={{backgroundColor:theme.palette.secondary.main}} onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginModal/>
        </Box>
      </Modal>
							
						</Box>
					</nav>
				</Box> 
			</Box>

			<Box className="others-option-for-responsive">
                <Box className="container">
                    <Box className="dot-menu">
                        <Box className="inner">
                            <Box className="circle circle-one"></Box>
                            <Box className="circle circle-two"></Box>
                            <Box className="circle circle-three"></Box>
                        </Box>
                    </Box>
                    
                    <Box className="container">
                        <Box className="option-inner">
                            <Box className="others-option">
								<a href="login.html" className="btn btn-primary">Login</a>
							</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
		</header>
	
        
    </>
  )
}

export default Navbar