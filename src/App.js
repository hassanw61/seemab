import laptopImage from "./laptop.png";

import image1 from "./image1.jpg";
import image2 from "./image2.jpg";

import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";

function App() {
	return (
		<div className="bg-gray-900 min-h-screen text-white">
			<header className="flex justify-between items-center bg-transparent py-4 px-8">
				<h1 className="text-2xl font-bold">C++ Simulator</h1>
				<nav>
					<ul className="flex space-x-4">
						<li className="text-lg">Home</li>
						<li className="text-lg">About Us</li>
						<li className="text-lg">Contact Us</li>
					</ul>
				</nav>
			</header>

			<main className="py-16 px-8">
				<section className="mb-16 px-56">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-3xl font-bold mb-4">Visualize to Empower your learning</h2>
							<button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 shadow mr-4">
								Start Simulation
							</button>
						</div>
						<img src={laptopImage} alt="Laptop" className="h-640" />
					</div>
				</section>

				<section className="flex items-center justify-center mb-16 px-56">
					<div className="flex flex-col items-start space-y-14">
						<img src={image1} alt="Image 1" className="w-full mb-4" />
						<p className="text-gray-400">
							Learn the building blocks of C++ programming - Variables, conditions, and loops. With interactive
							visualizations and hands-on practice.
						</p>
						<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Beginner Level</button>
					</div>
					<div className="flex flex-col items-start ml-16 space-y-14">
						<p className="text-gray-400">
							Learn the building blocks of C++ programming - Variables, conditions, and loops. With interactive
							visualizations and hands-on practice.
						</p>
						<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Intermediate Level</button>
						<img src={image2} alt="Image 2" className="w-full mt-4" />
					</div>
				</section>

				<section className="flex items-center justify-center mb-16">
					<div className="flex space-x-5 justify-center w-full">
						<div className="flex flex-col items-center p-8 bg-gray-900 rounded-lg shadow-inner space-y-10">
							<img src={image3} alt="Image 1" className="w-[50%] mb-4" />
							<p className="text-gray-600 mb-4 text-center">
								Understand the basics of
								<br />
								variables their types and
								<br />
								how they can be used to
								<br />
								store data in your c++
							</p>
							<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate variables</button>
						</div>
						<div className="flex flex-col items-center p-8 bg-gray-900 rounded-lg shadow-inner space-y-10">
							<img src={image4} alt="Image 2" className="w-[50%] mb-4" />
							<p className="text-gray-600 mb-4 text-center">
								Explore the loops in c++
								<br />
								Learn how to control the
								<br />
								flow of your programs
								<br />
								practice using loops to solve
							</p>
							<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate loops</button>
						</div>
						<div className="flex flex-col items-center p-8 bg-gray-900 rounded-lg shadow-inner space-y-10">
							<img src={image5} alt="Image 3" className="w-[50%] mb-4" />
							<p className="text-gray-600 mb-4 text-center">
								discover how conditions can
								<br />
								be used to make decisions in
								<br />
								your programs and learn how
								<br />
								to write programs that respond
							</p>
							<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate conditions</button>
						</div>
						<div className="flex flex-col items-center p-8 bg-gray-900 rounded-lg shadow-inner space-y-10">
							<img src={image6} alt="Image 4" className="w-[50%] mb-4" />
							<p className="text-gray-600 mb-4 text-center">
								Discover how arrays can be
								<br />
								used to store data in your
								<br />
								and learn how to
								<br />
								implement them in your C++
							</p>
							<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate Arrays</button>
						</div>
					</div>
				</section>

				<section className="flex flex-col items-center mb-16">
					<h2 className="text-3xl font-bold mb-8">Variable Simulation</h2>
					<p className="text-gray-600 mb-4 text-3xl">Master the use of variables in C++</p>
					<div className="flex justify-center space-x-7 mb-16">
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Coding Compiler</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder="#include <iostream>
                using namespace std;
                int main()"
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Output</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder=""
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Simulation</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"></textarea>
						</div>
					</div>
					<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate</button>
				</section>

				<section className="flex flex-col items-center mb-16">
					<h2 className="text-3xl font-bold mb-8">Loop Simulation</h2>
					<p className="text-gray-600 mb-4 text-3xl">Understand and use the loops like a pro</p>
					<div className="flex justify-center space-x-7 mb-16">
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Coding Compiler</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder="#include <iostream>
                using namespace std;
                int main()"
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Output</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder=""
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Simulation</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"></textarea>
						</div>
					</div>
					<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate</button>
				</section>

				<section className="flex flex-col items-center mb-16">
					<h2 className="text-3xl font-bold mb-8">Condition Simulation</h2>
					<p className="text-gray-600 mb-4 text-3xl">Make smarter decisions in your code</p>
					<div className="flex justify-center space-x-7 mb-16">
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Coding Compiler</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder="#include <iostream>
                using namespace std;
                int main()"
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Output</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder=""
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Simulation</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"></textarea>
						</div>
					</div>
					<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate</button>
				</section>

				<section className="flex flex-col items-center mb-16">
					<h2 className="text-3xl font-bold mb-8">Arrays Simulation</h2>
					<p className="text-gray-600 mb-4 text-3xl">Efficiently Manage Data in Arrays</p>
					<div className="flex justify-center space-x-7 mb-16">
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Coding Compiler</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder="#include <iostream>
                using namespace std;
                int main()"
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Output</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder=""
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Simulation</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"></textarea>
						</div>
					</div>
					<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate</button>
				</section>

				<section className="flex flex-col items-center mb-16">
					<h2 className="text-3xl font-bold mb-8">Stack Simulation</h2>
					<p className="text-gray-600 mb-4 text-3xl">Solve Problems With Stacks</p>
					<div className="flex justify-center space-x-7 mb-16">
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Coding Compiler</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder="#include <iostream>
                using namespace std;
                int main()"
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Output</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder=""
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Simulation</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"></textarea>
						</div>
					</div>
					<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate</button>
				</section>

				<section className="flex flex-col items-center mb-16">
					<h2 className="text-3xl font-bold mb-8">Queue Simulation</h2>
					<p className="text-gray-600 mb-4 text-3xl">Efficiently Manage Data With Queues</p>
					<div className="flex justify-center space-x-7 mb-16">
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Coding Compiler</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder="#include <iostream>
                using namespace std;
                int main()"
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Output</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder=""
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Simulation</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"></textarea>
						</div>
					</div>
					<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate</button>
				</section>

				<section className="flex flex-col items-center mb-16">
					<h2 className="text-3xl font-bold mb-8">Linked List Simulation</h2>
					<p className="text-gray-600 mb-4 text-3xl">Become and expert in linked lists</p>
					<div className="flex justify-center space-x-7 mb-16">
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Coding Compiler</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder="#include <iostream>
                using namespace std;
                int main()"
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Output</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea
								className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"
								placeholder=""
							></textarea>
						</div>
						<div className="flex flex-col items-center bg-gray-600 rounded-lg p-4">
							<h3 className="text-xl font-bold mb-2">Simulation</h3>
							<div className="border-t border-gray-700 w-full"></div>
							<textarea className="bg-gray-600 border-none w-64 h-56 p-2 mt-2 resize-none"></textarea>
						</div>
					</div>
					<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Simulate</button>
				</section>

				<section className="mb-16 px-56">
					<div className="flex justify-between">
						<div style={{ padding: "40px" }}>
							<h2 className="text-3xl font-bold">Contact Us</h2>
							<p className="text-gray-500 mt-2">
								We would love to hear from you! weather you have a suggestion, question or just want to say hi.
							</p>
						</div>
						<form className="p-8 rounded shadow w-[60%]">
							<div className="mb-4">
								<label htmlFor="fullName" className="block text-lg font-semibold mb-2">
									Full Name
								</label>
								<input
									type="text"
									id="fullName"
									className="w-full border-b-2 border-gray-300 bg-transparent p-2 rounded-none"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-lg font-semibold mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full border-b-2 border-gray-300 bg-transparent p-2 rounded-none"
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="message" className="block text-lg font-semibold mb-2">
									Message
								</label>
								<textarea
									id="message"
									rows="4"
									className="w-full border-b-2 border-gray-300 bg-transparent p-2 rounded-none"
								></textarea>
							</div>
							<button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">Contact Us</button>
						</form>
					</div>
				</section>
			</main>

			<footer className="bg-gray-900 border-t-white py-4 px-8 text-center fixed bottom-0 left-0 w-full">
				<p className="text-sm">Revolutionizing C++ education, web application developed by UCP students</p>
			</footer>
		</div>
	);
}

export default App;
