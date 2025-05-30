Date: 2025-05-29 
Time: 20:01
Status: 
Tags:
# **A Programmer’s Guide to the Internet**

## **Chapter 1: The Client**

### 1.1 Understanding the Client
- You, the **User**, interact with the internet using a **Client**.
- A **Client** is any software or device that allows interaction with the internet, such as:
    - A browser (Chrome, Firefox, Edge, Safari)
    - A video game client
    - A mobile application
- Websites that load in your browser are called the **Frontend**
### 1.2 Client-Side Execution
- Code that runs on the client (browser or device) is called **client-side code**.
- **JavaScript** is a popular client-side language used to create interactive websites.
- **Client-side rendering** occurs when the browser processes and displays website content dynamically.

### Key Takeaways
✅ You are the **User**.
✅ The browser is the **Client**.
✅ The website interface is the **Frontend**.

---
## **Chapter 2: The Network**
### 2.1 What is a Network?
- When code is run or actions performed in your browser or on your device, they are done in an enviroment accessible to the user. These operations are referred to as client-side
    - Many websites run Javascript in the background to load properly, as this code is run in your browser on the client, they are client side
- A **Network** is a system of interconnected devices communicating through signals.
- Signals can be transmitted via:
    - **Wired connections** (fiber optic, Ethernet cables).
    - **Wireless communication** (WiFi, cellular networks).
- A **global network of fiber optic cables** called the **Backhaul** carries most of the world's internet traffic.

### 2.2 How the Internet Works
- The **internet** is a **global network** connecting devices and enabling information exchange.
- Data travels across networks through a series of encrypted signals.
- A network is a web of encrypted signals transmitted either through cables other than as electromagnetic waves through the air.
    - Once autheticated, devices can interpret these signals
    - Some signals come from WIFI routers, other from local towers, nearly all signals connect to a global network of fiber optic cables (called the Backhaul), carrying encrypted data around the world.

### 2.3 IP Addresses & URLs
Now that we are connected, the user interacts with the network via a client(browser).
- Every device on the internet has a **unique identifier**, called an **IP Address** (e.g., `192.168.1.1`). Not all of them are linked to a URL.
- URLs (Uniform Resource Locators) are **human-readable** addresses that map to IP addresses.
- The **DNS (Domain Name System)** translates URLs into IP addresses.

### Anatomy of a URL
A URL is made up of multiple components:
- **Protocol**: (`http://`, `https://`)
- **Domain**: (`google.com`, `youtube.com`) Each domain is mapped into a IP Address. allows us to gain access to the IP Address.
- **Subdomain**: (`www.`, `blog.`, `store.`)
- **Port**: (`:443`, `:80`, `:3000`) (optional)
- **Path**: (`/dashboard`)
- **Query String**: (`?page=2`)
- **Fragment**: (`#about`)

### 2.4 Network Requests
- When you type a URL and press **Enter**, your **Client** (browser) sends a **Network Request** to a **Server**.
- The request includes:
    - Address: specifies the destination
    - Requests use **HTTP methods**:
        - `GET`: Retrieve data (e.g., load a webpage).
        - `POST`: Send data (e.g., submitting a form).
        - `PUT`: Update existing data.
        - `DELETE`: Remove data.
    - Path/Route: Just as an address locates a home, the path is a room within it, providing specificity.
- The request travels through the network, reaching the **destination server** based on its **IP address**.

### Key Takeaways
✅ The internet is a **global network** of connected devices.
✅ IP Addresses identify devices, and URLs make them human-readable.
✅ DNS translates URLs into IP addresses.
✅ Network requests allow data exchange between **Clients** and **Servers**.

---

## **Chapter 3: Servers & The Backend**

### 3.1 What is a Server?
Hardware running software
- A **Server** is a **computer** or system that listens for network requests and responds accordingly.
- When a client makes a request, the server **processes** it and **returns** the required information.
- Examples of servers:
    - A personal **Raspberry Pi** hosting a website.
    - Google’s **data centers** with thousands of connected machines.
    - Cloud infrastructure (AWS, Azure, Google Cloud).

### 3.2 What Happens When a Request Reaches the Server?
Once the requests arrives, a functional server connected to the internet and set up to listen to incoming requests to its IP Address can decrypt the request and execute code to determine wha the request intends.
1. The **server** receives the request.
2. It **interprets** the request (e.g., fetch a webpage, retrieve data).
3. It processes the logic and communicates with the **database** if needed.
4. It sends a **response** back to the client.

### 3.3 The Backend
- The **backend** is the **server-side** of an application.
- It powers the frontend by handling logic, database operations, and authentication.
- Components of a backend:
    - **Database Management**: Stores and retrieves user data.
    - **Business Logic**: Rules and workflows for processing data.
    - **Authentication & Authorization**: Verifies users and controls access.
    - **API (Application Programming Interface)**: A structured way for frontend and backend to communicate.
    - **Server communication:** Receiving requests from the frontend, processing them, and sending the relevant responses back.

