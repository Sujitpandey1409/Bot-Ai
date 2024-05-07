const data = [
    {
      "id": 1,
      "question": "What's the difference between GET and POST requests?",
      "response": "GET requests are used to retrieve data from the server, and are visible in the URL. POST requests are used to send data to the server to create/update resources, and the data is included in the body of the request, not visible in the URL."
    },
    {
      "id": 2,
      "question": "Can you explain RESTful APIs?",
      "response": "RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol."
    },
    {
      "id": 3,
      "question": "What is a Promise in JavaScript?",
      "response": "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code that is more readable and efficient."
    },
    {
      "id": 4,
      "question": "How do you handle errors in async/await?",
      "response": "Errors in async/await can be handled using try/catch blocks. You wrap your await call inside a try block, and catch any errors that occur in the catch block."
    },
    {
      "id": 5,
      "question": "What is the virtual DOM?",
      "response": "The virtual DOM is a concept used in web development, primarily with libraries like React. It's a lightweight copy of the real DOM, allowing for efficient updates and rendering of the UI by minimizing direct manipulations of the DOM."
    },
    {
      "id": 6,
      "question": "Can you describe how CORS works?",
      "response": "CORS, or Cross-Origin Resource Sharing, is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. It involves the server setting specific headers that allow for these cross-origin requests."
    },
    {
      "id": 7,
      "question": "What are microservices?",
      "response": "Microservices are a architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. They allow for scalable, flexible, and independent development and deployment of application components."
    },
    {
      "id": 8,
      "question": "Explain the concept of state management in React.",
      "response": "State management in React involves tracking changes to the state (data) of components. This can be done using React's own state management capabilities or through external libraries like Redux, to manage state across multiple components."
    },
    {
      "id": 9,
      "question": "What is a JWT and how is it used?",
      "response": "JWT, or JSON Web Token, is a compact, URL-safe means of representing claims to be transferred between two parties. It's used in authentication and information exchange, allowing servers to verify and trust the data in the token."
    },
    {
      "id": 10,
      "question": "How do you optimize website performance?",
      "response": "Website performance can be optimized through various methods, including minimizing HTTP requests, optimizing file sizes and formats, using content delivery networks, caching, and streamlining code (HTML, CSS, JavaScript)."
    },
    {
      "id": 11,
      "question": "What is Docker and how is it used?",
      "response": "Docker is a platform that enables developers to package applications into containers—standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment."
    },
    {
      "id": 12,
      "question": "Explain the MVC architecture.",
      "response": "The MVC (Model-View-Controller) architecture is a design pattern used in software development to separate the internal representations of information from the ways that information is presented to and accepted from the user."
    },
    {
      "id": 13,
      "question": "What is GraphQL?",
      "response": "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It provides a more efficient, powerful, and flexible alternative to REST."
    },
    {
      "id": 14,
      "question": "How do you manage state in a Redux application?",
      "response": "In a Redux application, state is managed through a single immutable state tree, called the store. Actions are dispatched to describe what happened, and reducers specify how the state changes in response to these actions."
    },
    {
      "id": 15,
      "question": "What are hooks in React?",
      "response": "Hooks are functions that let you “hook into” React state and lifecycle features from function components. They provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle."
    },
    {
      "id": 16,
      "question": "Explain serverless architecture.",
      "response": "Serverless architecture is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. Applications are broken down into individual functions that can be invoked and scaled independently."
    },
    {
      "id": 17,
      "question": "What is a websocket?",
      "response": "WebSockets provide a bidirectional, full-duplex communication channel that operates over a single, long-lived connection. They enable real-time data flow between clients and servers, ideal for web applications requiring constant data exchange."
    },
    {
      "id": 18,
      "question": "How do you ensure code quality?",
      "response": "Ensuring code quality involves practices like regular code reviews, unit and integration testing, adhering to coding standards, and using static code analysis tools to detect potential issues early."
    },
    {
      "id": 19,
      "question": "What is continuous integration and continuous deployment (CI/CD)?",
      "response": "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. CI refers to the automated testing of the application with each code change, while CD automates the delivery of applications to selected infrastructure environments."
    },
    {
      "id": 20,
      "question": "What are Progressive Web Apps (PWAs)?",
      "response": "Progressive Web Apps (PWAs) are web applications that use modern web capabilities to provide a user experience similar to that of mobile apps. They aim to combine the benefits of the web and mobile apps, working offline, fast loading times, and access to device features."
    },
    {
      "id": 21,
      "question": "Explain the concept of dependency injection.",
      "response": "Dependency injection is a design pattern in which an object receives other objects that it depends on, called dependencies. Instead of creating them inside the object, they are passed in as parameters, making the code more modular, testable, and maintainable."
    },
    {
      "id": 22,
      "question": "What is TypeScript and why use it?",
      "response": "TypeScript is a superset of JavaScript that adds static types to the language. Using TypeScript helps catch errors early through its type-checking feature, and makes the codebase more readable and maintainable."
    },
    {
      "id": 23,
      "question": "How do you manage application secrets?",
      "response": "Application secrets, like API keys and passwords, should be managed securely using environment variables or secret management tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault to keep them out of the source code."
    },
    {
      "id": 24,
      "question": "What is NoSQL and when would you use it?",
      "response": "NoSQL databases are non-relational databases designed for large-scale data storage and for massively-parallel, high-performance data processing across a large number of commodity servers. They are used when dealing with large volumes of unstructured data, where the scalability and performance requirements exceed the capabilities of traditional relational databases."
    },
    {
      "id": 25,
      "question": "Explain how you would use Docker in your development workflow.",
      "response": "Docker can be used in development to create a consistent environment that mirrors production, ensuring that applications run the same, regardless of where they are deployed. It simplifies the management of dependencies and makes it easy to test and deploy applications in isolated containers."
    },
    {
      "id": 26,
      "question": "What are environmental variables and why are they important?",
      "response": "Environmental variables are key-value pairs in the operating system used to store data that varies between environments, such as API keys, database passwords, and file paths. They are important for security and configurability, allowing applications to run differently in development, testing, and production environments without code changes."
    },
    {
      "id": 27,
      "question": "What's the importance of responsive design?",
      "response": "Responsive design is crucial in web development to ensure that websites and applications look and function well on a variety of devices and screen sizes. It improves user experience, accessibility, and SEO."
    },
    {
      "id": 28,
      "question": "How do you handle database migrations?",
      "response": "Database migrations are handled by defining changes to the database schema in code. Tools like Liquibase or Flyway can manage and apply these migrations consistently across environments, ensuring the database schema is always in sync with the application's requirements."
    },
    {
      "id": 29,
      "question": "What is the significance of Git in development?",
      "response": "Git is vital for version control, allowing developers to track and manage changes to code over time. It facilitates collaboration, code review, and managing merges, making it easier to maintain the integrity of the codebase while working in teams."
    },
    {
      "id": 30,
      "question": "How can I improve the security of my web application?",
      "response": "Improving web application security involves implementing HTTPS, sanitizing user input to prevent SQL injection and XSS attacks, using secure cookies, managing user permissions wisely, and keeping software up to date to protect against known vulnerabilities."
    },
    {
      "id": 31,
      "question": "What is the purpose of API testing?",
      "response": "API testing focuses on verifying that APIs work as expected, perform efficiently, and are secure from external threats. It helps ensure that the interaction between different software components is error-free."
    },
    {
      "id": 32,
      "question": "Can you explain the Agile development methodology?",
      "response": "Agile is a development methodology that focuses on iterative development, where requirements and solutions evolve through collaborative effort. It promotes flexible responses to change, frequent delivery of products, and a high level of communication among team members and stakeholders."
    },
    {
      "id": 33,
      "question": "What are the key principles of object-oriented programming?",
      "response": "The key principles of object-oriented programming are encapsulation, abstraction, inheritance, and polymorphism. These principles help organize code and make it more reusable, scalable, and manageable."
    },
    {
      "id": 34,
      "question": "What are design patterns and why are they useful?",
      "response": "Design patterns are standardized solutions to common problems in software design. They provide a template for how to solve a problem that can be used in many different situations, promoting code reuse and making the design more robust and easier to maintain."
    },
    {
      "id": 35,
      "question": "How do you approach debugging in your projects?",
      "response": "Debugging involves systematically identifying and removing errors from code. The approach includes using debugging tools, thoroughly testing code, reviewing logs, understanding the system's flow, and sometimes, rubber-duck debugging, where you explain your code line by line to an inanimate object."
    },
    {
      "id": 36,
      "question": "What is A/B testing?",
      "response": "A/B testing is a method of comparing two versions of a webpage or app against each other to determine which one performs better. It involves showing the two versions to different segments of users and analyzing the results to see which version achieves a higher conversion rate or better user engagement."
    },
    {
      "id": 37,
      "question": "Explain the concept of continuous learning in software development.",
      "response": "Continuous learning in software development refers to the ongoing process of acquiring new skills and knowledge in the field. It's essential due to the rapid pace of technological change, helping developers stay updated with the latest tools, techniques, and best practices."
    },
    {
      "id": 38,
      "question": "What are some effective team collaboration tools?",
      "response": "Effective team collaboration tools include version control systems like Git, project management tools like Jira or Trello, communication platforms like Slack or Microsoft Teams, and document sharing tools like Google Drive or Confluence. These tools help teams coordinate work, communicate effectively, and share resources."
    },
    {
      "id": 39,
      "question": "What is pair programming and what are its benefits?",
      "response": "Pair programming is a practice where two developers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it's written. Benefits include improved code quality, knowledge sharing, and faster problem solving."
    },
    {
      "id": 40,
      "question": "How do you ensure accessibility in your web applications?",
      "response": "Ensuring accessibility involves following web standards and guidelines, such as the WCAG, using semantic HTML, ensuring keyboard navigability, providing alternative text for images, and testing with accessibility tools and screen readers to make your application usable for people with disabilities."
    },
    {
      "id": 41,
      "question": "What is the importance of user experience (UX) design?",
      "response": "UX design is crucial because it focuses on fulfilling the user's needs, providing positive experiences that keep users loyal to the product or brand. A good UX enhances the usability, accessibility, and efficiency of user interactions with the application."
    },
    {
      "id": 42,
      "question": "How do you handle data persistence in mobile applications?",
      "response": "Data persistence in mobile applications can be handled using local databases like SQLite or Realm, or through remote database services via APIs. Choices depend on factors like the data structure, required speed, and whether the data needs to be accessible offline."
    },
    {
      "id": 43,
      "question": "What are service workers and how are they used?",
      "response": "Service workers are scripts that run in the background of a browser and support features like push notifications and background sync. They play a crucial role in creating reliable, fast, and engaging web experiences, and are a core component of Progressive Web Apps (PWAs)."
    },
    {
      "id": 44,
      "question": "Can you explain the concept of domain-driven design?",
      "response": "Domain-driven design is an approach to software development that centers on the business domain, its elements, and their interactions, aiming to create software models that solve real-world problems efficiently. It emphasizes collaboration between technical and domain experts to improve software design and functionality."
    },
    {
      "id": 45,
      "question": "What strategies do you use for effective time management in projects?",
      "response": "Effective time management strategies include setting clear goals and priorities, breaking down projects into smaller tasks, using project management tools, avoiding multitasking, setting deadlines, and regularly reviewing and adjusting plans based on progress and feedback."
    },
    {
      "id": 46,
      "question": "How do you approach mobile app security?",
      "response": "Mobile app security involves encrypting data, securing communications with SSL/TLS, implementing proper authentication and authorization, regularly updating and patching applications, and conducting security assessments and code reviews to identify vulnerabilities."
    },
    {
      "id": 47,
      "question": "What is the role of machine learning in web development?",
      "response": "Machine learning can enhance web development by enabling personalized user experiences, optimizing search functions, automating customer support through chatbots, predicting user behavior, and improving security by detecting anomalies and potential threats."
    },
    {
      "id": 48,
      "question": "How do you ensure your code is scalable?",
      "response": "Ensuring code scalability involves writing clean, efficient code, using design patterns that support scalability, leveraging microservices where appropriate, optimizing databases, and planning for horizontal scaling by building systems that can handle increased loads by adding more resources."
    },
    {
      "id": 49,
      "question": "What are the best practices for API design?",
      "response": "Best practices for API design include using RESTful principles, providing meaningful endpoints, using HTTP methods correctly, implementing versioning, ensuring security with authentication and authorization, and documenting the API clearly for ease of use."
    },
    {
      "id": 50,
      "question": "How do you stay updated with the latest technology trends?",
      "response": "Staying updated involves following industry news, participating in developer communities, attending conferences and workshops, taking online courses, reading technical blogs and publications, and experimenting with new technologies and tools."
    },
    {
      "id": 51,
      "question": "How do you stay updated with the latest technology trends?",
      "response": "Staying updated involves following industry news, participating in developer communities, attending conferences and workshops, taking online courses, reading technical blogs and publications, and experimenting with new technologies and tools."
    },
    {
      "id": 52,
      "question": "What is your name?",
      "response": "I'm ChatGPT, nice to meet you!"
    },
    {
      "id": 53,
      "question": "How are you?",
      "response": "I'm just a computer program, so I don't have feelings, but I'm here to help you!"
    },
    {
      "id": 54,
      "question": "What is the weather like today?",
      "response": "I'm sorry, I don't have real-time capabilities. You can check the weather using a weather website or app."
    },
    {
      "id": 55,
      "question": "Can you tell me a joke?",
      "response": "Of course! Why don't skeletons fight each other? They don't have the guts!"
    },
    {
      "id": 56,
      "question": "Who is the president of the United States?",
      "response": "As of my last update, the president of the United States is Joe Biden."
    },
    {
      "id": 57,
      "question": "What is the capital of Japan?",
      "response": "The capital of Japan is Tokyo."
    },
    {
      "id": 58,
      "question": "How do you say 'hello' in Spanish?",
      "response": "Hello in Spanish is 'Hola.'"
    },
    {
      "id": 59,
      "question": "What is the meaning of life?",
      "response": "That's a deep question! The meaning of life can vary from person to person, but many people find purpose in relationships, personal growth, and contributing to society."
    },
    {
      "id": 60,
      "question": "Can you help me with my homework?",
      "response": "I can certainly try! What do you need help with?"
    },
    {
      "id": 61,
      "question": "What is your favorite food?",
      "response": "I don't have personal preferences, but I hear good things about pizza!"
    },
    {
      "id": 62,
      "question": "How do you solve a Rubik's Cube?",
      "response": "Solving a Rubik's Cube involves following a series of algorithms to move the pieces into the correct positions. There are many tutorials and guides available online to help you learn."
    },
    {
      "id": 63,
      "question": "What is the speed of light?",
      "response": "The speed of light in a vacuum is approximately 299,792 kilometers per second (about 186,282 miles per second)."
    },
    {
      "id": 64,
      "question": "Who wrote 'Hamlet'?",
      "response": "The play 'Hamlet' was written by William Shakespeare."
    },
    {
      "id": 65,
      "question": "What is the chemical symbol for water?",
      "response": "The chemical symbol for water is H2O."
    },
    {
      "id": 66,
      "question": "How do I change my password?",
      "response": "To change your password, you'll need to go to your account settings on the website or application you're using and look for the option to change your password."
    },
    {
      "id": 67,
      "question": "What is the tallest mountain in the world?",
      "response": "Mount Everest is the tallest mountain above sea level, standing at 8,848.86 meters (29,031.7 feet)."
    },
    {
      "id": 68,
      "question": "Who painted the Mona Lisa?",
      "response": "The Mona Lisa was painted by Leonardo da Vinci."
    },
    {
      "id": 69,
      "question": "What is the capital of Australia?",
      "response": "The capital of Australia is Canberra."
    },
    {
      "id": 70,
      "question": "What is the meaning of the word 'serendipity'?",
      "response": "Serendipity refers to the occurrence of events by chance in a happy or beneficial way."
    },
    {
      "id": 71,
      "question": "How do I cook pasta?",
      "response": "To cook pasta, bring a pot of salted water to a boil, add the pasta, and cook according to the package instructions until al dente. Then, drain the pasta and serve with your favorite sauce."
    },
    {
      "id": 72,
      "question": "What is the square root of 144?",
      "response": "The square root of 144 is 12."
    },
    {
      "id": 73,
      "question": "What is the capital of Brazil?",
      "response": "The capital of Brazil is Brasília."
    },
    {
      "id": 74,
      "question": "What is the largest planet in our solar system?",
      "response": "Jupiter is the largest planet in our solar system."
    },
    {
      "id": 75,
      "question": "Who discovered gravity?",
      "response": "Sir Isaac Newton is credited with discovering the concept of gravity."
    },
    {
      "id": 76,
      "question": "What is the formula for calculating the area of a circle?",
      "response": "The formula for calculating the area of a circle is A = πr², where A is the area and r is the radius of the circle."
    },
    {
      "id": 77,
      "question": "How do I make pancakes?",
      "response": "To make pancakes, you'll need flour, eggs, milk, baking powder, salt, and butter. Mix the ingredients together to form a batter, then pour the batter onto a hot, greased griddle or frying pan. Cook until bubbles form on the surface, then flip and cook until golden brown on both sides."
    },
    {
      "id": 78,
      "question": "What is the boiling point of water?",
      "response": "The boiling point of water at sea level is 100 degrees Celsius or 212 degrees Fahrenheit."
    },
    {
      "id": 79,
      "question": "Who is the author of 'To Kill a Mockingbird'?",
      "response": "Harper Lee is the author of 'To Kill a Mockingbird'."
    },
    {
      "id": 80,
      "question": "What is the chemical symbol for gold?",
      "response": "The chemical symbol for gold is Au."
    },
    {
      "id": 81,
      "question": "What is the speed of sound?",
      "response": "The speed of sound depends on the medium it travels through, but in dry air at sea level, it's approximately 343 meters per second or 1,125 feet per second."
    },
    {
      "id": 82,
      "question": "How do I tie a tie?",
      "response": "There are various ways to tie a tie, but one common method is the Windsor knot. Start by crossing the wide end of the tie over the narrow end, then bring the wide end up through the loop between the collar and the tie. Wrap it around the narrow end, then bring it down through the loop again and tighten."
    },
    {
      "id": 83,
      "question": "What is the chemical formula for water?",
      "response": "The chemical formula for water is H2O, indicating that each water molecule consists of two hydrogen atoms bonded to one oxygen atom."
    },
    {
      "id": 84,
      "question": "How do I start learning to code?",
      "response": "To start learning to code, choose a programming language and find online tutorials, courses, or books to help you get started. Practice coding regularly and work on small projects to apply what you've learned."
    },
    {
      "id": 85,
      "question": "What is the largest ocean on Earth?",
      "response": "The Pacific Ocean is the largest ocean on Earth."
    },
    {
      "id": 86,
      "question": "Who invented the telephone?",
      "response": "The telephone was invented by Alexander Graham Bell."
    },
    {
      "id": 87,
      "question": "What is the chemical symbol for oxygen?",
      "response": "The chemical symbol for oxygen is O."
    },
    {
      "id": 88,
      "question": "How do I say 'thank you' in French?",
      "response": "Thank you in French is 'Merci'."
    },
    {
      "id": 89,
      "question": "What is the population of China?",
      "response": "As of the latest data, the population of China is over 1.4 billion people."
    },
    {
      "id": 90,
      "question": "Who discovered penicillin?",
      "response": "Penicillin was discovered by Sir Alexander Fleming."
    },
    {
      "id": 91,
      "question": "What is the square root of 100?",
      "response": "The square root of 100 is 10."
    },
    {
      "id": 92,
      "question": "What is the capital of France?",
      "response": "The capital of France is Paris."
    },
    {
      "id": 93,
      "question": "How do I create a budget?",
      "response": "To create a budget, start by calculating your income and listing all your expenses. Allocate a portion of your income to each expense category, such as housing, transportation, groceries, and savings. Track your spending to ensure you stay within your budget."
    },
    {
      "id": 94,
      "question": "What is the largest mammal?",
      "response": "The blue whale is the largest mammal on Earth."
    },
    {
      "id": 95,
      "question": "What is the capital of Russia?",
      "response": "The capital of Russia is Moscow."
    }
  ]

  export default data