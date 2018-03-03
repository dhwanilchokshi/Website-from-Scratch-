function CS161()
{
	document.getElementById("class_description").innerHTML = "<b>Introduction to Problem Solving</b>: This course taught us the basics of programming using a simple, user-friendly language like Python. We were exposed to creating variables, using functions, and creating small programs that would help us understand the initial steps in solving big problems. Towards the end, we were introduced to the concepts of objects which would be utilized heavily in later programming courses.";
}

function CS162()
{
	document.getElementById("class_description").innerHTML = "<b>Introduction to Computer Science</b>: This course taught us the basics of CS using C++. We started by creating programs which utilized arrays, structures, functions, and file IO. During the middle of the term, we had proficiency demo where we would be asked to code/solve a random problem -- assigned by the teacher. She would grade us on our ability to solve it. We had to pass the midterm demo to pass the course. After the midterm demo, we shifted our focus into learning about classes in C++. We created programs that were no longer single file, but multiple files. We were introduced to the concept of recursion and linked list -- we were getting a taste for the next course; Data Structures. Our final demo consisted of problems involving the manipulation of Linked List. We could use recursion or we could use loops.";
}

function CS163()
{
	document.getElementById("class_description").innerHTML = "<b>Data Structures</b>: This course was fundamental in the CS curriculum because it introduced concepts which would be used very regularly in our CS journey. The class reviewed Linear Linked List (which was discussed in CS162), and slowly moved towards other data structures like Circular Linked List, Doubly Linked List, and Arrays of Linked List. These data structures were used as a by product in learning about important conceps like stacks and queues. Midterm demo consisted of problems involving manipulation of CLL, LLL, and DLL using recursion. We learned and used concepts of Hash Tables, and the efficiency of sorting algorithms. The term ended with lectures on Binary Search Trees and Graphs. Final Demo consisted of using recursion showing proficiency on BST problems.";
}

function CS202()
{
	document.getElementById("class_description").innerHTML = "<b>Programming Systems</b>: This course was programming heavy. It discussed advanced concepts of C++ mainly revolving around Object Oriented Programming (OOP). We started off by learning about inhertiance, polymorphism, and differences between when to use inheritance as opposed to containment. These concepts were implemented directly in the huge programs assigned which required us to show our understanding of the concepts. We then moved into concepts involving Dynamic Binding in self-similar heirarchies using upcasting and downcasting. Lectures discussed the very popular Diamond Problem which revolves around multiple inheritance and how to solve it. We slowly shifted our focus in Java and started applying OOP concepts in Java programs. Midterm and Final demos were same as CS163 except a lot harder.";
}

function CS201()
{
	document.getElementById("class_description").innerHTML = "<b>Systems Programming</b>: Systems Programming course used C and x86-64 to help us understand low level programming. We first started by creating a File IO program in C, to get us warmed up with the low level coding we were about to learn. The focus of the class was soon shifted into learning assembly language. We learned about the instructions, registers, and reverse engineering assembly code into C and vice versa. The programming assignments usually consisted of using GDB in Linux to solve problems with a given file containing assembly instructions. This way we were able to learn in-depth about low level programming, and utilize our knowledge to learn about basic computer and file architecture. Towards the end, the class focus shifted into learning about code optimization.";
}

function CS25X()
{
	document.getElementById("class_description").innerHTML = "<b>Discrete Structures I and II</b>: Discrete Structures one and two were math heavy courses which helped us improve our problem solving abilities. The courses involved CS related mathematical concepts such as graph theory, set theory, and proof methods. These courses would further our knowledge in the uderlying math that is very tightly connected with Computer Science. The knowledge from this class would be applied to upper division classes.";
}

function CS300()
{
	document.getElementById("class_description").innerHTML = "<b>Elements of Software Engineering</b>: The course discussed topics of software engineering which are used in the industry. We started out by learning about the different SWE models -- agile, waterfall, spiral etc. The discussion of these models was in-depth, involving the very initial steps all the way to the end steps. We compared and contrasted each of these models and saw how they accomodate changing business needs. The class consisted of a major project -- creating a data processing application for a virtual hospital. We would utilize the Waterfall methodologies to starting with requirements and incrementally go to design, implementation, and testing.";
}

function CS311()
{
	document.getElementById("class_description").innerHTML = "<b>Computational Structures</b>: This class discussed different types of machines and the processes behind those machines. We started off by learning about Deterministic Finite Automata (DFA) and Non-Deterministic Finite Automata (NDFA). Then we learned about PDA, CFL and CFGs. We learned to create each of the machines and discussed their powers and capabilities. We created state diagrams to deepen our understanding as to how each machine functions. We ended the course by learning about the Turing-Machine -- the most powerful computation machine created so far. We tested many language which DFA, NFA, and PDA could recognize to prove that turing machine can compute all of them.";
}

function Welcome()
{
	var person = prompt("Please enter your name: ");
	if(person != null && person.length > 0){
		alert("Welcome to my website " +person+ "! It has some basic functionality utilizing HTML, CSS, and JavaScript");
	}
	else{
		alert("Welcome to my website! It has some basic functionality utilizing HTML, CSS, and Javascript");
	}
}

function display_contact()
{
	document.getElementById("contact").innerHTML = "Dhwanil Chokshi <br> dhwanil.chokshi309@gmail.com <br> 503-442-8420";
}
