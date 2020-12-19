/* eslint-disable */
function Home() {
    return (
	<body>
		<section>
			<div id="job-display">
			
				<h2>Student Login</h2>
				<form>
				<label for='labels'>Student Number: </label> 
				<input placeholder="Student Number" type="text" required/>
				<label for='labels'>Password: </label>
				<input placeholder="Password" type="password" required/>
				<button class="gradient-button" type="button">login</button>
				</form>
	
				<h2>Company Login</h2>
				<form>
				<label for='labels'>Company ID: </label>
				<input placeholder="Company ID" type="text" required/>
				<label for='labels'>Password: </label>
				<input placeholder="Password" type="password" required/>
				<button class="gradient-button" type="button">login</button>
				</form>


				<h2>INTRA Office Login</h2>
				<form>
				<label for="labels">Username: </label>
				<input placeholder="Username" type="text" required/>
				<label for="labels">Password: </label>
				<input placeholder="Password" type="password" required/>
				<button class="gradient-button" type="button">login</button>
				</form>
				
				

				
				
				<div id="Location">
			
				  <p>Contact : intra@dcu.ie</p>
				  <div id="MapID"></div>
				</div>
				
				
				<form>
				</form>
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#08070c" fill-opacity="1" d="M0,0L48,26.7C96,53,192,107,288,106.7C384,107,480,53,576,42.7C672,32,768,64,864,106.7C960,149,1056,203,1152,229.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
		</section>
	</body>
		);
  }
  

export default Home;