### 3.4 Types of Servers
- **Web Server**: Hosts and serves website files (e.g., Apache, Nginx).
- **Application Server**: Runs backend code (e.g., Node.js, Django, Laravel).
- **Database Server**: Stores and manages data (e.g., MySQL, PostgreSQL, MongoDB).
- **Proxy Server**: Acts as an intermediary between users and the internet.
- **Cloud Servers**: Virtualized servers on platforms like AWS, Google Cloud, and Azure.

### 3.5 A Network of Servers
- A **modern web application** relies on multiple **interconnected servers**:
    - A **frontend server** handles user interface requests.
    - A **backend server** processes logic.
    - A **database server** stores user and system data.
    - External **API servers** may provide additional services.
- Different types of servers:
    - serverless computer
    - cloud functions
    - microservices
- Its all just servers, configured one way or the other. Backend code runs on a server(which is a hardware running software), that is connected via the internet, is accessible via an address(IP address), and is listening to incoming requests, and sending back responses based on the requests. These responses could be HTML code, JSON files depending on what the client requested. The backend server processes these requests by executing business logic, querying databases, and sometimes interacting with other services (like APIs, caching systems, or authentication services) before sending a structured response back to the client.

### 3.6 Web Server
- A mix of backend logic and internet functionalities
- Its constantly listening to network requests

### Key Takeaways
✅ Servers listen for **requests** and respond with data.
✅ The **backend** handles logic, data storage, and processing.
✅ Different types of servers exist, each with a unique role.

---

## **Chapter 4: The Full Stack**

### 4.1 What is Full Stack Development?
- **Frontend + Backend + Database** = **Full Stack Development**.
- Full Stack developers understand both **client-side** (frontend) and **server-side** (backend) development.

### 4.2 Full Stack Components
- **Frontend Technologies**:
    - HTML (Structure)
    - CSS (Styling)
    - JavaScript (Interactivity)
    - Frameworks: React, Vue, Angular
- **Backend Technologies**:
    - Languages: Python, JavaScript (Node.js), PHP, Java, Ruby
    - Frameworks: Express.js, Django, Flask, Laravel
- **Databases**: Send information to a database, which is likely running on a serverside hardware and our information gets store there.
    - SQL Databases(Like a spreadsheet): MySQL, PostgreSQL, SQLite
    - NoSQL Databases(like a dictionary): MongoDB, Firebase, Redis
    - ORMs(Object Relational Mapping): Sequelize, helps us to effectively interface with our databases

### 4.3 API(Application Programming Interface) Development
how do websites talk to each other?
- API Endpoint: Each server has a purpose or functionality and we can connect to it and do stuff remotely. API endpoint is the end destination where the request (that is sent from the client via the internet) is processed. Its located by an URL.
- RESTful APIs:
    - architecture for effective communication
    - within those architectures we have HTTP Methods

### 4.4 Security & Auth
- Needed to make sure you are you to have you login into youtube/google
- to save us from hacking:
    - SQL injection
    - DDOS attack: if i have a website up running on the internet, and theres 2/3 people coming to my website thats pretty low traffic and very inexpensive to host. But if the websites had 2 million users the website would be very expensive to host. So in DDOS attack they make it look like theres 2 million people accessing the website when in case theres only one person.
    - Hashsing, encryption

### 4.4 CI/CD
How do coders ensure their code works before putting it online?
- Continuous Integration and Continuous Deployment
    - another body of logic or pipeline to handle effective deployment of your code to the interwebs
    - you could run tests

### 4.5 Cloud & Serverless
Can we make websites run without traditional servers?
- Its actually just more servers
- AWS: that has some preconfigured process so that you can just plug and play much faster that building it out yourself
- With streamlines processes
    - Cloud functions: instead of building an API endpoint that might return some information or a website where I would have to set up the entire process go and deploy which will take ages. We can just login into some cloud services where i write the code and hit run and its going to run on their systems its live on the internet. explan: google cloud
- Cost benefit analysis

### 4.6 Testing and monitoring
Users are unpredictable.
- Testing makes sure that check things are working before the user goes and uses it
    - unit tests
    - integration tests
    - end to end tests
- Monitor

### 4.7 The Lifecycle of a Request
1. **User enters a URL in the browser** → Browser sends a request.
2. **DNS resolves the domain** → Finds the corresponding **IP address**.
3. **Request reaches the server** → The backend processes the request.
4. **Database interaction (if needed)** → Data is retrieved or stored.
5. **Response is sent back to the client** → The browser renders the page.

### **4.8 APIs & Microservices**
- **APIs** (Application Programming Interfaces) allow different applications to communicate.
- **Microservices** architecture divides backend functionality into small, independent services.

### **Key Takeaways**
✅ Full Stack = **Frontend + Backend + Database**.
✅ **APIs** allow communication between services.
✅ Requests go through multiple layers before reaching the user.

---
### More
- The tip of the iceberg
- Caching
- Microservers
- Queues
- Background processing
- Version Control
- Performance Optimization
- Documentation
- Versionoing