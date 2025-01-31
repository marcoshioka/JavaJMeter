<!-- filepath: /Users/marcosribeirohioka/Projects/JavaJMeter/README.md -->
# JavaJMeter

## Overview
JavaJMeter is a project designed to facilitate performance testing of web applications using Apache JMeter. This project integrates JMeter with Maven, allowing you to run JMeter tests as part of your Maven build process.

## Prerequisites
- Java 8 or higher
- Apache Maven 3.6.0 or higher
- Apache JMeter 5.6.3

## Project Structure
```
JavaJMeter/
├── pom.xml
├── src/
│   └── test/
│       └── jmeter/
│           └── test-plan.jmx
└── README.md
```

## Setup

1. **Clone the Repository**
    ```sh
    git clone https://github.com/yourusername/JavaJMeter.git
    cd JavaJMeter
    ```

2. **How to run the tests**
    ```sh
    jmeter -n -t src/test/jmeter/test-plan-new.jmx -l results/output.jtl
    ```

3. **How to generate the report**
    ```sh
    jmeter -g results/output.jtl -o results/report
    ```

## JMeter Test Plan
Ensure your JMeter test plan (`test-plan.jmx`) is correctly configured and placed in the `jmeter` directory.

## Contact
For questions or feedback, please contact:

Email: marcosribeirohioka@gmail.com  
GitHub: [marcoshioka](https://github.com/marcoshioka)